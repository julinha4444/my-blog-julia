from django.forms import ModelForm
from gossip_girl.models import Blog

# Create the form class.
class BlogForm(ModelForm):
	class Meta:
		model = Blog
		fields = ["adiconar_post"]