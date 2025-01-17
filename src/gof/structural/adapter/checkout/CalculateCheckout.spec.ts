import CalculateCheckout from "./CalculateCheckout";
import { CatalogGatewayHttp } from "./CatalogGateway";
import { AxiosAdapter, FetchAdapter } from "./HttpClient";

it("Deve calcular o checkout", async function () {
  const input = {
    items: [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 2,
      },
      {
        productId: 3,
        quantity: 3,
      },
    ],
  };

  const httpClient = new FetchAdapter();
  const catalogGateway = new CatalogGatewayHttp(httpClient);
  const calculateCheckout = new CalculateCheckout(catalogGateway);
  const output = await calculateCheckout.execute(input);
  expect(output.total).toBe(1400);
});
