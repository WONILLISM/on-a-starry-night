import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues, defaultLoginFormValues } from "../../interface/auth";

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
        <div>
          <input
            {...register("email", {
              required: { value: true, message: "Email is required." },
              pattern: {
                value: /^[a-zA-Z0-9+-_]+@[a-zA-Z0-9-_]+[.]+[a-zA-Z]+$/,
                message: "Invalid Email type.",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            {...register("password", {
              required: { value: true, message: "Password is required." },
              minLength: {
                value: 8,
                message: "Password length is at least 8.",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">제출</button>
      </form>
    </section>
  );
};

export default LoginForm;
