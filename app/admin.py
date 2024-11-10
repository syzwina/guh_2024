from django.contrib import admin
from .models import UploadedImage

# Register your models here.

class UploadedImageAdmin(admin.ModelAdmin):
    list_display = ('image', 'uploaded_at')

# Register your models here.

admin.site.register(UploadedImage, UploadedImageAdmin)
