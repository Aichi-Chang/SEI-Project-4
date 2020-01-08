from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Todo, Tag

User = get_user_model()


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ('id', 'name')


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'todos')


class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = ('id', 'heading', 'content', 'completed')


class PopulatedTodoSerializer(TodoSerializer):

    owner = UserSerializer()
    tags = TagSerializer(many=True)