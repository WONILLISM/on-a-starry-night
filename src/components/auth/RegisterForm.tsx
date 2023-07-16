import { ChangeEvent, useState } from "react";

interface RegisterValues {
  email: string;
  password: string;
  name: string;
  nickname: string;
  birth: string;
  isCeleb: boolean;
}
const defaultRegisterValues: RegisterValues = {
  email: "",
  password: "",
  name: "",
  nickname: "",
  birth: "",
  isCeleb: false,
};

const RegisterForm = () => {
  const [values, setValues] = useState<RegisterValues>(defaultRegisterValues);

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
        <section>
          <label>name</label>
          <input
            name="name"
            type="name"
            value={values.name}
            onChange={handleValuesChange}
          />
        </section>
        <section>
          <label>nickname</label>
          <input
            name="nickname"
            type="text"
            value={values.nickname}
            onChange={handleValuesChange}
          />
        </section>
        <section>
          <label>birth</label>
          <input
            name="birth"
            type="date"
            value={values.birth}
            onChange={handleValuesChange}
          />
        </section>
        <button type="submit">register</button>
      </form>
    </article>
  );
};

export default RegisterForm;
