import * as Yup from "yup";

const schemaRegister = Yup.object({
  email: Yup.string().max(30).required(),
  password: Yup.string().max(30).required(),
});

const schemaLogin = Yup.object({
  email: Yup.string().max(30).required(),
  password: Yup.string().max(30).required(),
});
