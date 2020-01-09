from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF
from rest_framework.permissions import IsAuthenticatedOrReadOnly # our IsAuthenticated permission import, there are a few different options here
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED

from .models import Todo, Tag
from .serializers import PopulatedTodoSerializer, TodoSerializer, TagSerializer




# Create your views here.

class ListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        todos = Todo.objects.all() # get all the todos
        serialized_todos = PopulatedTodoSerializer(todos, many=True)

        return Response(serialized_todos.data) # send the JSON to the client
    

    def post(self, request):
        request.data['owner'] = request.user.id # attach the owner id to the post, we get this from the authentication class, our user it attached as request.user
        todo = TodoSerializer(data=request.data)
        if todo.is_valid():
            todo.save()
            return Response(todo.data, status=HTTP_201_CREATED)
        return Response(todo.errors, status=HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE)


class DetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request, pk):
        todo = Todo.objects.get(pk=pk) # get a book by id (pk means primary key)
        serialized_todos = PopulatedTodoSerializer(todo)
        return Response(serialized_todos.data)

    def put(self, request, pk):
        # why we attach the user as owner again in edit? shoundt it be added already when create the todo?
        request.data['owner'] = request.user.id
        todo = Todo.objects.get(pk=pk)
        if todo.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        # remember to add the original todo here!! or it will create a new todo instead of updating it
        updated_todo = TodoSerializer(todo, data=request.data)
       
        if updated_todo.is_valid():
            updated_todo.save()
            return Response(updated_todo.data)
        return Response(status=HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE)

    
    def delete(self, request, pk):
        todos = Todo.objects.all()
        todo = Todo.objects.get(pk=pk)
        if todo.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        todo.delete()
        serialized_todos = PopulatedTodoSerializer(todos, many=True)
        return Response(serialized_todos.data, status=HTTP_200_OK)


# for tags drop down menu
class TagListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

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
