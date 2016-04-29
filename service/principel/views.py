from rest_framework import viewsets, status
from .models import Nota
from .serializers import NotaSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render

def home(request):
    return render(request, 'cliente.html', {})


class NotaViewSet(viewsets.ModelViewSet):
	queryset = Nota.objects.all()
	serializer_class = NotaSerializer

@api_view(['GET', 'POST'])
def snippet_list(request):
    """
    List all snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Nota.objects.all()
        serializer = NotaSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = NotaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def snippet_detail(request, pk):
    """
    Retrieve, update or delete a snippet instance.
    """
    try:
        snippet = Nota.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = NotaSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = NotaSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)