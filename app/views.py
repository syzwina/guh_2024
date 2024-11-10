import cv2
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import UploadedImage
from .serializers import UploadedImageSerializer
from geti_sdk.deployment import Deployment
from django.conf import settings

# Load deployment model once
import os

print("Current working directory:", os.getcwd())
deployment = Deployment.from_folder("app/deployment")
deployment.load_inference_models(device="CPU")

class UploadedImageView(viewsets.ModelViewSet):
    serializer_class = UploadedImageSerializer
    queryset = UploadedImage.objects.all()

    @action(detail=False, methods=['post'], url_path='images')
    def upload_and_infer(self, request):
        file = request.FILES.get('image')
        if not file:
            return Response({'error': 'No file uploaded'}, status=status.HTTP_400_BAD_REQUEST)

        # Save image temporarily
        image_path = f"{settings.MEDIA_ROOT}/{file.name}"
        with open(image_path, 'wb+') as destination:
            for chunk in file.chunks():
                destination.write(chunk)

        # Load and convert image for inference
        image = cv2.imread(image_path)
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        # Run inference
        prediction = deployment.infer(image_rgb)

        # Clean up (optional)
        # os.remove(image_path)

        # Extract labels
        labels = [label.name for annotation in prediction.annotations for label in annotation.labels]

        return Response({'labels': labels}, status=status.HTTP_200_OK)
