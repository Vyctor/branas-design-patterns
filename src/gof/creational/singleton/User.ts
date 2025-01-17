import crypto from "crypto";
export class User {
  constructor(
    readonly userId: string,
    readonly name: string,
    readonly email: string,
    readonly password: string
  ) {}

  static create(name: string, email: string, password: string): User {
    const userId = crypto.randomUUID();
    return new User(userId, name, email, password);
  }

  passwordMatches(password: string): boolean {
    return this.password === password;
  }
}
