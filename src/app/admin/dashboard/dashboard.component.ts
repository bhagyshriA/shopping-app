import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  products: Product[] = [];

  constructor(service: ProductService) {
    service.products$.subscribe(p => (this.products = p));
  }

  get totalStock() { return this.products.reduce((s, p) => s + p.stock, 0); }
  get inventoryValue() { return this.products.reduce((s, p) => s + p.stock * p.price, 0); }
  get categoryCount() { return new Set(this.products.map(p => p.category)).size; }
  get lowStock() { return this.products.filter(p => p.stock < 15); }
}