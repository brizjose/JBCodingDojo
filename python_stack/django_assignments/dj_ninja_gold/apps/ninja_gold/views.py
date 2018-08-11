# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import random
from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    if 'earnings' not in request.session:
        request.session['earnings'] = 0
        request.session['activity'] = []
        request.session['messages'] = []
        request.session['earns'] = 0
    context = {
        'earnings' : request.session['earnings'], 
        'messages' : request.session['messages'], 
    }
    return render(request, "ninja_gold/index.html", context)

def earn(request):
    print request.POST['activity']
    if request.POST['activity'] == "Farm":
        earns = random.randint(10,20)
        request.session['activity'].append("Farm")
    elif request.POST['activity'] == "Cave":
        earns = random.randint(5,10)
        request.session['activity'].append("Cave")
    elif request.POST['activity'] == "House":
        earns = random.randint(2,5)
        request.session['activity'].append("House")
    elif request.POST['activity'] == "Casino":
        earns = random.randint(-50,50)
        request.session['activity'].append("Casino")
    else:
        earns = 0
    request.session['earnings'] += earns
    message = "Earned {} golds from the {}!".format(earns,request.POST['activity'])
    messages = request.session['messages']
    messages.append(message)
    request.session['messages'] = messages
    request.session['earns'] = earns
    return redirect('/ninja_gold')    

def clear(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect("/ninja_gold")
