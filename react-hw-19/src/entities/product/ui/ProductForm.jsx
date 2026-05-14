import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { productSchema } from '../model/productSchema'

export default function ProductForm({ product = {}, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: product?.name || '',
      price: product?.price || 0,
      image: product?.image || '',
    },
    mode: 'onBlur',
  })

  const handleFormSubmit = (data) => {
    onSubmit({
      ...product,
      ...data,
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm"
    >
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Назва</label>
        <input
          {...register('name')}
          placeholder="Назва"
          className={`border rounded-lg px-3 py-2 outline-none transition dark:bg-gray-800 dark:text-white
            ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700 focus:border-blue-500'}`}
        />
        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Ціна (грн)</label>
        <input
          {...register('price')}
          type="number"
          placeholder="Ціна"
          className={`border rounded-lg px-3 py-2 outline-none transition dark:bg-gray-800 dark:text-white
            ${errors.price ? 'border-red-500' : 'border-gray-300 dark:border-gray-700 focus:border-blue-500'}`}
        />
        {errors.price && <span className="text-red-500 text-xs">{errors.price.message}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">URL зображення</label>
        <input
          {...register('image')}
          type="text"
          placeholder="https://example.com/image.jpg"
          className={`border rounded-lg px-3 py-2 outline-none transition dark:bg-gray-800 dark:text-white
            ${errors.image ? 'border-red-500' : 'border-gray-300 dark:border-gray-700 focus:border-blue-500'}`}
        />
        {errors.image && <span className="text-red-500 text-xs">{errors.image.message}</span>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-2 mt-2 transition shadow-md active:scale-95"
      >
        Зберегти
      </button>
    </form>
  )
}
