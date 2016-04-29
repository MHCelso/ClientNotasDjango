from django.conf.urls import url, include
from rest_framework import routers
from .views import NotaViewSet

router = routers.SimpleRouter()
router.register(r'notas', NotaViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
]