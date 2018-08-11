from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.welcome),     	
    url(r'^start$', views.start),     	
    url(r'^process$', views.process),   	
    url(r'^show$', views.show)     	
]
