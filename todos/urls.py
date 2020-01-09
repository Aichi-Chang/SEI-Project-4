from django.urls import path, include
from .views import ListView, DetailView, TagListView

urlpatterns = [
    path('todos/', ListView.as_view()),
    path('todos/<int:pk>/', DetailView.as_view()),
    # path('todos/<int:pk>/tags/', TagListView.as_view()),
    # path('todos/<int:pk>/tags/tag_id', TagDetailView.as_view())
]



