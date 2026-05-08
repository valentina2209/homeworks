import { useState } from 'react'
import { useGetUsersQuery } from '../../entities/user/api/userApi'
import { UserListItem } from '../../entities/user/ui/UserListItem'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth'
import { AddUserForm } from '@/features/user/add-user/ui/AddUserForm'
import { DeleteUserButton } from '@/features/user/delete-user/DeleteUserButton'

export function UserList() {
    const [page, setPage] = useState(1)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const limit = 10

    const currentUser = useSelector(selectAuthUser)
    const isAdmin = currentUser?.role === 'admin'

    const { data, isLoading, error } = useGetUsersQuery({ page, limit })

    if (isLoading) return <div>Завантаження...</div>
    if (error) return <div>Помилка: {error.toString()}</div>

    const users = data?.items || []
    const totalPages = data?.totalPages || 1

    return (
        <section className="p-4 bg-zinc-950 rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Користувачі</h2>

                {isAdmin && (
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        + Додати користувача
                    </button>
                )}
            </div>

            {isAddModalOpen && (
                <AddUserForm onClose={() => setIsAddModalOpen(false)} />
            )}

            <div className="flex flex-col gap-2">
                {users.map((user) => (
                    <UserListItem
                        key={user.id}
                        user={user}
                        actions={
                            isAdmin && user.id !== currentUser?.id && (
                                <DeleteUserButton
                                    userId={user.id}
                                    userName={user.userName}
                                />
                            )
                        }
                    />
                ))}
            </div>

            {/* Пагінація */}
            <div className="mt-6 flex items-center justify-center gap-4">
                <button
                    className="px-4 py-2 bg-zinc-800 text-white disabled:opacity-50 rounded"
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                >
                    Назад
                </button>
                <span className="text-zinc-400">
                    {page} / {totalPages}
                </span>
                <button
                    className="px-4 py-2 bg-zinc-800 text-white disabled:opacity-50 rounded"
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages}
                >
                    Вперед
                </button>
            </div>
        </section>
    )
}