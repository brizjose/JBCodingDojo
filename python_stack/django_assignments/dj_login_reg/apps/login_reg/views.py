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
    if request.method != 'POST':
        return redirect('/')
    else:
        context = {
            'first_name':request.POST['first_name'],
            'last_name':request.POST['last_name'],
            'email':request.POST['email'],
            'username':request.POST['username'],
            'password':request.POST['password'],
            'confirm_password':request.POST['confirm_password']
        }
    
    result = User.objects.RegistrationValidator(context)
    
    for message in result[1]:
        if result[0] == True:
            messages.success(request, message)
        else:
            messages.error(request, message)
    return redirect('/')

def login(request):
    if request.method != 'POST':
        return redirect('/')
    username = request.POST['username']
    password = request.POST['password']
    result = User.objects.LoginValidator(username, password)
    if result[0]:
        request.session['logged_user'] = result[1]
        request.session['user'] = User.objects.get(id=request.session['logged_user']).first_name
        return redirect('/dashboard')
    else:
        for message in result[1]:
            messages.error(request, message)
        return redirect('/')
    return redirect("/")

def logout(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect('/')
    
def dashboard(request):
    context = {
        'logged_user':request.session['logged_user']
    }
    return render(request,"login_reg/dashboard.html",context)

# hash1 = bcrypt.hashpw('test'.encode(), bcrypt.gensalt())
# bcrypt.checkpw('test'.encode(), hash1.encode())