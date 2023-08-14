import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required.")
    .email("Invalid Email type."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password is at least 8."),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required.")
    .email("Invalid Email type."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password is at least 8."),
  username: yup
    .string()
    .required("Username is required.")
    .min(2, "Userame is word at least 2.")
    .matches(/^[가-힣a-zA-Z].*$/, "Username is only string."),
  nickname: yup
    .string()
    .required("Nickname is required.")
    .min(3, "Nickname is at least 3.")
    .matches(/^[a-zA-Z0-9+-_].*$/, "Nickname is english, number or (-,_)."),
  birth: yup
    .string()
    .required()
    .matches(
      /^(19[0-9][0-9]|20d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
      "Birth is yyyy-mm-dd."
    ),
});
