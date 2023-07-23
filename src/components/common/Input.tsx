import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface InputProps<T extends FieldValues = FieldValues> {
  type?: string;
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  options?: RegisterOptions<T, Path<T>>;
  errorMsg?: string;
}

const Input = <T extends FieldValues = FieldValues>({
  type,
  label,
  name,
  register,
  options,
  errorMsg,
}: InputProps<T>) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input type={type} {...register(name, options)} />
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
    </div>
  );
};

export default Input;
