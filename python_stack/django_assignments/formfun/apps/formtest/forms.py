from django import forms
from .models import User

class RegistrationForm(forms.Form):
    first_name = forms.CharField(max_length=45)
    last_name = forms.CharField(max_length=45)
    email = forms.EmailField()
    username = forms.CharField(max_length=45)
    password = forms.CharField(max_length=100, widget=forms.PasswordInput)    
    confirm_password = forms.CharField(max_length=100, widget=forms.PasswordInput)