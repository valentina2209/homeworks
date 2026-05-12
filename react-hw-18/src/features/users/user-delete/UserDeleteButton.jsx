import deleteIcon from '@/assets/icons/delete-white.svg'

export function UserDeleteButton({ userId, onDeleted }) {
  // TODO: реалізуйте видалення користувача через API
  const handleDelete = () => {
    // deleteUser(userId)
    onDeleted && onDeleted(userId)
  }
  return (
    <button
      className="px-1.5 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-medium shadow focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center justify-center"
      onClick={handleDelete}
      title="Видалити користувача"
    >
      <img src={deleteIcon} alt="Видалити" className="w-4 h-4" />
    </button>
  )
}
