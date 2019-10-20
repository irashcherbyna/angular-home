import {Product} from '../../products/models/Product';

export class Cart {
  id: string;
  product: Product;
  quantity: number;
}
