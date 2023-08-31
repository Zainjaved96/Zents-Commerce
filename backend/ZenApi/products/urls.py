from django.urls import path
from .views import CreateProductView, ListProductsView, DeleteProductView, ProductDetailView

urlpatterns = [
    path('create', CreateProductView.as_view(), name="create-product"),
    path('all', ListProductsView.as_view(), name="list-products"),
    path('product/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('product/<int:id>/', DeleteProductView.as_view(), name='delete-product'),
]
