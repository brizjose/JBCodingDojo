# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-08-14 21:51
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user_dashboard', '0006_auto_20180814_1439'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='comment',
            new_name='content',
        ),
        migrations.RenameField(
            model_name='message',
            old_name='message',
            new_name='content',
        ),
        migrations.RemoveField(
            model_name='message',
            name='user',
        ),
        migrations.AddField(
            model_name='message',
            name='message_from',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='messages_from', to='user_dashboard.User'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='message',
            name='message_to',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, related_name='messages_to', to='user_dashboard.User'),
            preserve_default=False,
        ),
    ]