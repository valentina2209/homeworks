import { useState } from 'react'
import { useSignUp } from '../model/useSignUp'
import { useNavigate } from 'react-router'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpSchema } from '../model/signUpSchema'

export default function SignUpForm({ onSuccess }) {
  const { signUp, isLoading, error } = useSignUp()
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data) => {
    setErrorMessage('')
    try {
      await signUp(data)
      onSuccess && onSuccess()
      navigate(frontRoutes.pages.HomePage.navigationPath)
    } catch (err) {
      setErrorMessage(err?.message || 'Помилка реєстрації')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <input
          {...register('displayName')}
          placeholder="Ім'я"
          className={`px-4 py-3 rounded-lg border outline-none transition bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 
            ${errors.displayName ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
        />
        {errors.displayName && (
          <span className="text-red-500 text-xs">{errors.displayName.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className={`px-4 py-3 rounded-lg border outline-none transition bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 
            ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input
          {...register('password')}
          type="password"
          placeholder="Пароль"
          className={`px-4 py-3 rounded-lg border outline-none transition bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 
            ${errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">{errors.password.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-base shadow-md hover:from-blue-600 hover:to-indigo-600 dark:bg-gradient-to-r dark:from-blue-700 dark:to-indigo-800 dark:text-gray-100 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        Зареєструватися
      </button>

      {(error || errorMessage) && (
        <div className="text-red-500 dark:text-red-400 text-sm font-medium mt-1">
          {errorMessage || error?.data?.message || 'Помилка'}
        </div>
      )}
    </form>
  )
}
