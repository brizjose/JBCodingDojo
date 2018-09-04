# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect, HttpResponse
from django.views.generic import View
from django.core.exceptions import ImproperlyConfigured

# Create your views here.

def index(request):
    return HttpResponse("it's alive!")

class Users(View):
    def get(self, request):
      # Get type view logic here!copy
      # (for REST this would be show all users)
        return render(request,'index.html')
    def post(self, request):
      # Post type view logic here!
      # (for REST this would be create a new user)
        return render(request,'index.html')

#this example renders a different footer, depending on class

class ExampleView(View):
  footerText = "Fake Copyright 2016, Blob the Blob"
  def get(self,request):
    context = {
    'footer':self.footerText
    }
    return render(request, 'views/index.html', context)

class ExtendExample(ExampleView):
  footerText = "Fake Copyright 2017"


