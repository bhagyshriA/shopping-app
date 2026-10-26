import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  editId: number | null = null;
  categories = this.service.categories;

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(1)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    image: ['https://picsum.photos/seed/new/400/300', Validators.required],
    description: ['', [Validators.required, Validators.maxLength(300)]],
  });

  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editId = Number(id);
      const p = this.service.getById(this.editId);
      if (p) this.form.patchValue(p);
      else this.router.navigate(['/admin/products']);
    }
  }

  get f() { return this.form.controls; }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    if (this.editId) {
      this.service.update({ id: this.editId, ...value });
      this.snack.open('Product updated', 'OK', { duration: 2000 });
    } else {
      this.service.add(value);
      this.snack.open('Product added', 'OK', { duration: 2000 });
    }
    this.router.navigate(['/admin/products']);
  }
}