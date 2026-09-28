from django.db import models


class Size(models.Model):
    size = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.size


class Fit(models.Model):
    fit = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.fit


class ItemType(models.Model):
    item_type = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.item_type


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    image = models.ImageField(null=True, blank=True, upload_to='images/')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    item_type = models.ForeignKey(
        ItemType,
        on_delete=models.CASCADE,
        related_name='products'
    )
    fit = models.ForeignKey(
        Fit,
        on_delete=models.CASCADE,
        related_name='products'
    )

    def __str__(self):
        return self.name


class ProductItem(models.Model):
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name='items'
    )
    size = models.ForeignKey(
        Size,
        on_delete=models.PROTECT,
        related_name='product_items'
    )
    sku = models.CharField(max_length=50, unique=True)
    stock = models.PositiveIntegerField(default=0)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['product', 'size'],
                name='unique_product_size'
            )
        ]

    def __str__(self):
        return f"{self.product.name} - Talla {self.size.size} (Stock: {self.stock})"