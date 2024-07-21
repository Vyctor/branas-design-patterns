import Login from "../Login";
import { Signup } from "../Signup";

test("Deve criar uma conta de usuário ", async () => {
  const signup = new Signup();
  const login = new Login();
  const inputSignup = {
    name: "John Doe",
    email: "john@gmail.com",
    password: "123456",
  };
  await signup.execute(inputSignup);
  const inputLogin = {
    email: inputSignup.email,
    password: inputSignup.password,
  };
  const outputLogin = await login.execute(inputLogin);
  expect(outputLogin.success).toBeTruthy();
});
