import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products: Product[] = [];
  categories: string[];

  constructor(private service: ProductService) {
    this.categories = ['All', ...service.categories];
    service.products$.subscribe(p => (this.products = p));
  }

  filtered(cat: string): Product[] {
    return cat === 'All' ? this.products : this.products.filter(p => p.category === cat);
  }
}