import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
})
export class AdminProductsComponent {
  products: Product[] = [];
  columns = ['image', 'name', 'category', 'price', 'stock', 'actions'];

  constructor(private service: ProductService, private snack: MatSnackBar) {
    service.products$.subscribe(p => (this.products = p));
  }

  remove(p: Product) {
    if (confirm(`Delete "${p.name}"?`)) {
      this.service.delete(p.id);
      this.snack.open('Product deleted', 'OK', { duration: 2000 });
    }
  }
}