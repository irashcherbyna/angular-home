import {Injectable} from '@angular/core';
import {Product} from '../../products/models/Product';
import {Cart} from '../models/Cart';

@Injectable()
export class CartService {

  carts: Cart[] = [];

  addToCart(p: Product): void {
    for (const cart of this.carts) {
      // не самый лучший вариант, может по id сравнивать?
        if (cart.product === p) {
        cart.quantity++;
        return;
      }
    }
    this.carts.push({id: this.carts.length.toString(), product: p, quantity: 1});
  }

  removeFromCart(cartId: string): Cart[] {
    return this.carts.splice(Number(cartId), 1);
  }

  getCarts(): Cart[] {
    return this.carts;
  }
}
