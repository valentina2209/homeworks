import { useState } from 'react';
// import { useCreateUserMutation } from '@/entities/user/api/userApi';

export function AddUserForm({ onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', role: 'user' });
    // const [createUser] = useCreateUserMutation();
    const [status, setStatus] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        setStatus('warning');

        console.log('Дані, які ми хотіли відправити:', formData);

        // Автоматично закриваємо через 3 секунди
        setTimeout(() => {
            onClose();
        }, 6000);
    };

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-[350px] rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">

                {status === 'warning' ? (
                    <div className="flex flex-col items-center justify-center py-4 text-center">
                        <span className="mb-4 text-4xl">🚧</span>
                        <h3 className="mb-2 text-xl font-semibold text-amber-500">Обмеження API</h3>
                        <p className="text-sm text-zinc-400">
                            Метод <code className="rounded bg-zinc-800 px-1 text-zinc-200">POST /api/users</code>
                            не підтримується бекендом. Код логіки готовий, але сервер працює лише на читання.
                        </p>
                        <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-zinc-800">
                            <div className="h-full animate-progress bg-amber-500" />
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-white">Створити користувача</h3>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-zinc-500 ml-1">Ім'я</label>
                            <input
                                required
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-2.5 text-white outline-none focus:border-blue-500 transition-colors"
                                placeholder="Олександр"
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-zinc-500 ml-1">Email</label>
                            <input
                                required
                                type="email"
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-2.5 text-white outline-none focus:border-blue-500 transition-colors"
                                placeholder="example@mail.com"
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-zinc-500 ml-1">Роль</label>
                            <select
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-2.5 text-white outline-none focus:border-blue-500 appearance-none"
                                onChange={e => setFormData({ ...formData, role: e.target.value })}
                            >
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>

                        <div className="mt-2 flex gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 rounded-lg border border-zinc-700 py-2.5 text-sm font-medium text-zinc-400 hover:bg-zinc-800 transition-colors"
                            >
                                Скасувати
                            </button>
                            <button
                                type="submit"
                                className="flex-1 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
                            >
                                Створити
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

