# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-08-14 19:39
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_dashboard', '0005_auto_20180814_1147'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='comment',
            new_name='message',
        ),
    ]