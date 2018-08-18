# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import User

# Create your views here.

def index(request):
  return render (request,'reviews/index.html')

def add(request):
  return render (request, "reviews/add.html")

def register(request):
  User.objects.ValidateRegistration(request)
  return redirect('/')

def login(request):
  if request.method == 'POST':
    valid = User.objects.ValidateLogin(request)
    print valid
  if valid:
    return redirect('add')
  else:
    return redirect('index')
