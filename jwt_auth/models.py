from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):

    # custom fields here...
    email = models.CharField(max_length=50, unique=True)
    # image = models.CharField(max_length=200)