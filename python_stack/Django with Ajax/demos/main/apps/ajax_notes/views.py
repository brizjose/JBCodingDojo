# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from django.core import serializers
import json
from .models import Note

# Create your views here.

def index(request):
    context ={
        'notes':Note.objects.all().order_by('id')
    }
    return render(request, 'ajax_notes/index.html', context)
    # if you wanted to return html, you could do the following, and it would return details of the first note, for example:
    # return HttpResponse(context['notes'][0].__dict__.__str__())

def create_note(request):
    print request.is_ajax()
    # ^^^^^this above tells us if the request that is coming in is from the form submission or from the jQuery route!
    # now we know the data written in the form is coming to here serialized via javascript
    context = {
    'title' : request.POST['title'],
    'content' : request.POST['content']
    }
    result,note = Note.objects.CreateNote(context)
    if result == True:
        note = Note.objects.get(id=note)
        note_id = note.id
        title = note.title
        content = note.content
        context={'id':note_id,'title':title,'content':content}
        return render(request, 'ajax_notes/_note.html', context)
        # return HttpResponse(note.__dict__.__str__())
    else:
        json_messages = json.dumps(note)
        # print json_messages
        # print note
        # return HttpResponse(note)        
        return HttpResponse(json_messages,content_type="application/json")

def delete_note(request, id):
    note = Note.objects.get(id=id)
    note.delete()
    return redirect('index')

def edit_note(request, id):
    note = Note.objects.get(id=id)
    if request.POST['title'] == "":
        note.title = note.title
    else:
        note.title = request.POST['title']
    if request.POST['content'] == "":
        note.content = note.content
    else:
        note.content = request.POST['content']
    note.save()
    return redirect('index')