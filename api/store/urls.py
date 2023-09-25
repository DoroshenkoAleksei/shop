from django.urls import path

from . import views

app_name = 'store'

urlpatterns = [
    path('', views.product_all, name='product_all'),
    path('<slug:slug>', views.product_detail, name='product_detail'),
    path('shop/<slug:category_slug>/', views.category_list, name='category_list'),
    path('delivery/', views.delivery_page, name='delivery'),
    path('About/', views.about, name='about'),
    # path('order_tracking/', views.order_tracking, name='order_tracking'),
    path('reviews/', views.reviews, name='reviews'),
    path('order/', views.order, name='order'),
    path('success_page/', views.success_page, name='success_page'),
]



    

