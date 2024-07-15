import Installment from "./Installment";

export default interface InstallmentRepository {
  save(installment: Installment): Promise<void>;
  listByLoanId(loanId: string): Promise<Array<Installment>>;
}

export class InstallmentRepositoryMemory implements InstallmentRepository {
  static instance: InstallmentRepository;
  private installments: Installment[];

  private constructor() {
    this.installments = new Array<Installment>();
  }

  static getInstance(): InstallmentRepository {
    if (!InstallmentRepositoryMemory.instance) {
      InstallmentRepositoryMemory.instance = new InstallmentRepositoryMemory();
    }
    return InstallmentRepositoryMemory.instance;
  }
  async save(installment: Installment): Promise<void> {
    this.installments.push(installment);
  }

  async listByLoanId(loanId: string): Promise<Array<Installment>> {
    const installments = this.installments.filter(
      (installment) => installment.loanId === loanId
    );
    if (!installments) {
      throw new Error("Installments not found");
    }
    return installments;
  }
}
