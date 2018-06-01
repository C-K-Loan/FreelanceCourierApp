from django.db import models
from django import forms


#(title = "Template Job", description = "Template Description from API " ,urgency =   69,  payment = 1337,status =  "dringend" ,deadline =  "Gestern" ,image = "https://www.petmd.com/sites/default/files/petmd-cat-happy.jpg")
# Create your models here.
class User_job(models.Model):
	#created_by_user = models.ForeignKey(User)   Preprocess and limit Urgency Int Value(Max10 ) , Convert Timestamp to string b4 saving
	title= models.CharField(max_length=200)
	description = models.CharField(max_length=200)
	urgency = models.IntegerField(default=0)
	#Payment Provided by job creator
	payment = models.IntegerField(default=0)
	# status of the Job, [DONE, PENDING, IN PROGRESS]
	status = models.CharField(max_length = 200) 
	#deadline , when the job should be done
	deadline = models.CharField(max_length = 200)
	#URl or path to image
	image = models.CharField(max_length = 200)
#	def __str__ (self):
#		print (self.title)


class User(models.Model):
    created_jobs = models.ManyToManyField(User_job, related_name='created_by_user')
    accepted_jobs = models.ManyToManyField(User_job ,related_name='started_jobs')
    completed_jobs = models.ManyToManyField(User_job, related_name='finished_jobs')
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email= models.CharField(max_length=50)
    address = models.CharField(max_length=50)
