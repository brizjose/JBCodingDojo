# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index(request):
    message = "Look at all the food!"
    if 'foods' not in request.session:
        message = "Add some food!"
    context = {
        'message' : message
    }
    return render(request, "food_list/index.html", context)

def process(request):
    # print request.POST
    new_food = {
        'type' : request.POST['type'],
        'name' : request.POST['name']
    }

    try: 
        request.session['foods']
    except KeyError:
        request.session['foods'] = []   

    food_list = request.session['foods']    #because one cannot append to a list if it's a key in session, the trick is to bypass with a variable
    food_list.append(new_food)              #append the new entry to the variable
    request.session['foods'] = food_list    #updated list is then assigned back to the session key


    return redirect('/food_list')

def clear(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect('/food_list')

