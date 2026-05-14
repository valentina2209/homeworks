import * as yup from 'yup';

export const productSchema = yup.object().shape({
    name: yup
        .string()
        .required('Назва продукту обов’язкова')
        .min(3, 'Назва має бути не менше 3 символів'),
    price: yup
        .number()
        .typeError('Ціна має бути числом')
        .required('Вкажіть ціну')
        .positive('Ціна має бути більшою за 0'),
    image: yup
        .string()
        .url('Введіть коректне посилання на зображення (URL)')
        .required('Посилання на зображення обов’язкове'),
});