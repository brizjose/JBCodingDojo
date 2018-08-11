from django.conf.urls import url
from . import views           		
  
urlpatterns = [
    url(r'^$', views.index),     	
    url(r'^earn$', views.earn),     	
    url(r'^clear$', views.clear)     	
]
