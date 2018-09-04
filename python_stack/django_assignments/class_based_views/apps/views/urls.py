from django.conf.urls import url, 
from . import views
  
# option 1
urlpatterns = [
    url(r'^$', views.ExtendExample.as_view(), name = 'index'),
]
# option2
# urlpatterns = [
#     url(r'^$', views.ExtendExample.as_view(footerText="bananaPhone"), name = 'index'),
# ]

