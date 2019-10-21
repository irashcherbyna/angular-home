import {Category} from './Category';

export class Product {
  id: string;
  name: string;
  photo: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}
