from django.db import models


# Create your models here.

class Tag(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.name}'

class Todo(models.Model):
    heading = models.CharField(max_length=50)
    content = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.heading}: {self.content}'