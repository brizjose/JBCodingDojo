# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-08-15 17:22
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_dashboard', '0009_auto_20180814_1718'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 15, 12, 22, 39, 642000)),
        ),
        migrations.AlterField(
            model_name='message',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 15, 12, 22, 39, 642000)),
        ),
        migrations.AlterField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 15, 12, 22, 39, 641000)),
        ),
        migrations.AlterField(
            model_name='user',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 15, 12, 22, 39, 641000)),
        ),
    ]