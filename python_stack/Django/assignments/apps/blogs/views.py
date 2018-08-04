# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string

from models import *

def index(request):
    bloggers = {
        1 : {"blogger" : "Joe Doe" , "theme" : "conspiracy theories"},
        2 : {"blogger" : "Ta Da" , "theme" : "aliens and meteor strikes"}
    }
    return render(request, "blogs/index.html", bloggers)

def new(request): 
    return HttpResponse("placeholder to display a new form to create a new blog")  

def create(request):
	if request.method == "POST":
		print "*"*50
		print request.POST
		print request.POST['name']
		print request.POST['desc']
		request.session['name'] = "test" 
		print "*"*50
		return redirect("/blogs")
	else:
		return redirect("/blogs")

def blog(request, blog):
    return HttpResponse("placeholder to display blog number " + blog)

def edit(request, blog):
    return HttpResponse("placeholder to edit blog number " + blog)

def destroy(request, blog):
    return redirect('/blogs')