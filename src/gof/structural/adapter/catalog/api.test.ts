import axios from "axios";

it("Deve consultar um produto do catálogo", async () => {
  const productId = 1;
  const response = await axios.get(
    `http://localhost:3001/products/${productId}`
  );
  const output = response.data;
  expect(output.productId).toBe(1);
  expect(output.description).toBe("A");
  expect(output.price).toBe(100);
});
