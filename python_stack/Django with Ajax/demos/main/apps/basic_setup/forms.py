from django import forms
from .models import Post

class new_post_form(forms.Form):
    title = forms.CharField(max_length=45)
    content = forms.CharField(widget=forms.Textarea)
    
    