from django.conf.urls import url
from . import views           	
  
urlpatterns = [
    url(r'^$', views.index, name="main"),     
    url(r'^login$', views.login, name="login"),     
    url(r'^login_process$', views.login_process, name="login_process"),     
    url(r'^register$', views.register, name="registration"),     
    url(r'^register_process$', views.register_process, name="registration_process"),     
    url(r'^users/(?P<id>\d+)$', views.show, name="show"),     
    url(r'^users/(?P<id>\d+)/edit$', views.edit, name="edit"),     
    url(r'^users/editing/(?P<id>\d+)$', views.editing, name="editing"),     
    url(r'^users/updating_pw/(?P<id>\d+)$', views.updating_pw, name="updating_pw"),     
    url(r'^users/(?P<id>\d+)/update$', views.update, name="update"),      
    url(r'^users/add$', views.add, name="add"),     
    url(r'^add_process$', views.add_process, name="add_process"),     
    url(r'^users/dashboard$', views.dashboard, name="dashboard"),     
    url(r'^users/(?P<id>\d+)/delete$', views.delete, name="delete"),     
    url(r'^logout$', views.logout, name="logout"),     
    url(r'^message/(?P<id>\d+)$', views.message, name="message"),     
    url(r'^comment/(?P<u_id>\d+)/(?P<m_id>\d+)$', views.comment, name="comment"),     
]
