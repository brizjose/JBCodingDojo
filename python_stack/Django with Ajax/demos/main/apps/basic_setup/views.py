# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse
from .forms import new_post_form
from .models import Post

# Create your views here.

#this function renders index html with the post form designed in forms.py

def index(request):
    # fetch all posts and render them with form
    context = {
        'posts':Post.objects.all(),
        'post_form':new_post_form()
    }
    return render(request, "basic_setup/index.html", context)

#the form submission is taken over by javascript 
#js will route the submission to ursl.py:post/create which routes to the post_create function  
#post_create function sends data to models for creation in the database

def posts(request):
    if request.method == 'POST':
    # create post (could run validation prior to doing this)
        Post.objects.create(title=request.POST['title'], content=request.POST['content'])
    #create context to render partial html
    context = {
        'posts':Post.objects.all()
    }
    return render(request, "basic_setup/posts.html", context)

#in parallel, we have created an html called posts.html to format the context created above with only the notes