import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../common/Input";
import {
  RegisterFormValues,
  defaultRegisterFormValues,
} from "../../interface/auth";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: defaultRegisterFormValues,
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) =>
    console.log(data);

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
        <Input
          label="name"
          name="name"
          type="text"
          register={register}
          options={{
            required: { value: true, message: "Name is required." },
            pattern: {
              value: /^[가-힣a-zA-Z].{1,}$/,
              message: "Name is word at least 2.",
            },
          }}
          errorMsg={errors.name ? errors.name.message : undefined}
        />
        <Input
          label="nickname"
          name="nickname"
          type="text"
          register={register}
          options={{
            required: { value: true, message: "Password is required." },
            pattern: {
              value: /^[a-zA-Z0-9+-_].{2,}$/,
              message: "Nickname is word, number or (-,_) at least 2.",
            },
          }}
          errorMsg={errors.nickname ? errors.nickname.message : undefined}
        />
        <Input
          label="birth"
          name="birth"
          type="text"
          register={register}
          options={{
            required: { value: true, message: "Password is required." },
            pattern: {
              value:
                /^(19[0-9][0-9]|20d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
              message: "YYYY-MM-DD",
            },
          }}
          errorMsg={errors.birth ? errors.birth.message : undefined}
        />

        <button type="submit">register</button>
      </form>
    </section>
  );
};

export default RegisterForm;
