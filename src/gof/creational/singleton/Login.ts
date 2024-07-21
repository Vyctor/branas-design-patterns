import UserRepository, { UserRepositoryMemory } from "./UserRepository";
export default class Login {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = UserRepositoryMemory.getInstance();
  }

  async execute(input: Input): Promise<Output> {
    const user = await this.userRepository.getByEmail(input.email);
    let success = false;
    if (user) {
      success = user.passwordMatches(input.password);
    }
    return { success };
  }
}

type Input = {
  email: string;
  password: string;
};

type Output = {
  success: boolean;
};
