import { User } from "./User";

export default interface UserRepository {
  save(user: User): Promise<void>;
  getByEmail(email: string): Promise<User | undefined>;
}

export class UserRepositoryMemory implements UserRepository {
  // Definir a propriedade instance como estática
  static instance: UserRepositoryMemory;

  private users: Array<User>;

  constructor() {
    this.users = new Array<User>();
  }

  // Definir o método getInstance como estático, que construirá a instancia da classe em um primeiro momento, e após isso, retornará a mesma instância sempre que for chamado
  static getInstance(): UserRepositoryMemory {
    if (!UserRepositoryMemory.instance) {
      UserRepositoryMemory.instance = new UserRepositoryMemory();
    }
    return UserRepositoryMemory.instance;
  }

  async save(user: User): Promise<void> {
    const userAlreadyExists = this.users.find(
      (existantUser) => existantUser.email === user.email
    );
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    this.users.push(user);
  }

  async getByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);
    if (!user) {
      return;
    }
    return user;
  }
}
