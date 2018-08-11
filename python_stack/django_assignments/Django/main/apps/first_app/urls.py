from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^test$', views.test)  #coming from main/urls.py, if url is first_app/test --as indicated by '^test$', meaning it ends with test, it will go to look for 'test' method in views file --as indicated by views.test 
]