import * as yup from 'yup';
import { roles } from '@/shared/config/roles';

export const userSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email обов’язковий')
        .email('Некоректний формат пошти'),
    displayName: yup
        .string()
        .required('Ім’я обов’язкове')
        .min(2, 'Мінімум 2 символи'),
    role: yup
        .string()
        .required('Оберіть роль')
        .oneOf(Object.values(roles), 'Недійсна роль'),
});