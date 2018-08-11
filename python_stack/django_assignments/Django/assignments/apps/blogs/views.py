# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string

from .models import Blog

def index(request):
    return render(request, 'blogs/index.html', { "blogs": Blog.objects.all() })

def new(request): 
    return render(request, 'blogs/new.html')  

def show(request, id): 
    return render(request, 'blogs/show.html', { "blog": Blog.objects.get(id = id) })  

def update(request, id):
	if len(errors):
		for tag, error in errors.iteritems():
			messages.error(request, error, extra_tags = tag)
		return redirect('blogs/edit/'+id)
	else:
		blog = Blog.objects.get(id = id)
		blog.name = request.POST['name']
		blog.desc = request.POST['desc']
		blog.save()
		return redirect('/blogs')
    # return redirect('../show/'+id) 

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

def destroy(request, blog):
    return redirect('/blogs')