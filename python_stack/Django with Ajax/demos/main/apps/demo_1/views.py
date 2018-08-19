# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.core import serializers
from .models import User

# Create your views here.

def index(request):
    return render(request, 'demo_1/index.html')

def all_json(request):
    users = User.objects.all()
    users_json = serializers.serialize("json", users)
    return HttpResponse(users_json, content_type="application/json")

def all_html(request):
    users = User.objects.all()
    return render(request, "demo_1/all.html", {'users':users})