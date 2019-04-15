from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^', views.FrontendAppView.as_view()),
    # url(r'^$', views.search, name = 'search')
]
