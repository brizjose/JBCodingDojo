from django.conf.urls import url
from . import views           
  
urlpatterns = [
    url(r'^$', views.index),    
    url(r'^new$', views.new),    
    # url(r'^(?P<id>/d+)$', views.show),    
    # url(r'^edit/(?P<blog>\d+)$', views.edit),    
    # url(r'^update/(?P<blog>\d+)$', views.udpate),    
    url(r'^delete/(?P<blog>\d+)$', views.destroy),
    url(r'^create$', views.create),    
    url(r'^(?P<blog>\d+)/$', views.blog),
]
