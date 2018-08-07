# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):                                           #we are extending the Model class that is built into Django
    first_name = models.CharField(max_length=50)                    #assigning the type of data, just like in MySQL
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.first_name + " " + self.last_name

class Career(models.Model):
    title = models.CharField(max_length=255)
    year_graduation = models.DateField()
    students = models.ForeignKey(User, blank=True)
    def __str__(self):
        return self.title + " " + self.year_graduation


