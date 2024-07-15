import InstallmentRepository from "./InstallmentRepository";
import LoanRepository from "./LoanRepository";
import RepositoryFactory from "./RepositoryFactory";

export default class GetLoan {
  private readonly loandRepository: LoanRepository;
  private readonly installmentRepository: InstallmentRepository;

  constructor(repositoryFactory: RepositoryFactory) {
    this.loandRepository = repositoryFactory.createLoanRepository();
    this.installmentRepository =
      repositoryFactory.createInstallmentRepository();
  }

  async execute(input: Input): Promise<Output> {
    const loan = await this.loandRepository.getById(input.loanId);
    const installments = await this.installmentRepository.listByLoanId(
      input.loanId
    );
    const output: Output = {
      amount: loan.amount,
      income: loan.income,
      installments: installments.map((installment) => ({
        number: installment.number,
        amount: installment.amount,
        amortization: installment.amortization,
        interest: installment.interest,
        balance: installment.balance,
      })),
    };
    return output;
  }
}

type Input = {
  loanId: string;
};

type Output = {
  amount: number;
  income: number;
  installments: Array<{
    number: number;
    amount: number;
    amortization: number;
    interest: number;
    balance: number;
  }>;
};
