from django.conf.urls import url
from . import views           		
  
urlpatterns = [
    url(r'^$', views.index),     	
    url(r'^buy/(?P<idx>\d+)$', views.buy),
    url(r'^checkout$', views.checkout),     	
    url(r'^thanks$', views.thanks),     	
    url(r'^reset$', views.reset)     	
]

# url(r'^(?P<blog>\d+)$', views.blog),