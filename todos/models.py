from django.db import models
from django.utils import timezone
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth import get_user_model
User = get_user_model()


# Create your models here.

class Tag(models.Model):
    name = models.TextField(max_length=20)

    def __str__(self):
        return f'{self.name}'


class Project(models.Model):
    title = models.CharField(max_length=50)
    note = models.TextField()
    owner = models.ForeignKey(User, related_name='projects', on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, related_name='projects', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title}: {self.note}, {self.owner}'


class Todo(models.Model):
    heading = models.CharField(max_length=50)
    content = models.TextField(blank=True, null=True)
    completed = models.BooleanField(default=False)
    owner = models.ForeignKey(User, related_name='todos', on_delete=models.CASCADE)
    project = models.ForeignKey(Project, related_name='todos', on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.heading}: {self.content}, {self.owner}'