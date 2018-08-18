# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from datetime import datetime
from django.contrib import messages
import bcrypt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


# Create your models here.

class UserManager(models.Manager):
    def ValidateRegistration(self, request):
        #validate of request comes from post
        if request.method == 'POST':
            valid = True
            #validate if there are blank fields
            for key in request.POST:
                if request.POST[key] == "":
                    valid = False
                    messages.error(request, "{} field needs to be filled".format(key))
            #validate if password confirmation matches
            if request.POST['password_confirm'] != request.POST['password']:
                valid = False
                messages.error(request, "Passwords don't match")
            if valid == True:
                #more validations start
                #validate if email already exists
                #validate email format:
                if not EMAIL_REGEX.match(request.POST['email']):
                    messages.error(request, "Please use a valid email address")
                #validate lengths of username and password   
                if len(request.POST['username']) < 8:
                    messages.error(request, "Please enter a username, at least 8 characters expected")
                if len(request.POST['password']) < 8:
                    messages.error(request, "Please enter a password, at least 8 characters expected") 
                email_exists = self.filter(email=request.POST['email'])
                if len(email_exists) != 0:
                    valid = False
                    messages.error(request, "Email already exists")
                #validate if username alreagy exists
                username_exists = self.filter(username=request.POST['username'])
                if len(username_exists) != 0:
                    messages.error(request, "Username already exists")
                #more validations end
                if valid == True:
                #send data to database
                    self.create(
                        first_name = request.POST['first_name'],
                        last_name = request.POST['last_name'],
                        email = request.POST['email'],
                        username = request.POST['username'],
                        password = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
                    )
                    messages.success(request, "User has been created")

    def ValidateLogin(self, request):
        valid = True
        logging_user = self.filter(username=self.get(username=request.POST['username']))
        print logging_user.username
        if len(logging_user) > 0:
            logging_user = logging_user[0]
            if bcrypt.checkpw(request.POST['password'].encode(), logging_user.password.encode()):
                request.session['logged_user'] = logging_user
                messages.success(request, "Hello {}, what are did you read? Review it!".format(request.session['logged_user'].first_name))
            else:
                valid = False
                messages.error(request, "Incorrect password")
        else:
            valid = False
            messages.error(request, "Username does not exist")
        return valid
        


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=datetime.now())
    updated_at = models.DateTimeField(default=datetime.now())
    objects = UserManager()


class Author(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=datetime.now())
    updated_at = models.DateTimeField(default=datetime.now())

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name="books")
    created_at = models.DateTimeField(default=datetime.now())
    updated_at = models.DateTimeField(default=datetime.now())

class Review(models.Model):
    user = models.ForeignKey(User, related_name="reviews")
    book = models.ForeignKey(Book, related_name="reviews")
    content = models.TextField()
    rating = models.IntegerField()
    created_at = models.DateTimeField(default=datetime.now())
    updated_at = models.DateTimeField(default=datetime.now())
