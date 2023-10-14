import RegisterForm from "../components/auth/RegisterForm";
import { RegisterFormValues } from "../interface/auth";
import { createUser } from "../libs/api/auth";

const Register = () => {
  const signUp = async (form: RegisterFormValues) => {
    const res = await createUser(form);
    console.log(res);
    return res;
  };

  return <RegisterForm signUp={signUp} />;
};

export default Register;
