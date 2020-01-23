from django.urls import path, include, re_path
from django.conf.urls import url
from .views import TodoListView, TodoDetailView, TagListView, ProjectListView, ProjectDetailView, UserDetailView

urlpatterns = [
    path('projects/', ProjectListView.as_view()),
    path('projects/<int:project_pk>', ProjectDetailView.as_view()),
    path('todos/', TodoListView.as_view()),
    path('projects/<int:project_pk>/todos/<int:todo_pk>/', TodoDetailView.as_view()),
    path('users/<int:pk>/', UserDetailView.as_view()),
    path('tags/', TagListView.as_view())
]



