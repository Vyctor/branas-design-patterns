import Loan from "./Loan";

export default interface LoanRepository {
  save(loan: Loan): Promise<void>;
  getById(loanId: string): Promise<Loan>;
}

export class LoanRepositoryMemory implements LoanRepository {
  static instance: LoanRepository;
  private loans: Loan[];

  private constructor() {
    this.loans = new Array<Loan>();
  }

  static getInstance(): LoanRepository {
    if (!LoanRepositoryMemory.instance) {
      LoanRepositoryMemory.instance = new LoanRepositoryMemory();
    }
    return LoanRepositoryMemory.instance;
  }

  async save(loan: Loan): Promise<void> {
    this.loans.push(loan);
  }

  async getById(loanId: string): Promise<Loan> {
    const loans = this.loans.find((loan) => loan.loanId === loanId);
    if (!loans) {
      throw new Error("Loan not found");
    }
    return loans;
  }
}
