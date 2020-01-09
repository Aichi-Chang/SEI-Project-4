from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF
from rest_framework.permissions import IsAuthenticatedOrReadOnly # our IsAuthenticated permission import, there are a few different options here
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED

from .models import Todo, Tag
from .serializers import PopulatedTodoSerializer, TodoSerializer




# Create your views here.

class ListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        todos = Todo.objects.all() # get all the todos
        serializer = TodoSerializer(todos, many=True)

        return Response(serializer.data) # send the JSON to the client

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
        serializer = TodoSerializer(todo)
        return Response(serializer.data)

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
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data, status=HTTP_200_OK)



