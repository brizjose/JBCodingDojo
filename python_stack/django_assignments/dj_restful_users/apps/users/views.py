# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.contrib.messages import constants as messages
from datetime import datetime
from time import strftime

from .models import *

# Create your views here.

def index(request):
  return render(request, "users/index.html")

def users(request):
  users = User.objects.all()
  context = {
    'users':users
  }
  return render(request, "users/users.html", context)

def new(request):
  return render(request, "users/register.html")

def process(request):
  User.objects.create(
    first_name=request.POST['first_name'], 
    last_name=request.POST['last_name'], 
    email=request.POST['email'], 
    password=request.POST['password'],
  )
  return redirect('/users')

def show(request, id):
  context = {
    'user':User.objects.get(id=id)
  }
  return render(request, "users/user.html", context)    

def edit(request, id):
  request.session['user_id'] = id
  user = User.objects.get(id=id)
  request.session['first_name'] = user.first_name
  request.session['last_name'] = user.last_name
  request.session['email'] = user.email
  context = {
    'first_name':user.first_name,
    'last_name':user.last_name,
    'email':user.email
  }
  return render(request, "users/update.html", context)

def editing(request, id):
  user = User.objects.get(id=id)
  if len(request.POST['first_name']) == 0:
    user.first_name = request.session['first_name']
  else:
    user.first_name=request.POST['first_name']
  if len(request.POST['last_name']) == 0:
    user.last_name = request.session['last_name']
  else:
    user.last_name=request.POST['last_name']
  if len(request.POST['email']) == 0:
    user.email = request.session['email']
  else:
    user.email=request.POST['email']
  # if request.POST['password'] == []:
  #   error
  # else:
  user.password = request.POST['password']
  user.updated_at = datetime.now()
  user.save()
  for key in request.session.keys():
    del request.session[key]
  return redirect('/users')

def delete(request, id):
  user = User.objects.get(id=id)
  user.delete()
  return redirect('/users')

  
