from django.contrib import admin
from .models import Todo, Tag

# Register your models here.


admin.site.register(Todo)
admin.site.register(Tag)
