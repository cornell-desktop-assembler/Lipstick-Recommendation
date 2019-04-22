from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^search/$', views.search_full, name = 'search_full'),
    url(r'^', views.FrontendAppView.as_view()),
]
