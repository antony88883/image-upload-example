from rest_framework import viewsets
from imageUpload_rest.serializers import UploadImageSerializer
from imageUpload.models import UploadImage

class UploadImageViewSet(viewsets.ModelViewSet):
    queryset = UploadImage.objects.all()
    serializer_class = UploadImageSerializer
