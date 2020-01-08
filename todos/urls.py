from django.urls import path, include
from .views import ListView, DetailView

urlpatterns = [
    path('todos/', ListView.as_view()),
    path('todos/<int:pk>/', DetailView.as_view()),
]



