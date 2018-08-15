# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
import bcrypt
from django.contrib import messages
from datetime import datetime, timedelta, tzinfo
import pytz
from time import strftime, gmtime
from .models import *

# Create your views here.

def index(request):
    return render(request, "user_dashboard/index.html")

def login(request):
    if request.method != 'POST':
        return redirect('main')
    return render(request, "user_dashboard/login.html")

def login_process(request):
    if request.method != 'POST':
        return redirect('login')
    uname = request.POST['uname']
    pword = request.POST['pword']
    result = User.objects.LoginValidator(uname, pword)
    if result[0]:
        request.session['logged_user'] = result[1]
        request.session['user'] = User.objects.get(id=request.session['logged_user']).fname
        request.session['user_profile'] = User.objects.get(id=request.session['logged_user']).user_profile
        print request.session['user'], "IS LOGGED IN AS: ", request.session['user_profile']
        return redirect('/users/dashboard')
    else:
        for message in result[1]:
            messages.error(request, message)
        return redirect('/login')
    return redirect("/")

def register(request):
    if request.method != 'POST':
        return redirect('main')
    return render(request, "user_dashboard/register.html")

def register_process(request):
    if request.method != 'POST':
        return redirect('registration')

    fname = request.POST['fname']
    lname = request.POST['lname']
    email = request.POST['email']
    uname = request.POST['uname']
    pword = request.POST['pword']
    if request.POST['admin'] == "Yes":
        user_profile = "admin"
    else:
        user_profile = "user"    
    errors = User.objects.validator(fname, lname, email, uname, pword)
    if len(errors) == 0:
        User.objects.create(
            fname = fname,
            lname = lname,
            email = email,
            uname = uname,
            pword = bcrypt.hashpw(pword.encode(), bcrypt.gensalt()),
            user_profile = user_profile
        )
        messages.success(request, "User has been created")
        return redirect('/register')
    else:
        for message in errors:
            messages.error(request, message)
        return redirect('/register')
    return redirect("/register")

def edit(request, id):
    if 'logged_user' not in request.session:
        return redirect('main')
    if request.method != 'POST':
        return redirect('dashboard')

    user = User.objects.get(id=id)
    print "WILL UPDATE {}, {}, {}, {}".format(user.fname, user.lname, user.email, user.uname)

    context = {
        'id':user.id,
        'fname':user.fname,
        'lname':user.lname,
        'email':user.email,
        'uname':user.uname
    }
    return render(request, "user_dashboard/edit.html", context)

def editing(request, id):
    if request.method != 'POST':
        return redirect('dashboard')
    user = User.objects.get(id=id)
    if len(request.POST['fname']) == 0:
        user.fname = user.fname
    else:
        user.fname=request.POST['fname']
    if len(request.POST['lname']) == 0:
        user.lname = user.lname
    else:
        user.lname=request.POST['lname']
    if len(request.POST['email']) == 0:
        user.email = user.email
    else:
        user.email=request.POST['email']
    if len(request.POST['uname']) == 0:
        user.uname = user.uname
    else:
        user.uname=request.POST['uname']
    if request.POST['admin'] == "Yes":
        user.user_profile = "admin"
    else:
        user.user_profile = "user" 

    errors = User.objects.UserUpdateValidator(id, fname=user.fname, lname=user.lname, email=user.email, uname=user.uname)
    if len(errors) == 0:
        user.updated_at = datetime.now()
        user.save()
        messages.success(request, "User contact successfully updated")
    else:
        for message in errors:
            messages.error(request, message)
    return redirect('/users/'+id+'/edit')

def updating_pw(request, id):
    if request.method != 'POST':
        return redirect('dashboard')
    pword = request.POST['pword']
    pword_confirm = request.POST['pword_confirm']
    errors = User.objects.PasswordValidator(id, pword, pword_confirm)
    if len(errors) == 0:
        user = User.objects.get(id=id)
        user.pword = bcrypt.hashpw(pword.encode(), bcrypt.gensalt())
        user.save()
        messages.success(request, "Password successfully changed")
        return redirect('/users/'+id+'/edit')
    else:
        for message in errors:
            messages.error(request, message)
        return redirect('/users/'+id+'/edit')
    return redirect('/users/'+id+'/edit')

def update(request, id):
    if 'logged_user' not in request.session:
        return redirect('main')
    if request.method != 'POST':
        return redirect('dashboard')
    user = User.objects.get(id=id)
    request.session['fname'] = user.fname
    request.session['lname'] = user.lname
    request.session['email'] = user.email
    request.session['user_profile'] = user.user_profile
    context = {
        'fname':user.fname,
        'lname':user.lname,
        'email':user.email
    }
    return render(request, "user_dashboard/update.html", context)

def add(request):
    if 'logged_user' not in request.session:
        return redirect('main')
    if request.method != 'POST':
        return redirect('dashboard')
    return render(request, "user_dashboard/new.html")

def add_process(request):
    if request.method != 'POST':
        return redirect('dashboard')

    fname = request.POST['fname']
    lname = request.POST['lname']
    email = request.POST['email']
    uname = request.POST['uname']
    pword = request.POST['pword']
    if request.POST['admin'] == "Yes":
        user_profile = "admin"
    else:
        user_profile = "user" 

    errors = User.objects.validator(fname, lname, email, uname, pword)
    if len(errors) == 0:
        User.objects.create(
            fname = fname,
            lname = lname,
            email = email,
            uname = uname,
            pword = bcrypt.hashpw(pword.encode(), bcrypt.gensalt()),
            user_profile = user_profile
        )
        messages.success(request, "User has been created")
        return redirect('add')
    else:
        for message in errors:
            messages.error(request, message)
        return redirect('add')
    return redirect("dashboard")


def delete(request, id):
    if 'logged_user' not in request.session:
        return redirect('main')
    if request.method != 'POST':
        return redirect('dashboard')
    delete_user = User.objects.get(id=id)
    delete_user.delete()
    return redirect('/users/dashboard')

def process(request):
    if request.method != 'POST':
        return redirect('dashboard')
    User.objects.create(
        first_name=request.POST['first_name'], 
        last_name=request.POST['last_name'], 
        email=request.POST['email'], 
        password=request.POST['password'],
    )
    return redirect('/user_dashboard')

def show(request, id):
    if 'logged_user' not in request.session:
        return redirect('main')

    u = User.objects.get(id=id)
    m = u.messages_received.all()

    # #this is an exercise to see if timedelta works:


    # right_now = datetime.now()
    # message_time = u.created_at.replace(tzinfo=None)
    # days_since = (right_now - message_time).days
    # print right_now
    # print message_time
    # print days_since
    # time_since = User.objects.TimeConverter(right_now, message_time)
    # print "TIME SINCE: ",time_since

    message_list = []
    for i in range(0,len(m)):
        c = m[i].comments.all()
        message_dict = {}
        message_dict['id'] = m[i].id
        message_dict['content'] = m[i].content
        message_dict['author'] = str("{} {}".format(m[i].user_from_id.fname, m[i].user_from_id.lname))
        message_dict['date'] = str(m[i].created_at.strftime('%x %X'))
        message_dict['comments'] = []
        
        for j in range(0,len(c)):
            comment_dict = {}
            comment_dict['id'] = c[j].id
            comment_dict['content'] = c[j].content
            comment_dict['author'] = str("{} {}".format(c[j].user.fname, c[j].user.lname))
            comment_dict['date'] = str(c[j].created_at.strftime('%x %X'))
            message_dict['comments'].append(comment_dict)
        message_list.append(message_dict)
 
    context = {
        'user':u,
        'messages':reversed(message_list)
    }
    return render(request,"user_dashboard/user.html", context)

def dashboard(request):
    if 'logged_user' not in request.session:
        return redirect('main')

    users = User.objects.all()
    context = {
        'users':users
    }
    return render(request, "user_dashboard/dashboard.html", context)

def logout(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect('main')

def message(request, id):
    if request.method != 'POST':
        return redirect('dashboard')
    if request.POST['message'] == "":
        return redirect('show', id)
    message = request.POST['message']    
    message_to = User.objects.get(id=id)
    message_from = User.objects.get(id=request.session['logged_user'])
    Message.objects.create(user_to_id=message_to, user_from_id=message_from, content=message)
    return redirect('show', id)

def comment(request, u_id, m_id):
    if request.method != 'POST':
        return redirect('dashboard')
    if request.POST['comment'] == "":
        return redirect('show', u_id)
    comment = request.POST['comment']    
    comment_to = Message.objects.get(id=m_id)
    comment_from = User.objects.get(id=request.session['logged_user'])
    Comment.objects.create(content=comment, user=comment_from, message=comment_to)
    return redirect('show', u_id)
