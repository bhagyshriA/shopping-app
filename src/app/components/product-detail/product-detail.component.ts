import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(private route: ActivatedRoute, private router: Router, private service: ProductService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.service.getById(Number(params.get('id')));
      if (!this.product) this.router.navigate(['/products']);
    });
  }
}