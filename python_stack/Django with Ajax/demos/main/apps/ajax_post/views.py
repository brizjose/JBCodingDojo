# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core import serializers
from django.shortcuts import render, HttpResponse, redirect

from .models import Note

# Create your views here.

def index(request):
    return render(request, "ajax_post/index.html")   

def note(request):
    Note.objects.create(content=request.POST['content'])
    notes = Note.objects.all().order_by('-id')
    context = {
        'notes':notes
    }
    return render(request, 'ajax_post/notes.html', context)