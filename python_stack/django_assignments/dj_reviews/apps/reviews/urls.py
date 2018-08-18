from django.conf.urls import url
from . import views           	
  
urlpatterns = [
    url(r'^$', views.index, name="index"),     
    url(r'^login$', views.login),     
    url(r'^register$', views.register),     
    url(r'^logout$', views.logout, name="logout"),     
    url(r'^books$', views.books, name="books"),     
    url(r'^books/add$', views.add, name="add"),     
    url(r'^add_review$', views.add_review, name="add_review"),     
    url(r'^books/(?P<id>\d+)$', views.book_page, name="book_page"),     
    url(r'^books/(?P<id>\d+)/new_review$', views.new_review, name="new_review"),     
    url(r'^users/(?P<id>\d+)$', views.users, name="users"),     
]
