import {Injectable} from '@angular/core';
import {Product} from '../models/Product';
import {Category} from '../models/Category';

@Injectable()
export class ProductsService {

  products: Product[];

  constructor() {
    this.products = [
      {id: '0', name: 'Spicy Pizza', photo: 'spicy.jpg', price: 100, category: Category.L, isAvailable: true},
      {id: '1', name: 'Pepperoni Pizza', photo: 'pepperoni.jpg', price: 100, category: Category.L, isAvailable: true},
      {id: '2', name: 'Hawaiian Pizza', photo: 'hawaiian.jpg', price: 150, category: Category.L, isAvailable: true},
      {id: '3', name: 'Barbecue Pizza', photo: 'barbecue.jpg', price: 200, category: Category.L, isAvailable: true}
    ];
  }

  findAll(): Product[] {
    return this.products;
  }

  findById(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string): number {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return i;
      }
    }
    return -1;
  }

}
