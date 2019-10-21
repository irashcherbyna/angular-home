import {Component, OnInit} from '@angular/core';
import {Product} from '../models/Product';
import {ProductsService} from '../services/products.service';
import {CartService} from '../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products = this.productService.findAll();
  }

  // в шаблоне стоит product.id в качестве значения параметра,
  // поэтому не понятно почему ищем объект по индексу this.products[id]
  onBuy(id: string): void {
    this.cartService.addToCart(this.products[id]);
  }
}
