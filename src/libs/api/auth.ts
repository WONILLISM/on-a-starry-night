import axios from "../defaultClient";
import { RegisterFormValues } from "../../interface/auth";

export const createUser = (payload: RegisterFormValues): Promise<any> =>
  axios.post("/users", payload, {
    headers: { "Content-Type": "application/json" },
  });
