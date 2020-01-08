from django.urls import path, include
from .views import ListView, DetailView

urlpatterns = [
    path('', ListView.as_view()),
    path('<int:pk>/', DetailView.as_view()),
]



