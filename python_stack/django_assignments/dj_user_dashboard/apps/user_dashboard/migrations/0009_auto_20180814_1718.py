# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-08-14 22:18
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_dashboard', '0008_auto_20180814_1711'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='user_from',
            new_name='user_from_id',
        ),
        migrations.RenameField(
            model_name='message',
            old_name='user_to',
            new_name='user_to_id',
        ),
    ]
