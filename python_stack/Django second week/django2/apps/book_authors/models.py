# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Author(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __repr__(self):
        return "<{} {}>".format(self.first_name, self.last_name)
    
class Book(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField(max_length=1000)
    authors = models.ManyToManyField(Author, related_name="authors")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __repr__(self):
        return "<{}>".format(self.name)


#example of python shell commands to assign authors to books:
#php_authors = Author.objects.filter(email__contains="php")
#book_php = Book.objects.filter(name__contains="PHP")
#book_php.authors = php_authors
#print book_php.authors
