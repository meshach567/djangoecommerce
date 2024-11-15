from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),

    # Authentication APIs
    path('api/auth/', include('djoser.urls')),
    path('api/', include('djoser.urls.jwt')),
    # API ROUTES
    path('api/', include('masters.apis.urls')),
    path('api/', include('product_management.apis.urls')),
    path('api/', include('cart.apis.urls')),
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


# if settings.DEBUG:
#     urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
