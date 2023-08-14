import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues, defaultLoginFormValues } from "../../interface/auth";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../common/Input";
import { loginSchema } from "../../utils/validationSchema";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: defaultLoginFormValues,
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => console.log(data);

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

        <button type="submit">제출</button>
      </form>
    </section>
  );
};

export default LoginForm;
