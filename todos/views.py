from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF
from rest_framework.permissions import IsAuthenticatedOrReadOnly # our IsAuthenticated permission import, there are a few different options here
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED

from .models import Todo, Tag
from .serializers import PopulatedTodoSerializer, TodoSerializer




# Create your views here.

class ListView(APIView):

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
        return Response(todo.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


class DetailView(APIView):

    def get(self, _request, pk):
        todo = Todo.objects.get(pk=pk) # get a book by id (pk means primary key)
        serializer = TodoSerializer(todo)

        return Response(serializer.data)

    def put(self, request, pk):
        request.data['owner'] = request.user.id
        todo = Todo.objects.get(pk=pk)
        if todo.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        
        updated_todo = TodoSerializer(data=request.data)
        
        if updated_todo.is_valid():
            updated_todo.save()
            return Response(updated_todo.data)
        return Response(status=HTTP_422_UNPROCESSABLE_ENTITY)
        



