# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

from .models import Note

# Create your views here.

def index(request):
    return render(request, 'ajax_notes/index.html')

def add_note(request):
    title = request.POST['title']
    content = request.POST['content']
    Note.objects.create(title=title, content=content)    
    notes = Note.objects.all()
    print notes[0].content
    return redirect('/ajax_notes')

def notes_all(request):
    context = {
        'notes':Note.objects.all()
    }
    return render (request, 'ajax_notes/all.html', context)