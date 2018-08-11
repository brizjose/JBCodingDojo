# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

from .models import Merchandise

# Create your views here.
merchandise = [{
    'id' : '1',
    'name' : 'Dojo Shirt',
    'price' : 19.99
},{
    'id' : '2',
    'name' : 'Dojo Sweater',
    'price' : 29.99
},{
    'id' : '3',
    'name' : 'Dojo Cup',
    'price' : 4.99
},{
    'id' : '4',
    'name' : 'Algorithm Book',
    'price' : 49.99
}]

def index(request):
    context = { 
        'merch' : merchandise
    }
    return render(request, 'amadon/index.html', context)

def buy(request, idx):
    article_id = idx
    article_qty = float(request.POST['qty'])    
    for article in merchandise:
        if article['id'] == article_id:
            article_price = article['price']
    request.session['quantity'] = int(article_qty)        
    request.session['total'] = article_qty * article_price
    return redirect('/amadon/checkout')

def checkout(request):
    if 'rolling_total' not in request.session:
        request.session['rolling_total'] = 0
    request.session['rolling_total'] += request.session['total']
    if 'quantity_total' not in request.session:
        request.session['quantity_total'] = 0
    request.session['quantity_total'] += request.session['quantity']
    return redirect('/amadon/thanks')

def thanks(request):
    context = {
        'total' : request.session['total'],
        'quantity' : request.session['quantity'],
        'rolling_total' : request.session['rolling_total'],
        'quantity_total' : request.session['quantity_total']
    }
    return render(request, "amadon/checkout.html", context)

def reset(request):
    print "deleting session data"
    # for key in request.session.keys():
    del request.session['rolling_total']
    del request.session['quantity_total']
    # del request.session['total']
    return redirect('/amadon/checkout')