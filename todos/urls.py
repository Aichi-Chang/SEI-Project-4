from django.urls import path, include
from .views import TodoListView, TodoDetailView, TagListView, ProjectListView, ProjectDetailView

urlpatterns = [
    path('projects/', ProjectListView.as_view()),
    path('projects/<int:pk>', ProjectDetailView.as_view()),
    path('todos/', TodoListView.as_view()),
    path('todos/<int:pk>/', TodoDetailView.as_view()),
    # path('todos/<int:pk>/tags/', TagListView.as_view()),
    # path('todos/<int:pk>/tags/tag_id', TagDetailView.as_view())
]



