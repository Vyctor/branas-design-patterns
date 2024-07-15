import ApplyForLoan from "./ApplyForLoan";
import GetLoan from "./GetLoan";
import { RepositoryMemoryFactory } from "./RepositoryFactory";
import { MortgageLoanFactory } from "./LoanFactory";

test("Deve solicitar um financiamento imobiliário", async () => {
  const repositoryFactory = new RepositoryMemoryFactory();
  const loanFactory = new MortgageLoanFactory();
  const applyForLoan = new ApplyForLoan(repositoryFactory, loanFactory);
  const applyForLoanParams = {
    amount: 100000,
    income: 10000,
    installments: 240,
    type: "mortgage",
  };
  const outputApplyForLoan = await applyForLoan.execute(applyForLoanParams);
  const getLoan = new GetLoan(repositoryFactory);
  const outputGetLoan = await getLoan.execute(outputApplyForLoan);
  expect(outputGetLoan.amount).toBe(applyForLoanParams.amount);
  expect(outputGetLoan.income).toBe(applyForLoanParams.income);
  expect(outputGetLoan.installments).toHaveLength(240);
  expect(outputGetLoan.installments.at(0)?.number).toBe(1);
  expect(outputGetLoan.installments.at(0)?.amount).toBe(1416.67);
  expect(outputGetLoan.installments.at(0)?.amortization).toBe(416.67);
  expect(outputGetLoan.installments.at(0)?.interest).toBe(1000);
  expect(outputGetLoan.installments.at(0)?.balance).toBe(99583.33);
  expect(outputGetLoan.installments.at(239)?.number).toBe(240);
  expect(outputGetLoan.installments.at(239)?.amount).toBe(420.83);
  expect(outputGetLoan.installments.at(239)?.amortization).toBe(416.67);
  expect(outputGetLoan.installments.at(239)?.interest).toBe(4.16);
  expect(outputGetLoan.installments.at(239)?.balance).toBe(0);
});
