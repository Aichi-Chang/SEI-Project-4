from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated # our IsAuthenticated permission import, there are a few different options here
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth import get_user_model

from .models import Todo, Tag, Project
from .serializers import PopulatedTodoSerializer, TodoSerializer, TagSerializer, ProjectSerializer, PopulatedProjectSerializer, OwnerSerializer, PopulatedOwnerSerializer

User = get_user_model()




# Create your views here.



class ProjectListView(APIView): 

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, request):
        projects = Project.objects.filter(owner=request.user)
        serialized_projects = PopulatedProjectSerializer(projects, many=True)

        return Response(serialized_projects.data)

    def post(self, request):
        request.data['owner'] = request.user.id # attach the owner id to the post, we get this from the authentication class, our user it attached as request.user
        project = ProjectSerializer(data=request.data)
        if project.is_valid():
            project.save()
            return Response(project.data, status=HTTP_201_CREATED)
        return Response(project.errors, status=HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE)


class ProjectDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request, pk):
        project = Project.objects.get(pk=pk)
        
        serialized_projects = PopulatedProjectSerializer(project)
        return Response(serialized_projects.data)

    def put(self, request, pk):
        # why we attach the user as owner again in edit? shoundt it be added already when create the todo?
        request.data['owner'] = request.user.id
        project = Project.objects.get(pk=pk)
        if project.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        # remember to add the original todo here!! or it will create a new todo instead of updating it
        updated_project = ProjectSerializer(project, data=request.data)
       
        if updated_project.is_valid():
            updated_project.save()
            return Response(updated_project.data)
        return Response(status=HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE)

    
    def delete(self, request, pk):
        # projects = Project.objects.filter(owner=request.user.id)
        project = Project.objects.get(pk=pk)
        if project.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        project.delete()
        # serialized_projects = PopulatedProjectSerializer(projects, many=True)
        return Response(status=HTTP_200_OK)
        # serialized_projects.data, 

class TodoListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        serialized_todos = PopulatedTodoSerializer(self.get_queryset(), many=True)
        return Response(serialized_todos.data)

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(owner=user.id)

    # def get(self, request):
    #     todos = Todo.objects.all()
    #     # todos = Todo.objects.filter(owner=request.user.id)
    #     # tags = todos.filter(tags__name=request.query_params.get('tags', None))
    #     serialized_todos = PopulatedTodoSerializer(todos, many=True)
    #     return Response(serialized_todos.data)


    def post(self, request):
        request.data['owner'] = request.user.id
        # request.data['project'] = pk
        todo = TodoSerializer(data=request.data)
        if todo.is_valid():
            todo.save()
            # project = todo.instance.project
            # todo = PopulatedTodoSerializer(project)
            return Response(todo.data, status=HTTP_201_CREATED)
        return Response(todo.errors, status=HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE)


class TodoDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, request, pk):
        todo = Todo.objects.get(pk=pk)
        # this doesn't work, only returns "Todo matching query does not exist."
        # if todo.owner.id != request.user.id:
        #     return Response(status=HTTP_401_UNAUTHORIZED)
        serialized_todos = PopulatedTodoSerializer(todo)
        return Response(serialized_todos.data)

    def put(self, request, pk):
        # why we attach the user as owner again in edit? shoundt it be added already when create the todo?
        request.data['owner'] = request.user.id
        # request.data['project'] = pk
        todo = Todo.objects.get(pk=pk)
        if todo.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        # remember to add the original todo here!! or it will create a new todo instead of updating it
        updated_todo = TodoSerializer(todo, data=request.data)
       
        if updated_todo.is_valid():
            updated_todo.save()
            return Response(updated_todo.data)
        return Response(status=HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE)

    
    def delete(self, request, pk, **Kwargs):
        todos = Todo.objects.filter(owner=request.user)
        todo = Todo.objects.get(pk=pk)
        if todo.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        todo.delete()
        serialized_todos = PopulatedTodoSerializer(todos, many=True)
        return Response(serialized_todos.data, status=HTTP_200_OK)


# for tags drop down menu
class TagListView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, _request): # as stated just a GET (index) for this view
        tags = Tag.objects.all() # get  all the categories
        serialized_tags = TagSerializer(tags, many=True) # serialize them
        return Response(serialized_tags.data) # send them back to the client


#     def post(self, request, pk):
#         request.data['owner'] = request.user.id
#         request.data['todo'] = pk
#         tag = TagSerializer(data=request.data)
#         if tag.is_valid():
#             tag.save()
#             todo = Todo.objects.get(pk=pk)
#             serialized_todo = PopulatedTodoSerializer(todo)
#             return Response(serialized_todo, status=HTTP_201_CREATED)
#         return Response(tag.errors, status=HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE)


# class TagDetailView(APIView):

#     permission_classes = (IsAuthenticatedOrReadOnly, )

#     # The URL for this view is to 'api/posts/post_id/tags/tag_id', the comment id is passed as a named argument
#     def delete(self, request, tag_pk, **kwargs): # we can ignore the comment and post id here,
#         tag = Tag.objects.get(pk=tag_pk) # find the comment by its id
#         if tag.owner.id != request.user.id: # check if the request came from the comment owner
#             return Response(status=HTTP_401_UNAUTHORIZED) # if not the comment owner send back unauthorized
#         tag.delete() # delete it
#         return Response(status=HTTP_204_NO_CONTENT)



class UserDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, _request, pk):
        # what is the difference between pk and hyperlink???
        owner = User.objects.filter(id=pk)
        serializer = PopulatedOwnerSerializer(owner, many=True)

        return Response(serializer.data)
