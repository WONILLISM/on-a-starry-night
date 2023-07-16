import { ChangeEvent, useState } from "react";

interface RegisterValues {
  email: string;
  password: string;
  name: string;
  nickname: string;
  birth: string;
  isCeleb: boolean;
}

type RegisterValue = keyof RegisterValues;

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

  const [errors, setErrors] = useState<RegisterValues>(defaultRegisterValues);

  const validation = (name: RegisterValue, value: string) => {
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
      case "name":
        if (!RegExp("^[가-힣a-zA-Z].{1,}$").test(value)) {
          setErrors({
            ...errors,
            [name]: "올바르지 않은 이름 형식입니다.",
          });
        } else {
          setErrors({ ...errors, [name]: "" });
        }
        break;
      case "nickname":
        if (!RegExp("^[a-zA-Z0-9+-_].{2,}$").test(value)) {
          setErrors({
            ...errors,
            [name]: "올바르지 않은 별명 형식입니다.",
          });
        } else {
          setErrors({ ...errors, [name]: "" });
        }
        break;
      case "birth":
        if (value === "") {
          console.log("!!!");
          setErrors({
            ...errors,
            [name]: "생일을 입력해주세요.",
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

    validation(name as RegisterValue, value);

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
        <section>
          <label>name</label>
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={handleValuesChange}
          />
          <div>{!!values.name && errors.name}</div>
        </section>
        <section>
          <label>nickname</label>
          <input
            name="nickname"
            type="text"
            value={values.nickname}
            onChange={handleValuesChange}
          />
          <div>{!!values.nickname && errors.nickname}</div>
        </section>
        <section>
          <label>birth</label>
          <input
            name="birth"
            type="date"
            value={values.birth}
            onChange={handleValuesChange}
          />
          <div>{!!!errors.birth && errors.birth}</div>
        </section>
        <button type="submit">register</button>
      </form>
    </article>
  );
};

export default RegisterForm;
