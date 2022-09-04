import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  products: Array<Product> = new Array<Product>();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    let name = 'selcuk';
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response
    });
  }
}
