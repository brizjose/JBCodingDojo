# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from django.core import serializers
from .models import Note

# Create your views here.

def index(request):
    context ={
        'notes':Note.objects.all().order_by('-id')
    }
    return render(request, 'ajax_notes/index.html', context)

def add_note(request):
    context ={
    'title' : request.POST['title'],
    'content' : request.POST['content']
    }
    # result = Note.objects.CreateNote(context)
    # context = {
    #     'notes':Note.objects.all().order_by('-id')
    # }
    # for message in result[1]:
    #     if result[0] == True:
    #         messages.success(request, message)
    #     else:
    #         messages.error(request, message)
    # return render(request, 'ajax_notes/all.html', context)    

    post_data = serializers.serialize("json", context[0])

    return HttpResponse(post_data)

def notes_all(request):
    context = {
        'notes':Note.objects.all()
    }
    return render (request, 'ajax_notes/all.html')

