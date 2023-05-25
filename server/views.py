from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render
from server.nlp import *

class API(APIView):
    def post(self, request):
        input = request.data
        spacyReply(input)
        data = getSpacyData(input)
        return Response(data)