import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues, defaultLoginFormValues } from "../../interface/auth";
import Input from "../common/Input";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: defaultLoginFormValues,
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
          options={{
            required: { value: true, message: "Email is required." },
            pattern: {
              value: /^[a-zA-Z0-9+-_]+@[a-zA-Z0-9-_]+[.]+[a-zA-Z]+$/,
              message: "Invalid Email type.",
            },
          }}
          errorMsg={errors.email ? errors.email.message : undefined}
        />
        <Input
          label="password"
          type="password"
          name="password"
          register={register}
          options={{
            required: { value: true, message: "Password is required." },
            minLength: {
              value: 8,
              message: "Password is at least 8.",
            },
          }}
          errorMsg={errors.password ? errors.password.message : undefined}
        />

        <button type="submit">제출</button>
      </form>
    </section>
  );
};

export default LoginForm;
