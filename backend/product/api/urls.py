from rest_framework.routers import DefaultRouter
from product.api.views import ProductViewSet

router = DefaultRouter()
router.register('Product', ProductViewSet, basename="Product")
urlpatterns = router.urls