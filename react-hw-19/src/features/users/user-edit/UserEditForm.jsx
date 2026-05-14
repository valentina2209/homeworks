import {
  useUpdateUserRoleMutation,
  useAddUserMutation,
} from '@/entities/user/api/userApi'
import { roles } from '@/shared/config/roles'
import { userSchema } from './model/userSchema'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export function UserEditForm({ user = {}, onSuccess }) {
  const [updateUserRole, { isLoading: isUpdating, error: updateError }] =
    useUpdateUserRoleMutation()
  const [addUser, { isLoading: isAdding, error: addError }] =
    useAddUserMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      email: user?.email || '',
      displayName: user?.displayName || '',
      role: user?.role || 'user',
    }
  })

  const onFormSubmit = async (data) => {
    try {
      if (user.id) {
        await updateUserRole({ uid: user.id, role: data.role }).unwrap()
      } else {
        await addUser(data).unwrap()
      }
      onSuccess && onSuccess()
    } catch (err) {
      console.error('Failed to save user:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4 max-w-sm">
      <div className="flex flex-col">
        <input
          {...register('email')}
          placeholder="Email"
          disabled={!!user.id}
          className={`px-3 py-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'} ${user.id ? 'bg-gray-100 cursor-not-allowed' : ''}`}
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col">
        <input
          {...register('displayName')}
          placeholder="Ім'я"
          disabled={!!user.id}
          className={`px-3 py-2 border rounded ${errors.displayName ? 'border-red-500' : 'border-gray-300'} ${user.id ? 'bg-gray-100 cursor-not-allowed' : ''}`}
        />
        {errors.displayName && <span className="text-red-500 text-xs">{errors.displayName.message}</span>}
      </div>

      <div className="flex flex-col">
        <select
          {...register('role')}
          className="px-3 py-2 border border-gray-300 rounded bg-white"
        >
          {Object.entries(roles).map(([key, value]) => (
            <option key={key} value={value}>{value}</option>
          ))}
        </select>
        {errors.role && <span className="text-red-500 text-xs">{errors.role.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isUpdating || isAdding}
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {user.id ? 'Зберегти' : 'Додати'}
      </button>

      {(updateError || addError) && (
        <div className="text-red-500 text-sm">
          {updateError?.data?.message || addError?.data?.message || 'Помилка'}
        </div>
      )}
    </form>
  )
}
