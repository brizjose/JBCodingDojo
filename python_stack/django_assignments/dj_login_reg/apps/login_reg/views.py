# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
import bcrypt
from django.contrib import messages

from .models import *
# Registration:
    # make dict with request.POST data and save it to database
    # validate that:
        # name is longer than 2
        # last name is longer than 1
        # email conforms with regex
        # username is no less than 8 characters
        # password is no less than 8 characters
            # flash list of error messages, if any
        # email and username do not exist in database
            # flash message if they do
    # hash password with bcrypt 
# Login 
    # look up username in database
        # if user does not exist, flash message 
        # if user exists, 
            # get the password and compare with the one on database
            # if not the same, flash message to reenter information
            # if the same, redirect to welcome page

def index(request):
    return render(request, 'login_reg/index.html')

def register(request):
    fname = request.POST['fname']
    lname = request.POST['lname']
    email = request.POST['email']
    uname = request.POST['uname']
    pword = request.POST['pword']
    errors = User.objects.validator(fname, lname, email, uname, pword)

    if len(errors) == 0:
        User.objects.create(
            fname = fname,
            lname = lname,
            email = email,
            uname = uname,
            pword = bcrypt.hashpw(pword.encode(), bcrypt.gensalt())
        )
        messages.success(request, "User has been created")
        return redirect('/')
    else:
        for message in errors:
            messages.error(request, message)
        return redirect('/')

def login(request):
    #validation
    uname = request.POST['uname']
    pword = request.POST['pword']
    result = User.objects.LoginValidator(uname, pword)
    if result[0]:
        request.session['id'] = result[1]
        return redirect('/dashboard')
    else:
        for message in result[1]:
            messages.error(request, message)
        return redirect('/')
    
def dashboard(request):
    user = User.objects.get(id=request.session['id'])
    context = {
        'logged_user':user
    }
    return render(request,"login_reg/dashboard.html",context)

# hash1 = bcrypt.hashpw('test'.encode(), bcrypt.gensalt())
# bcrypt.checkpw('test'.encode(), hash1.encode())