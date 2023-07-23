export interface LoginFormValues {
  email: string;
  password: string;
}

export const defaultLoginFormValues: LoginFormValues = {
  email: "",
  password: "",
};

export interface RegisterFormValues {
  email: string;
  password: string;
  name: string;
  nickname: string;
  birth: string;
  isCeleb: boolean;
}

export const defaultRegisterFormValues: RegisterFormValues = {
  email: "",
  password: "",
  name: "",
  nickname: "",
  birth: "",
  isCeleb: false,
};
