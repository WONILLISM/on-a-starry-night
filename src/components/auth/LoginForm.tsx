import { ChangeEvent, useState } from "react";

interface LoginValues {
  email: string;
  password: string;
}

const defaultLoginValues: LoginValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [values, setValues] = useState<LoginValues>(defaultLoginValues);
  const [errors, setErrors] = useState<LoginValues>(defaultLoginValues);

  const validation = (name: string, value: string) => {
    switch (name) {
      case "email":
        if (
          !RegExp("^[a-zA-Z0-9+-_]+@[a-zA-Z0-9-_]+[.]+[a-zA-Z]+$").test(value)
        ) {
          setErrors({ ...errors, [name]: "올바르지 않은 이메일 형식입니다." });
        } else {
          setErrors({ ...errors, [name]: "" });
        }
        break;
      case "password":
        if (!RegExp("^.{8,}$").test(value)) {
          setErrors({
            ...errors,
            [name]: "올바르지 않은 비밀번호 형식입니다.",
          });
        } else {
          setErrors({ ...errors, [name]: "" });
        }
        break;
      default:
        break;
    }
  };

  const handleValuesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    validation(name, value);

    setValues({ ...values, [name]: value });
  };

  return (
    <article>
      <form>
        <section>
          <label>email</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleValuesChange}
          />
          <div>{!!values.email && errors.email}</div>
        </section>
        <section>
          <label>password</label>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleValuesChange}
          />
          <div>{!!values.password && errors.password}</div>
        </section>
        <button type="submit">login</button>
      </form>
    </article>
  );
};

export default LoginForm;
