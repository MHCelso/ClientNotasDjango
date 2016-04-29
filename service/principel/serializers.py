from rest_framework import serializers
from .models import Nota

class NotaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Nota
		fields = ('pk','titulo', 'descripcion')