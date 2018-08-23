from django.conf.urls import url
from . import views
 
urlpatterns = [
	url(r'^$', views.index, name = "index"),
	url(r'^register$', views.register, name = "register"),
	url(r'^login_request$', views.login_request, name = "login_request"),
]