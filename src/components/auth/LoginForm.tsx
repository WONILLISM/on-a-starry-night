import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues, defaultLoginFormValues } from "../../interface/auth";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: defaultLoginFormValues,
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => console.log(data);

  return (
    <article>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>email</label>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9+-_]+@[a-zA-Z0-9-_]+[.]+[a-zA-Z]+$/,
              message: "invalid email type",
            },
          })}
        />
        {/* {errors.email?.type === "required" && <p>email is required</p>}
        {errors.email?.type === "pattern" && <p>invalid email type</p>} */}
        {errors.email?.message && <p>invalid email type</p>}

        <label>password</label>
        <input
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Eeee",
            },
          })}
        />
        {errors.password?.type === "required" && <p>password is required</p>}
        <button type="submit">제출</button>
      </form>
    </article>
  );
};

export default LoginForm;

// const validation = (name: string, value: string) => {
//   switch (name) {
//     case "email":
//       if (
//         !RegExp("^[a-zA-Z0-9+-_]+@[a-zA-Z0-9-_]+[.]+[a-zA-Z]+$").test(value)
//       ) {
//         setErrors({ ...errors, [name]: "올바르지 않은 이메일 형식입니다." });
//       } else {
//         setErrors({ ...errors, [name]: "" });
//       }
//       break;
//     case "password":
//       if (!RegExp("^.{8,}$").test(value)) {
//         setErrors({
//           ...errors,
//           [name]: "올바르지 않은 비밀번호 형식입니다.",
//         });
//       } else {
//         setErrors({ ...errors, [name]: "" });
//       }
//       break;
//     default:
//       break;
//   }
// };
