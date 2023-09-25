from django.shortcuts import get_object_or_404, render, redirect

from .models import Category, Product
from django.core.mail import send_mail
from django.conf import settings


def categories(request):
    return {
        'categories': Category.objects.all()
    }



def product_all(request):
    products = Product.objects.all()
    return render (request, 'store/home.html', {'products': products})

def category_list(request, category_slug=None):
    category = get_object_or_404(Category, slug=category_slug)
    products = Product.objects.filter(category=category)
    return render(request, 'store/products/category.html', {'category': category, 'products': products})


def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug, in_stock=True)
    return render(request, 'store/products/singlePage.html', {'product': product})

def delivery_page(request):
    return render(request, 'store/Delivery.html')


def about(request):
    return render(request, 'store/About.html')


def order_tracking(request):
    return render(request, 'store/order_tracking.html')

def reviews(request):
    return render(request, 'store/reviews.html')

def order(request):
    return render(request, 'store/order.html')

def success_page(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        address = request.POST.get('address')
        phone = request.POST.get('phone')

        # Отправка данных заказа на почту
        subject = 'New Order'
        message = f'Name: {name}\nAddress: {address}\nPhone: {phone}'
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = ['deninfo@mail.ru']  # Здесь укажите адрес получателя
        send_mail(subject, message, from_email, recipient_list)

        # Возвращаем пользователя на другую страницу после успешной отправки
        return redirect('store/success_page')  # Используем именованный URL-путь

    return render(request, 'store/success_page.html')  # Отображение страницы формы заказа