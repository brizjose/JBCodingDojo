# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect, HttpResponse
from django.contrib.messages import constants as messages
from .models import Blog

# Create your views here.

def index(request):
    return HttpResponse('working on validations')

def update(request):
    errors = Blog.objects.basic_validator(request.POST)
    if len(errors):
       for tag, error in errors.iteritems():
          messages.error(request, error, extra_tags=tag)
       return redirect('/blog/edit/'+id)
    else:
        blog = Blog.objects.get(id = id)
        blog.name = request.POST['name']
        blog.desc = request.POST['desc']
        blog.save()
        return redirect('/blogs')