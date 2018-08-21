from django.conf.urls import url
from . import views           	
  
urlpatterns = [
    url(r'^fetch$', views.fetch),     
    url(r'^all.json$', views.all_json),     
    url(r'^all.html$', views.all_html),     
    url(r'^find$', views.find),     
    url(r'^find_process$', views.find_process),     
    url(r'^create$', views.create),     
    url(r'^create_process$', views.create_process),     
]