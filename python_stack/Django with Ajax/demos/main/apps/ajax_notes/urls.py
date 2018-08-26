from django.conf.urls import url
from . import views           	
  
urlpatterns = [
    url(r'^$', views.index, name="index"),     
    url(r'^create_note$', views.create_note, name="create_note"),     
    url(r'^delete_note/(?P<id>\d+)$', views.delete_note, name="delete_note"),     
    url(r'^edit_note/(?P<id>\d+)$', views.edit_note, name="edit_note"),     
]
