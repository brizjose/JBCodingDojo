from django.conf.urls import url
from . import views           
  
urlpatterns = [
    url(r'^blogs$', views.index),    
    url(r'^blogs/new$', views.new),    
    url(r'^blogs/create$', views.create),    
    url(r'^blogs/(?P<blog>\d+)/$', views.blog),    
    url(r'^blogs/(?P<blog>\d+)/edit/$', views.edit),    
    url(r'^blogs/(?P<blog>\d+)/delete/$', views.destroy)    
]
