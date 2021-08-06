from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def landing(request, slug = ''):
    return render(request, 'landing.html')