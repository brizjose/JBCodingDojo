# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.core import serializers
from .models import User

# Create your views here.

def fetch(request):
    return render(request, 'demo_1/fetch.html')

def all_json(request):
    users = User.objects.all()
    users_json = serializers.serialize("json", users)
    return HttpResponse(users_json, content_type="application/json")

def all_html(request):
    user_fetch = User.objects.all()
    return render(request, "demo_1/all.html", {'users':user_fetch})

def find(request):
    return render(request, "demo_1/find.html")
    
def find_process(request):
    users = User.objects.filter(first_name__startswith=request.POST['name_start'])
    print users
    return render(request, "demo_1/all.html", {'users':users})

def create(request):
    return render(request, "demo_1/new.html")

def create_process(request):
    User.objects.create(
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        email=request.POST['email'],
        age=request.POST['age']
    )
    users = User.objects.all().order_by('-id')

    return render(request, "demo_1/all.html", {'users':users})
    