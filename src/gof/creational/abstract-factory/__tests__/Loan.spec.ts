import { CarLoan, MortgageLoan } from "../Loan";

test("Deve criar um financiamento imobiliário", () => {
  const loan = MortgageLoan.create({
    amount: 100000,
    income: 10000,
    installments: 240,
  });
  expect(loan.loanId).toBeDefined();
  expect(loan.amount).toBe(100000);
  expect(loan.income).toBe(10000);
  expect(loan.installments).toBe(240);
});

test("Não deve criar um financiamento imobiliário com prazo superior a 420 dias", () => {
  expect(() => {
    MortgageLoan.create({
      amount: 100000,
      income: 10000,
      installments: 421,
    });
  }).toThrow(new Error("The maximum number of installments is 420."));
});

test("Não deve criar um financiamento imobiliário caso a parcela ocupe um valor superior a 25% da renda mensal", () => {
  expect(() => {
    MortgageLoan.create({
      amount: 200_000,
      income: 3300,
      installments: 240,
    });
  }).toThrow(
    new Error("The installment value exceeds 25% of the monthly income.")
  );
});

test("Não deve criar um financiamento veicular ocm prazo superior a 60 meses", () => {
  expect(() => {
    CarLoan.create({
      amount: 100000,
      income: 10000,
      installments: 73,
    });
  }).toThrow(new Error("The maximum number of installments is 72."));
});

test("Não deve criar um financiamento veicular caso a parcela ocupe um valor superior a 30% da renda mensal", () => {
  expect(() => {
    CarLoan.create({
      amount: 200_000,
      income: 9_000,
      installments: 60,
    });
  }).toThrow(
    new Error("The installment value exceeds 30% of the monthly income.")
  );
});
