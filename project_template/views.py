from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import loader

import logging

from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.conf import settings

import os

from comment import sim_text_matcher

import search as search_module

# Create your views here.
class FrontendAppView(View):
    def get(self,request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `yarn run build` to test the production version.
                """,
                status=501,
            )

def search_full(request):
    if request.method != "POST":
        return HttpResponse("")
    query_json = request.body

    k = query_json["k"]

    result = search_module.search(query=query_json)

    return JsonResponse(result[:k], safe=False)

def search(request):
    result = sim_text_matcher.keyword(request.GET.get("keyword"))
    result_json = []
    for tuple in result:
        result_json.append({"name":tuple[0],"score":tuple[1]})
    return JsonResponse(result_json, safe=False)

#
#     # if not query:
#     #     output_message = ''
#     #     data = []
#     # else:
#     #     output_message = query
#     #     query_result_list = range(15)
#     #     paginator = Paginator(query_result_list, 10)
#     #     page = request.GET.get('page')
#     #     try:
#     #         data = paginator.page(page)
#     #     except PageNotAnInteger:
#     #         data = paginator.page(1)
#     #     except EmptyPage:
#     #         data = paginator.page(paginator.num_pages)
#
#     # return render_to_response(
#     #     'search.html',
#     #     {
#     #         'output_message': output_message,
#     #         'data': data,
#     #         'magic_url': request.get_full_path(),
#     #     }
#     # )
#
# def search(self,request):
#     query = request.GET.get('search')
#         if not query:
#             output_message = ''
#             data = []
#         else:
#             output_message = query
#             query_result_list = range(15)
#             paginator = Paginator(query_result_list, 10)
#             page = request.GET.get('page')
#             try:
#                 data = paginator.page(page)
#             except PageNotAnInteger:
#                 data = paginator.page(1)
#             except EmptyPage:
#                 data = paginator.page(paginator.num_pages)
