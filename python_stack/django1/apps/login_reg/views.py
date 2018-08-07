# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

from .models import User, Career

# Create your views here.

users = []

def index(request):
    #SELECT * FROM User;
    print User.objects.all(), "is all our users"

    context = {
        'users' : User.objects.all()
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
    if request.method == 'POST':
        print request.POST
        new_user = User.objects.create(
            first_name = request.POST['fname'],
            last_name = request.POST['lname'],
            date_of_birth = request.POST['dob']
        )
        print new_user
        print new_user.first_name
    return redirect('/login_reg')

def grad(request):
    if request.method == 'POST':
        print request.POST
        new_grad = Career.objects.create(
            title = request.POST['title'],
            year_graduation = request.POST['gyear']
        )
        print new_grad
        print new_grad.title
    return redirect('/login_reg')

    #code below not used because models is used:
        # if users in request.session:        
        #     user_list = request.session['users']
        #     new_user = {
        #             'first_name' : request.POST['fname'],
        #             'last_name' : request.POST['lname'],
        #             'email' : request.POST['email']
        #         }
        #     user_list.append(new_user)
        #     request.session['users'] = user_list
        # else:
        #     request.session['users'] = [{
        #         'first_name' : request.POST['fname'],
        #         'last_name' : request.POST['lname'],
        #         'email' : request.POST['email']
        #     }]
        # return redirect('hello:index')

def clear(request):
    for key in request.session.keys():
        del request.session[key]
    # request.session.clear()
    return redirect('hello:index')