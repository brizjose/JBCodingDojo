# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from datetime import datetime
import bcrypt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.

class UserManager(models.Manager):
    def validator(self, fname, lname, email, uname, pword):
        errors = []
        email_exists = self.filter(email=email)
        if len(email_exists) != 0:
            errors.append("Email already exists")
        uname_exists = self.filter(uname=uname)
        if len(uname_exists) != 0:
            errors.append("Username already exists")
        if len(fname) < 1:
            errors.append("Please enter first name, more than 1 character expected")
        if len(lname) < 1:
            errors.append("Please enter last name, more than 1 character expected")
        if not EMAIL_REGEX.match(email):
            errors.append("Please use a valid email address")
        if len(uname) < 8:
            errors.append("Please enter a username, at least 8 characters expected")
        if len(pword) < 8:
            errors.append("Please enter a password, at least 8 characters expected")
        return errors

    def LoginValidator(self, uname, pword):
        errors = []
        if uname == "":
            errors.append("Please enter a username address")
        if pword == "":
            errors.append("Please enter a password")
        if len(errors) != 0:
            return (False, errors)
        else:                    
            #because you are in the manager, no need for User.objects.filter()
            #user filter instead of get to avoid getting errors in there are multiple or none
            users = self.filter(uname=uname)
            if len(users) == 0:
                errors.append("Username does not exist")
            else:
                user = users[0]
                u_pword = user.pword 
                if bcrypt.checkpw(pword.encode(), u_pword.encode()):
                    return (True, user.id)
                else:
                    errors.append("Password does not match")
            return (False, errors)

    def UserUpdateValidator(self, id, fname, lname, email, uname):
        errors = []
        email_exists = self.filter(email=email)
        if len(email_exists) != 0:  
            email_user = email_exists[0].id
            if str(email_user) != str(id):
                errors.append("Email already exists! You may not need to update this, leave blank if so.")
        uname_exists = self.filter(uname=uname)
        if len(uname_exists) != 0: 
            uname_user = uname_exists[0].id
            if str(uname_user) != str(id):
                errors.append("Username already exists!  You may not need to update this, leave blank if so.")
        if len(fname) < 1:
            errors.append("Please enter first name, more than 1 character expected")
        if len(lname) < 1:
            errors.append("Please enter last name, more than 1 character expected")
        if not EMAIL_REGEX.match(email):
            errors.append("Please use a valid email address")
        if len(uname) < 8:
            errors.append("Please enter a username, at least 8 characters expected")
        return errors

    def PasswordValidator(self, id, pword, pword_confirm):
        errors = []
        if pword == "":
            errors.append("Please enter a password")
        if len(pword) < 8:
            errors.append('Please choose a password longer than 8 characters')    
        if pword_confirm == "":
            errors.append("Please confirm password")
        if pword != pword_confirm:
            errors.append("Passwords do not match")    
        return errors

    # def EditUser(self, id, fname, lname, email):
        
class User(models.Model):
    fname = models.CharField(max_length=255)
    lname = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    uname = models.CharField(max_length=255)
    pword = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=datetime.now)
    updated_at = models.DateTimeField(default=datetime.now)
    # *************************
    # Connect an instance of UserManager to our Blog model overwriting
    objects = UserManager()
    # *************************
    def __repr__(self):
        return "<{} {}>".format(self.fname, self.lname)

