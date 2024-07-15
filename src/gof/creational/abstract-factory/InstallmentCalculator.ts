import currency from "currency.js";
import Installment from "./Installment";
import Loan from "./Loan";

export default interface InstallmentCalculator {
  calculate(loan: Loan): Installment[];
}

export class SACInstallmentCalculator implements InstallmentCalculator {
  calculate(loan: Loan): Installment[] {
    const installments: Installment[] = new Array<Installment>();
    let balance = currency(loan.amount);
    let rate = currency(loan.rate).divide(100).divide(12);
    let installmentNumber = 1;
    let amortization = currency(balance.value).divide(loan.installments);
    while (balance.value > 0.1) {
      let interest = currency(balance.value).multiply(rate.value);
      let updatedBalance = currency(balance.value).add(interest.value);
      let amount = currency(interest.value).add(amortization.value);
      balance = currency(updatedBalance.value).subtract(amount.value);
      if (balance.value < 0.1) {
        balance = currency(0);
      }
      installments.push(
        new Installment(
          loan.loanId,
          installmentNumber,
          amount.value,
          amortization.value,
          interest.value,
          balance.value
        )
      );
      installmentNumber++;
    }
    return installments;
  }
}

export class PriceInstallmentCalculator implements InstallmentCalculator {
  calculate(loan: Loan): Installment[] {
    const installments: Installment[] = new Array<Installment>();
    let balance = currency(loan.amount);
    let rate = currency(loan.rate).divide(100).divide(12);
    let installmentNumber = 1;
    const formula = Math.pow(1 + rate.value, loan.installments);
    let amount = balance
      .multiply(formula)
      .multiply(rate)
      .divide(formula - 1);
    while (balance.value > 0.1) {
      let interest = balance.multiply(rate);
      let amortization = amount.subtract(interest);
      balance = balance.subtract(amortization);
      if (balance.value < 0.1) {
        balance = currency(0);
      }
      installments.push(
        new Installment(
          loan.loanId,
          installmentNumber,
          amount.value,
          amortization.value,
          interest.value,
          balance.value
        )
      );
      installmentNumber++;
    }
    return installments;
  }
}
