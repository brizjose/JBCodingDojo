# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

from .models import UserDB

# Create your views here.

users = []

def index(request):
    context = {
        'users' : users
    }
    return render(request, "login_reg/index.html", context)

def show(request, id):
    context = {
        'user' : None
    }
    
    for user in users:
        if str(user['id']) == id:
            context['user'] = user
    return render(request, "login_reg/user.html", context)

def new(request):
    print request.session.iterkeys()
    if users in request.session:        
        user_list = request.session['users']
        new_user = {
                'first_name' : request.POST['fname'],
                'last_name' : request.POST['lname'],
                'email' : request.POST['email']
            }
        user_list.append(new_user)
        request.session['users'] = user_list
    else:
        request.session['users'] = [{
            'first_name' : request.POST['fname'],
            'last_name' : request.POST['lname'],
            'email' : request.POST['email']
        }]
    return redirect('hello:index')

def clear(request):
    for key in request.session.keys():
        del request.session[key]
    # request.session.clear()
    return redirect('hello:index')