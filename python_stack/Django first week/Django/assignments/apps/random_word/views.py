# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
import random
import string

# Create your views here.
counter = 0
def index(request):
    request.session['random_word'] = ''.join([random.choice(string.ascii_letters + string.digits) for n in range(14)])  
    # print request.session['random_word']
    if 'counter' not in request.session:
        request.session['counter'] = 0
    request.session['counter'] += 1
    # print request.session['counter']
    context = {1:{'random_word' : request.session['random_word']}, 2:{'counter' : request.session['counter']}}
    return render(request, "random_word/index.html", context)

def generate(request):
    if request.method == 'POST':
        return redirect('/random_word')

def reset(request):
    if request.method == 'GET':
        for key in request.session.keys():
            del request.session[key]
    return redirect('/random_word')
