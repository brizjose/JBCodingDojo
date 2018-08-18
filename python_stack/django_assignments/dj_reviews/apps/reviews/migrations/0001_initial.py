# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-08-16 22:05
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(default=datetime.datetime(2018, 8, 16, 17, 5, 38, 739000))),
                ('updated_at', models.DateTimeField(default=datetime.datetime(2018, 8, 16, 17, 5, 38, 739000))),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(default=datetime.datetime(2018, 8, 16, 17, 5, 38, 739000))),
                ('updated_at', models.DateTimeField(default=datetime.datetime(2018, 8, 16, 17, 5, 38, 739000))),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='books', to='reviews.Author')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('rating', models.IntegerField()),
                ('created_at', models.DateTimeField(default=datetime.datetime(2018, 8, 16, 17, 5, 38, 740000))),
                ('updated_at', models.DateTimeField(default=datetime.datetime(2018, 8, 16, 17, 5, 38, 740000))),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='reviews.Book')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=255)),
                ('username', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(default=datetime.datetime(2018, 8, 16, 17, 5, 38, 724000))),
                ('updated_at', models.DateTimeField(default=datetime.datetime(2018, 8, 16, 17, 5, 38, 724000))),
            ],
        ),
        migrations.AddField(
            model_name='review',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='reviews.User'),
        ),
    ]
