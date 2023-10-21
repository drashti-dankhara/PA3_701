import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';

  constructor(private productService: ProductService) { }

  addProduct() {
    const newProduct = {
      name: this.productName,
      price: this.productPrice,
      description: this.productDescription
    };

    this.productService.addProduct(newProduct).subscribe(() => {
      // Product added successfully, do something if needed
    });
  }
}
