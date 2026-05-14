import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    displayName: yup
        .string()
        .required("Ім'я є обов’язковим")
        .min(2, "Ім'я має бути не менше 2 символів"),
    email: yup
        .string()
        .required('Email є обов’язковим')
        .email('Введіть коректну адресу пошти'),
    password: yup
        .string()
        .required('Пароль є обов’язковим')
        .min(6, 'Пароль має бути не менше 6 символів'),
});