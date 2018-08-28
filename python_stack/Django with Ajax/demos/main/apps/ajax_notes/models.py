# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

# Create your models here.

class NoteManager(models.Manager):
    def CreateNote(self, context):
        messages = []
        if context['title'] == "":
            messages.append("Title cannot be blank, please insert title")
        if context['content'] == "":
            messages.append("Note content cannot be blank, please insert content")
        if len(messages) == 0:
            Note.objects.create(title=context['title'], content=context['content'])
            new_note = Note.objects.last().id    
            return(True, new_note)
        else:
            return(False, messages)

class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = NoteManager()


