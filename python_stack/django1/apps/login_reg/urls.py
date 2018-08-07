from django.conf.urls import url
import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^user$', views.new, name='new'),
    url(r'^user/(?P<id>)\d+$', views.show, name='show'),
]

