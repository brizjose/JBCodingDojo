# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Merchandise(models.Model):
    name = models.CharField(max_length=255) 
    price = models.DecimalField(decimal_places=2, max_digits=10)
    def __str__(self):
        return self.name

