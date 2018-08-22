# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import bcrypt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.

class UserManager(models.Manager):

    def RegistrationValidator(self, context):
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
            if context['password'] != context['confirm_password']:
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

class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField(max_length=45)
    username = models.CharField(max_length=45)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager

