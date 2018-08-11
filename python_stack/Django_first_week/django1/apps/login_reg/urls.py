from django.conf.urls import url
import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^new$', views.new, name='new'),
    url(r'^grad$', views.grad, name='grad'),
    url(r'^user/(?P<id>)\d+$', views.show, name='show'),
]

