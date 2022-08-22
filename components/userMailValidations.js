import * as Yup from 'yup';

export const regExp = {
  user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  // phone: /^[2-9]{2}[0-9]{8}/, // 7 a 14 numeros.
  // phone: /^[(][0-9]{4}[)][0-9]{7}/, // 7 a 14 numeros.
  phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
  VesIdent: /^[V|E|J|P][0-9]{3,9}$/i, // Identificacion Venezolana CI
  VesBankAccount: /^(\d{5})(\d{15})$/, // Codigo de cuenta venezolano
};

export const schema = Yup.object().shape({
  user_name: Yup.string().required(),
  subject: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().required(),
});
