import CatalogGateway from "./CatalogGateway";
import Order from "./Order";

export default class CalculateCheckout {
  constructor(private readonly catalogGateway: CatalogGateway) {}

  async execute(input: Input): Promise<Output> {
    const order = new Order();

    for (const product of input.items) {
      const item = await this.catalogGateway.getProduct(product.productId);
      order.addProduct(item, product.quantity);
    }

    const total = order.getTotal();
    return { total };
  }
}

type Input = {
  items: { productId: number; quantity: number }[];
};

type Output = {
  total: number;
};
