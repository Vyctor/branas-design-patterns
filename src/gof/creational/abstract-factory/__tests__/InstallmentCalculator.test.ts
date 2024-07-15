import {
  PriceInstallmentCalculator,
  SACInstallmentCalculator,
} from "../InstallmentCalculator";
import { MortgageLoan } from "../Loan";

test("Deve calcular as parcelas utilizando SAC", () => {
  const installmentCalculator = new SACInstallmentCalculator();
  const loan = MortgageLoan.create({
    amount: 100000,
    income: 10000,
    installments: 240,
  });
  const installments = installmentCalculator.calculate(loan);
  expect(installments).toHaveLength(240);
  expect(installments.at(0)?.number).toBe(1);
  expect(installments.at(0)?.amount).toBe(1416.67);
  expect(installments.at(0)?.amortization).toBe(416.67);
  expect(installments.at(0)?.interest).toBe(1000);
  expect(installments.at(0)?.balance).toBe(99583.33);
  expect(installments.at(239)?.number).toBe(240);
  expect(installments.at(239)?.amount).toBe(420.83);
  expect(installments.at(239)?.amortization).toBe(416.67);
  expect(installments.at(239)?.interest).toBe(4.16);
  expect(installments.at(239)?.balance).toBe(0);
});

test("Deve calcular as parcelas utilizando Price", () => {
  const installmentCalculator = new PriceInstallmentCalculator();
  const loan = MortgageLoan.create({
    amount: 100000,
    income: 10000,
    installments: 240,
  });
  const installments = installmentCalculator.calculate(loan);
  expect(installments).toHaveLength(240);
  expect(installments.at(0)?.number).toBe(1);
  expect(installments.at(0)?.amount).toBe(1101.09);
  expect(installments.at(0)?.amortization).toBe(101.09);
  expect(installments.at(0)?.interest).toBe(1000);
  expect(installments.at(0)?.balance).toBe(99898.91);
  expect(installments.at(239)?.number).toBe(240);
  expect(installments.at(239)?.amount).toBe(1101.09);
  expect(installments.at(239)?.amortization).toBe(1090.23);
  expect(installments.at(239)?.interest).toBe(10.86);
  expect(installments.at(239)?.balance).toBe(0);
});
