# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from datetime import datetime
from django.db.models import Count
from .models import *

# Create your views here.

def index(request):
    return render (request,'reviews/index.html')

def register(request):
    if request.method != 'POST':
        return redirect('/')
    else:
        context = {
            'first_name':request.POST['first_name'],
            'last_name':request.POST['last_name'],
            'email':request.POST['email'],
            'username':request.POST['username'],
            'password':request.POST['password'],
            'password_confirm':request.POST['password_confirm']
        }
    
    result = User.objects.ValidateRegistration(context)
    
    for message in result[1]:
        if result[0] == True:
            messages.success(request, message)
        else:
            messages.error(request, message)
    return redirect('/')

def login(request):
    if request.method != 'POST':
        return redirect('/')
    username = request.POST['username']
    password = request.POST['password']
    result = User.objects.LoginValidator(username, password)
    if result[0]:
        request.session['logged_user'] = result[1]
        request.session['user'] = User.objects.get(id=request.session['logged_user']).first_name
        return redirect('books')
    else:
        for message in result[1]:
            messages.error(request, message)
        return redirect('/')
    return redirect("/")

def logout(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect('/')
    
def add(request):
    if 'logged_user' not in request.session:
        return redirect('/')
    else:
        context = {
            'authors':Author.objects.all()
        }
            
        return render (request, "reviews/add.html", context)

def add_review(request):
    if request.method != 'POST':
        return redirect('/')
    else:
        context = {
            'title':request.POST['title'],
            'author':request.POST['author_list'],
            'author_first_name':request.POST['author_first_name'],
            'author_last_name':request.POST['author_last_name'],
            'review_content':request.POST['review_content'],
            'rating':request.POST['rating'],
            'logged_user':request.session['logged_user']
        }
        print context
        result = Review.objects.AddReviewValidator(context)
        if result[0] == False:
            for message in result[1]:
                messages.error(request, message)
        else:
            messages.success(request, result[1][0])
        return redirect('add')

def books(request):
    reviews = Review.objects.all().order_by('-id')
    latest = reviews[:3]
    other = reviews[3:]
    context = {
        'latest':latest,
        'other':other
    }
    print other
    return render(request,'reviews/books.html', context)

def book_page(request, id):
    book = Book.objects.get(id=id)
    context = {
        'book':book,
        'reviews':book.reviews.all().order_by('-id')
    }

    return render(request, 'reviews/reviews.html', context) 

def new_review(request, id):
    if request.method != 'POST':
        return redirect('/')
    else:
        context = {
            'book_id':id,
            'review_content':request.POST['review_content'],
            'rating':request.POST['rating'],
            'logged_user':request.session['logged_user']
        }
        print context
        result = Review.objects.NewReviewValidator(context)
        if result[0] == False:
            for message in result[1]:
                messages.error(request, message)
        else:
            messages.success(request, result[1][0])
        return redirect('book_page', id)

def users(request, id):
    users = User.objects.annotate(review_count=Count('reviews'))
    user = users.get(id=id)
    context = {
        'user':user,
        'reviews':user.reviews.all().order_by('-id')
    }
    return render(request, 'reviews/user.html', context) 