# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from datetime import datetime
from time import strftime

# Create your views here.
def index(request):
  time = datetime.now()
  context1 = {1:{"date": time.strftime('%A, %b %d %Y')},2:{"time": time.strftime('%H:%M:%S')}}
  print context1
  return render(request, 'time_display/index.html', context1)

