export default class Item {
  constructor(
    readonly productId: number,
    readonly quantity: number,
    readonly price: number
  ) {}

  get total(): number {
    return this.price * this.quantity;
  }
}
