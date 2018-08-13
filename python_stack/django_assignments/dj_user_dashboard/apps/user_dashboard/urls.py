from django.conf.urls import url
from . import views           	
  
urlpatterns = [
    url(r'^$', views.index),     
    url(r'^login$', views.login),     
    url(r'^login_process$', views.login_process),     
    url(r'^register$', views.register),     
    url(r'^register_process$', views.register_process),     
    url(r'^update$', views.update),     
    url(r'^create$', views.create),     
    url(r'^dashboard$', views.dashboard),     
]
