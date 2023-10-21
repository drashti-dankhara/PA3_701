import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId: string = '';
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      console.log('Product ID:', this.productId);
      this.loadProduct();
    });
  }
  loadProduct() {
    this.productService.getProductById(this.productId).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.productId, this.product).subscribe(updatedProduct => {
      // Product updated successfully, navigate to the product details page or product list page
      this.router.navigate(['/products', updatedProduct._id]);
    });
  }
}
