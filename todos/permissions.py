    # from rest_framework import permissions
    # from django.contrib.auth import get_user_model
    # User = get_user_model()




# class IsSuperUser(permissions.BasePermission):

#     def has_permission(self, request, view):
#         return request.user and request.user.is_superuser


# class IsOwnerOnly(permissions.BasePermission):

#     def has_permission(self, request, view):
#         user = User.objects.get(pk=view.owner.id)
#         if request.user == user:
#             if request.user.is_superuser:
#                 return True
#             else:
#                 return False



