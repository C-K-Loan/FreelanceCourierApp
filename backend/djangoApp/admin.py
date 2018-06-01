from django.contrib import admin

# Register your models here.
from .models import  User_job, User

admin.site.register(User)
admin.site.register(User_job)
