import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email є обов’язковим')
        .email('Введіть коректну адресу пошти'),
    password: yup
        .string()
        .required('Пароль є обов’язковим')
        .min(6, 'Пароль має бути не менше 6 символів'),
});