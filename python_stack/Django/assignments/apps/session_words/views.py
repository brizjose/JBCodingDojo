# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from datetime import datetime
from time import strftime
from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
  return render(request, 'session_words/index.html')

def add_word(request):

  print request.POST

  try:
    request.POST['color']
    color = request.POST['color']
  except KeyError:
    color = 'black'
  
  try:
    request.POST['font']
    size = request.POST['font']
  except KeyError:
    size = 'small'

  date = datetime.now().strftime('%A, %b %d %Y')
  
  time = datetime.now().strftime('%H:%M:%S')

  new_word = {
    'word' : request.POST['word'],
    'class' : color,
    'size' : size,
    'date' : date,
    'time' : time
  }
  
  try:
    request.session['words']
  except KeyError:
    request.session['words'] = []

  word_list = request.session['words']
  word_list.append(new_word)
  request.session['words'] = word_list

  return redirect('/session_words')

def reset(request):
  print "got to session words reset method"
  request.session.clear()
  return redirect('/session_words')