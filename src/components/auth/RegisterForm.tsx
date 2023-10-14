import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../common/Input";
import {
  RegisterFormValues,
  defaultRegisterFormValues,
} from "../../interface/auth";
import { registerSchema } from "../../utils/validationSchema";

interface RegisterFormProps {
  signUp: (form: RegisterFormValues) => void;
}

const RegisterForm = ({ signUp }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: defaultRegisterFormValues,
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log(data);
    signUp(data);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="email"
          type="text"
          name="email"
          register={register}
          errorMsg={errors.email ? errors.email.message : undefined}
        />
        <Input
          label="password"
          type="password"
          name="password"
          register={register}
          errorMsg={errors.password ? errors.password.message : undefined}
        />
        <Input
          label="username"
          name="username"
          type="text"
          register={register}
          errorMsg={errors.username ? errors.username.message : undefined}
        />
        <Input
          label="nickname"
          name="nickname"
          type="text"
          register={register}
          errorMsg={errors.nickname ? errors.nickname.message : undefined}
        />
        <Input
          label="birth"
          name="birth"
          type="text"
          register={register}
          errorMsg={errors.birth ? errors.birth.message : undefined}
        />

        <button type="submit">register</button>
      </form>
    </section>
  );
};

export default RegisterForm;
