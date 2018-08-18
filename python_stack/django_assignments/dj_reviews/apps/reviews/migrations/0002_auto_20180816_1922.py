# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-08-17 00:22
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='author',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 16, 19, 22, 40, 215000)),
        ),
        migrations.AlterField(
            model_name='author',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 16, 19, 22, 40, 215000)),
        ),
        migrations.AlterField(
            model_name='book',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 16, 19, 22, 40, 216000)),
        ),
        migrations.AlterField(
            model_name='book',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 16, 19, 22, 40, 216000)),
        ),
        migrations.AlterField(
            model_name='review',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 16, 19, 22, 40, 217000)),
        ),
        migrations.AlterField(
            model_name='review',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 16, 19, 22, 40, 217000)),
        ),
        migrations.AlterField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 16, 19, 22, 40, 200000)),
        ),
        migrations.AlterField(
            model_name='user',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 16, 19, 22, 40, 200000)),
        ),
    ]
