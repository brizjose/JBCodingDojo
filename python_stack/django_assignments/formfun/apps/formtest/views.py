# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .forms import RegistrationForm, LoginForm
from .models import UserManager, User

# Create your views here.

def index(request):
    regform = RegistrationForm()
    loginform = LoginForm()
    context = {
        'regform':regform,
        'loginform':loginform
    }
    return render(request, "formtest/index.html", context)

# # This is the method that is running in response to that form submission
# def register(request):
#   # Confirm that the HTTP verb was a POST
#   if request.method == "POST":
#     # Bind the POST data to an instance of our RegisterForm
#     bound_form = RegistrationForm(request.POST)
#     # Now test that bound_form using built-in methods!
#     # *************************
#     print bound_form.is_valid() # True or False, based on the validations that were set!
#     print bound_form.errors # Any errors in this form as a dictionary
#     # *************************
#     # We send messages along with request so they print in the screen wherever we've structured the messages div
#     messages.error(request, bound_form.errors)
#     return redirect('index')

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
        return redirect('/')
    else:
        for message in result[1]:
            messages.error(request, message)
        return redirect('/')
    return redirect("/")

def logout(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect('/')
