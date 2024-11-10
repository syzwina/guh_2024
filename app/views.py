from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UploadedImageSerializer
from .models import UploadedImage

# Create your views here.

class UploadedImageView(viewsets.ModelViewSet):
    serializer_class = UploadedImageSerializer
    queryset = UploadedImage.objects.all()