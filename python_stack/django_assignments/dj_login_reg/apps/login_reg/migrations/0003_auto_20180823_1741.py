# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-08-23 22:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login_reg', '0002_auto_20180812_1438'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='fname',
            new_name='password',
        ),
        migrations.RemoveField(
            model_name='user',
            name='lname',
        ),
        migrations.RemoveField(
            model_name='user',
            name='pword',
        ),
        migrations.RemoveField(
            model_name='user',
            name='uname',
        ),
        migrations.AddField(
            model_name='user',
            name='first_name',
            field=models.CharField(default='Jose', max_length=45),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='last_name',
            field=models.CharField(default='Briz', max_length=45),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(default='jb1234123', max_length=45),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=45),
        ),
        migrations.AlterField(
            model_name='user',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
