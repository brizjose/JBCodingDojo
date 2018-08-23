# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User
# ^^ this is how we import the User model ^^
from django.contrib.auth import authenticate, login
# ^^ this is how we import the authentication methods
# One of the neat things is that user is usable as an element on the templates with request prefixing it.

# Create your views here.

def index(request):
    users = User.objects.all()
    return render(request, "usertest/index.html", {'users':users})

def login_request(request):
    testuser=authenticate(username=request.POST['username'], password=request.POST['password'])
    login(request,testuser)
    print request.user.first_name        
    return redirect('/index')

def register(request):
    User.objects.create_user(first_name=request.POST['first_name'], last_name=request.POST['last_name'], username=request.POST['username'], email=request.POST['email'], password=request.POST['password'])
    return redirect('/index')

