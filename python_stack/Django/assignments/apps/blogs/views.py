# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
  # the index function is called when root is visited
def index(request):
  return HttpResponse("placeholder to later display all the list of blogs")

def new(request): 
    return HttpResponse("placeholder to display a new form to create a new blog")  

def create(request):
    return redirect('/')

def blog(request, blog):
    return HttpResponse("placeholder to display blog number " + blog)

def edit(request, blog):
    return HttpResponse("placeholder to edit blog number " + blog)

def destroy(request, blog):
    return redirect('/')