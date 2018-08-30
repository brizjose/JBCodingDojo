# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django import forms
# Create your models here.

class User(models.Model):
    first_name=models.CharField(max_length=45)
    last_name=models.CharField(max_length=45)
    email=models.EmailField(max_length=45)
    password=models.CharField(max_length=45)
    crated_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

class Leads(models.Model):
    first_name=models.CharField(max_length=45)
    last_name=models.CharField(max_length=45)
    email=models.EmailField(max_length=45)
    crated_at=models.DateField(auto_now=False)
    crated_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

