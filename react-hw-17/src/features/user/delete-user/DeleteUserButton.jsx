import { useState } from 'react';

export function DeleteUserButton({ userId, userName }) {
    const [isConfirming, setIsConfirming] = useState(false);
    const [status, setStatus] = useState('idle');

    const handleDelete = () => {

        setStatus('warning');

        console.log(`Спроба видалення користувача з ID: ${userId}`);

        // Автоматично скидаємо стан через 3 секунди
        setTimeout(() => {
            setStatus('idle');
            setIsConfirming(false);
        }, 6000);
    };

    if (status === 'warning') {
        return (
            <span className="text-xs font-medium text-amber-500 animate-pulse">
                API: Метод DELETE недоступний
            </span>
        );
    }

    if (isConfirming) {
        return (
            <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400">Видалити {userName}?</span>
                <button
                    onClick={handleDelete}
                    className="rounded bg-red-600 px-2 py-1 text-xs text-white hover:bg-red-700 transition-colors"
                >
                    Так
                </button>
                <button
                    onClick={() => setIsConfirming(false)}
                    className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-300 hover:bg-zinc-700 transition-colors"
                >
                    Ні
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={() => setIsConfirming(true)}
            className="text-amber-100 hover:text-red-400 text-sm font-medium border border-red-500/30 px-2 py-1 rounded transition-all hover:bg-red-500/10"
        >
            Видалити
        </button>
    );
}