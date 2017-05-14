from django.db import models
import uuid

def scramble_uploaded_filename(instance, filename):
    extension = filename.split(".")[-1]
    return "{}.{}".format(uuid.uuid4(), extension)

class UploadImage(models.Model):
    image = models.ImageField("Uploaded image", upload_to=scramble_uploaded_filename)
