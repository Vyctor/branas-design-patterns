import { ProductDTO } from "./CatalogGateway";
import Item from "./Item";

export default class Order {
  items: Item[];
  constructor() {
    this.items = [];
  }

  addProduct(product: ProductDTO, quantity: number): void {
    this.items.push(new Item(product.productId, quantity, product.price));
  }

  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.total, 0);
  }
}
