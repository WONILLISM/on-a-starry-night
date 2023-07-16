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

  const handleValuesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

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
        </section>
        <section>
          <label>password</label>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleValuesChange}
          />
        </section>
        <button type="submit">login</button>
      </form>
    </article>
  );
};

export default LoginForm;
