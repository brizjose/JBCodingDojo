from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^survey/$', views.welcome),     	
    url(r'^survey/start$', views.start),     	
    url(r'^survey/process$', views.process),   	
    url(r'^survey/show$', views.show)     	
]
