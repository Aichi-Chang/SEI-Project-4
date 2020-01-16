from django.urls import path
from .views import RegisterView, LoginView # importing our views from JWT auth

# no id send in params to any of these routes

urlpatterns = [
    path('register/', RegisterView.as_view()), # sending requests to  '/register' to the register view(controller)
    path('login/', LoginView.as_view()) # and the same for login
]
