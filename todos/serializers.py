from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Todo, Tag, Project

User = get_user_model()



class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'todos')


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ('id', 'name')


# class PopulatedTagSerializer(TodoSerializer):

#     owner = UserSerializer()


class TodoSerializer(serializers.ModelSerializer):

    # created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M')

    class Meta:
        model = Todo
        fields = ('id', 'heading', 'content', 'completed', 'owner', 'tags', 'project', 'created_at')
        extra_kwargs = {'tags': {'required': False}, 'project': {'required': False}}


class PopulatedTodoSerializer(TodoSerializer):

    owner = UserSerializer()
    tags = TagSerializer(many=True)


class ProjectSerializer(serializers.ModelSerializer): # This comment serializer does the same for comments on a post, serializes and populates them, if we didnt do tbhis we would just see a list of comment IDs returned on a post, instead of the full objects in a list.

    class Meta:
        model = Project
        fields = ('id', 'title', 'note', 'owner', 'todos', 'created_at')
        extra_kwargs = {'todos': {'required': False}}


class PopulatedProjectSerializer(ProjectSerializer): # We use this on comment population to show the owner as a seraoilized nested field. note how this is inherting directly from the comment serializer above, and there for has all its meta class and feilds infromation automatically added

    owner = UserSerializer() # use the owner serializer on the owner field of comments
    todos = TodoSerializer(many=True)



