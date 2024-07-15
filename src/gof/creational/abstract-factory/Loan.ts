import crypto from "crypto";

export default abstract class Loan {
  abstract rate: number;

  constructor(
    readonly loanId: string,
    readonly amount: number,
    readonly income: number,
    readonly installments: number,
    readonly type: string
  ) {}

  static create(params: {
    amount: number;
    income: number;
    installments: number;
  }) {
    throw new Error("This method is abstract.");
  }
}

export class MortgageLoan extends Loan {
  rate = 10.0;

  constructor(
    loanId: string,
    amount: number,
    income: number,
    installments: number
  ) {
    super(loanId, amount, income, installments, "mortgage");
    if (installments > 420) {
      throw new Error("The maximum number of installments is 420.");
    }
    if (income * 0.25 < amount / installments) {
      throw new Error(
        "The installment value exceeds 25% of the monthly income."
      );
    }
  }

  static create(params: {
    amount: number;
    income: number;
    installments: number;
  }) {
    const { amount, income, installments } = params;
    const loanId = crypto.randomUUID();
    return new MortgageLoan(loanId, amount, income, installments);
  }
}

export class CarLoan extends Loan {
  rate = 10;

  constructor(
    loanId: string,
    amount: number,
    income: number,
    installments: number
  ) {
    super(loanId, amount, income, installments, "mortgage");
    if (installments > 72) {
      throw new Error("The maximum number of installments is 72.");
    }
    if (income * 0.3 < amount / installments) {
      throw new Error(
        "The installment value exceeds 30% of the monthly income."
      );
    }
  }

  static create(params: {
    amount: number;
    income: number;
    installments: number;
  }) {
    const { amount, income, installments } = params;
    const loanId = crypto.randomUUID();
    return new CarLoan(loanId, amount, income, installments);
  }
}
