import deleteIcon from '@/assets/icons/delete-white.svg'
import { useDeleteUserMutation } from '@/entities/user/api/userApi'

export function UserDeleteButton({ userId, onDeleted }) {
  const [deleteUser, { isLoading }] = useDeleteUserMutation()

  const handleDelete = async () => {
    const isConfirmed = window.confirm('Ви впевнені, що хочете видалити цього користувача? Цю дію неможливо буде скасувати.')

    if (isConfirmed) {
      try {
        await deleteUser(userId).unwrap()

        onDeleted && onDeleted(userId)
      } catch (err) {
        console.error('Помилка при видаленні користувача:', err)
        alert('Не вдалося видалити користувача. Можливо, у вас недостатньо прав.')
      }
    }
  }
  return (
    <button
      className={`px-1.5 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-medium shadow focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center justify-center transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      onClick={handleDelete}
      disabled={isLoading}
      title="Видалити користувача"
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      ) : (
        <img src={deleteIcon} alt="Видалити" className="w-4 h-4" />
      )}
    </button>
  )
}
