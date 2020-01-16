# Just registering our custom user model in the admin site, so we can also create users from there.
from django.contrib import admin
from django.contrib.auth import get_user_model
User = get_user_model() # as always, needing to use this get user model function to get access to our custom extended user model.

admin.site.register(User) # registering that User model
