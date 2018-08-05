# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

def welcome(request):
    return render(request, 'survey/welcome.html')

def start(request):
    return render(request, 'survey/survey_form.html')

def process(request):
    if request.method == 'POST':
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['comment'] = request.POST['comment']
        # context = {
        #     'name':request.session['name'],
        #     'location':request.session['location'],
        #     'language':request.session['language'],
        #     'comment':request.session['comment']
        # }
        return redirect("/survey/show")
    else:
        return render(request, 'survey/survey_form.html')
    
def show(request):
    context = {
            'name':request.session['name'],
            'location':request.session['location'],
            'language':request.session['language'],
            'comment':request.session['comment']
        }
    return render(request, 'survey/capture.html', context)
    