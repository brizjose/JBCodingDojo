# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
import bcrypt
from django.contrib import messages
from .models import *

# Create your views here.

def index(request):
    return render(request, "user_dashboard/index.html")

def login(request):
    return render(request, "user_dashboard/login.html")

def login_process(request):
    uname = request.POST['uname']
    pword = request.POST['pword']
    result = User.objects.LoginValidator(uname, pword)
    if result[0]:
        request.session['id'] = result[1]
        return redirect('/dashboard')
    else:
        for message in result[1]:
            messages.error(request, message)
        return redirect('/login')
    return redirect("/")

def register(request):
    return render(request, "user_dashboard/register.html")

def register_process(request):
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
        return redirect('/register')
    else:
        for message in errors:
            messages.error(request, message)
        return redirect('/register')
    return redirect("/register")

def update(request):
    return render(request, "user_dashboard/update.html")
def create(request):
    return render(request, "user_dashboard/create.html")

def dashboard(request):
    user = User.objects.get(id=request.session['id'])
    context = {
        'logged_user':user
    }
    return render(request,"user_dashboard/dashboard.html",context)