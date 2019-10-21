import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isOrderCompleted = false;
  carts: Cart[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.carts = this.cartService.getCarts();
  }

  onRemove(cartId: string): void {
    this.cartService.removeFromCart(cartId);
  }

  getCartTotal(): number {
    // попробуйте использовать reduce
    let total = 0;
    this.carts.forEach(cart => (total += cart.quantity));
    return total;
  }

  getTotalAmount(): number {
    let amount = 0;
    this.carts.forEach(cart => (amount += cart.product.price));
    return amount;
  }

  onConfirm(): void {}
}
