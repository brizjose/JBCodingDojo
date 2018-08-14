# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
import bcrypt
from django.contrib import messages
from datetime import datetime
from time import strftime
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
        return redirect('/users/dashboard')
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

def users(request):
    users = User.objects.all()
    context = {
     'users':users
    }
    return render(request, "user_dashboard/userdashboard.html", context)

def edit(request, id):
    user = User.objects.get(id=id)
    print "WILL UPDATE {}, {}, {}, {}".format(user.fname, user.lname, user.email, user.uname)
    context = {
        'id':user.id,
        'fname':user.fname,
        'lname':user.lname,
        'email':user.email,
        'uname':user.uname
    }
    return render(request, "user_dashboard/edit.html", context)

def editing(request, id):
    user = User.objects.get(id=id)
    if len(request.POST['fname']) == 0:
        user.fname = user.fname
    else:
        user.fname=request.POST['fname']
    if len(request.POST['lname']) == 0:
        user.lname = user.lname
    else:
        user.lname=request.POST['lname']
    if len(request.POST['email']) == 0:
        user.email = user.email
    else:
        user.email=request.POST['email']
    if len(request.POST['uname']) == 0:
        user.uname = user.uname
    else:
        user.email=request.POST['uname']
    errors = User.objects.UserUpdateValidator(id, fname=user.fname, lname=user.lname, email=user.email, uname=user.uname)
    if len(errors) == 0:
        user.updated_at = datetime.now()
        user.save()
        messages.success(request, "User contact successfully updated")
    else:
        for message in errors:
            messages.error(request, message)
    return redirect('/users/'+id+'/edit')

def updating_pw(request, id):
    pword = request.POST['pword']
    pword_confirm = request.POST['pword_confirm']
    errors = User.objects.PasswordValidator(id, pword, pword_confirm)
    if len(errors) == 0:
        user = User.objects.get(id=id)
        user.pword = bcrypt.hashpw(pword.encode(), bcrypt.gensalt())
        user.save()
        messages.success(request, "Password successfully changed")
        return redirect('/users/'+id+'/edit')
    else:
        for message in errors:
            messages.error(request, message)
        return redirect('/users/'+id+'/edit')
    return redirect('/users/'+id+'/edit')

def update(request, id):
  user = User.objects.get(id=id)
  request.session['fname'] = user.fname
  request.session['lname'] = user.lname
  request.session['email'] = user.email
  context = {
    'fname':user.fname,
    'lname':user.lname,
    'email':user.email
  }
  return render(request, "user_dashboard/update.html", context)

def new(request):
    return render(request, "user_dashboard/register.html")

def delete(request, id):
  delete_user = User.objects.get(id=id)
  delete_user.delete()
  return redirect('/users/dashboard')

def process(request):
  User.objects.create(
    first_name=request.POST['first_name'], 
    last_name=request.POST['last_name'], 
    email=request.POST['email'], 
    password=request.POST['password'],
  )
  return redirect('/user_dashboard')

def show(request, id):
    user = User.objects.get(id=id)
    context = {
        'user':user
    }
    return render(request,"user_dashboard/user.html",context)

def dashboard(request):
#   request.session['logged_user'] = User.objects.get(id=request.session['id'])
  users = User.objects.all()
  context = {
    'users':users
  }
  return render(request, "user_dashboard/dashboard.html", context)