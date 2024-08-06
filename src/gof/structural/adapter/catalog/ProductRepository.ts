import Product from "./Product";

export default interface ProductRepository {
  getById(productId: number): Promise<Product>;
}

export class ProductRepositoryMemory implements ProductRepository {
  private readonly products = [
    {
      productId: 1,
      description: "A",
      price: 100,
    },
    {
      productId: 2,
      description: "B",
      price: 200,
    },
    {
      productId: 3,
      description: "C",
      price: 300,
    },
  ];

  async getById(productId: number): Promise<Product> {
    const product = this.products.find((p) => p.productId === productId);
    if (product) return product;
    throw new Error("Product not found");
  }
}
