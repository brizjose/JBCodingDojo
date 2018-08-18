from __future__ import unicode_literals
from django.db import models
from datetime import datetime
from django.contrib import messages
import bcrypt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def ValidateRegistration(self, context):
        errors = []
        #validate if there are blank fields
        if context['first_name'] == "":
            errors.append("Please enter a first name")
        if context['last_name'] == "":
            errors.append("Please enter a last name")
        if context['email'] == "":
            errors.append("Please enter an email")
        if context['username'] == "":
            errors.append("Please enter a username")
        if context['password'] == "":
            errors.append("Please enter a password")
        if len(errors) != 0:
            return (False, errors)
        else:
            #more validations start
            #validate if passwords match
            if context['password'] != context['password_confirm']:
                errors.append("Passwords don't match")
            if len(errors) != 0:
                return (False, errors)
            else:
                #validate email format:
                if not EMAIL_REGEX.match(context['email']):
                    errors.append("Please use a valid email address")
                #validate lengths of username and password   
                if len(context['username']) < 8:
                    errors.append("Please enter a username, at least 8 characters expected")
                if len(context['password']) < 8:
                    errors.append("Please enter a password, at least 8 characters expected") 
                #validate if email already exists
                email_exists = self.filter(email=context['email'])
                if len(email_exists) != 0:
                    errors.append("Email already exists")
                #validate if username alreagy exists
                username_exists = self.filter(username=context['username'])
                if len(username_exists) != 0:
                    errors.append("Username already exists")
                #more validations end
                if len(errors) != 0:
                    return (False, errors)
                else:
                #send data to database
                    self.create(
                        first_name = context['first_name'],
                        last_name = context['last_name'],
                        email = context['email'],
                        username = context['username'],
                        password = bcrypt.hashpw(context['password'].encode(), bcrypt.gensalt())
                    )
                    errors.append("User has been created")
                    return (True, errors)

    def LoginValidator(self, username, password):
        errors = []
        if username == "":
            errors.append("Please enter a username")
        if password == "":
            errors.append("Please enter a password")
        if len(errors) != 0:
            return (False, errors)
        else:                    
            logging_user = self.filter(username=username)
            if len(logging_user) == 0:
                errors.append("Username does not exist")
            else:
                user = logging_user[0]
                user_password = user.password 
                if bcrypt.checkpw(password.encode(), user_password.encode()):
                    return (True, user.id)
                else:
                    errors.append("Password does not match")
            return (False, errors)

class ReviewManager(models.Manager):
    def AddReviewValidator(self, context):
        messages = []
        if context['title'] == "":
            messages.append("Please enter a book title")
        if context['author'] == 'author' and context['author_first_name'] == "":
            messages.append("Please select author or enter a new one")
        if context["review_content"] == "":
            messages.append("Please write a review")
        if len(context['review_content']) < 8:
            messages.append("Please make your review at least 8 characters")
        if context['rating'] == '*':
            messages.append("Please select a star rating")
        if len(messages) > 0:
            return (False, messages)
        else:
            if context['author'] == 'author':
                Author.objects.create(first_name=context['author_first_name'], last_name=context['author_last_name'])
                Book.objects.create(title=context['title'], author=Author.objects.last())
            else:
                author = context['author']
                Book.objects.create(title=context['title'], author=Author.objects.get(id=author))

            Review.objects.create(user=User.objects.get(id=context['logged_user']),book=Book.objects.last(),content=context['review_content'],rating=context['rating'])
            messages.append("Review successfully created!")
        return (True, messages)

    def NewReviewValidator(self, context):
        messages = []
        if context["review_content"] == "":
            messages.append("Please write a review")
        if len(context['review_content']) < 8:
            messages.append("Please make your review at least 8 characters")
        if context['rating'] == '*':
            messages.append("Please select a star rating")
        if len(messages) > 0:
            return (False, messages)
        else:
            Review.objects.create(user=User.objects.get(id=context['logged_user']),book=Book.objects.get(id=context['book_id']),content=context['review_content'],rating=context['rating'])
            messages.append("Review successfully created!")
        return (True, messages)


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=datetime.now)
    updated_at = models.DateTimeField(default=datetime.now)
    objects = UserManager()
    def __repr__(self):
        return "<{} {}>".format(self.first_name, self.last_name)

class Author(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=datetime.now)
    updated_at = models.DateTimeField(default=datetime.now)
    def __repr__(self):
        return "<{} {}>".format(self.first_name, self.last_name)

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name="books")
    created_at = models.DateTimeField(default=datetime.now)
    updated_at = models.DateTimeField(default=datetime.now)
    def __repr__(self):
        return "<{}>".format(self.title)

class Review(models.Model):
    user = models.ForeignKey(User, related_name="reviews")
    book = models.ForeignKey(Book, related_name="reviews")
    content = models.TextField()
    rating = models.IntegerField()
    created_at = models.DateTimeField(default=datetime.now)
    updated_at = models.DateTimeField(default=datetime.now)
    objects = ReviewManager()
    def __repr__(self):
        return "<{} {}>".format(self.user, self.book)
