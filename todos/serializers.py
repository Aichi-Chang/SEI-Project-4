from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Todo, Tag

User = get_user_model()



class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'todos')


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ('id', 'name')


class TodoSerializer(serializers.ModelSerializer):

    # created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M')

    class Meta:
        model = Todo
        fields = ('id', 'heading', 'content', 'completed', 'owner', 'tags', 'created_at')
        extra_kwargs = {'tags': {'required': False}}



class PopulatedTagSerializer(TodoSerializer):

    owner = UserSerializer()



class PopulatedTodoSerializer(TodoSerializer):

    owner = UserSerializer()
    tags = TagSerializer(many=True)