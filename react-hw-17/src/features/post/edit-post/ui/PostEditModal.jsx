import { useState } from 'react';
import { useUpdatePostMutation } from '@/entities/post/api/postApi';

export function PostEditModal({ post, onClose }) {
    const [title, setTitle] = useState(post?.title || '');
    const [content, setContent] = useState(post?.content || '');

    const [updatePost] = useUpdatePostMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePost({ id: post.id, title, content }).unwrap();
            console.log('Зберігаємо зміни:', { id: post.id, title, content });
            onClose();
        } catch (err) {
            console.error('Помилка при оновленні:', err);
        }
    };

    if (!post) return null;

    return (

        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">

            <div className="w-full max-w-lg rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl shadow-black/50">
                <h2 className="mb-6 text-2xl font-bold text-white">Редагувати пост</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    <div className="flex flex-col gap-1.5">
                        <label className="ml-1 text-sm font-medium text-zinc-400">Заголовок</label>
                        <input
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            value={title}
                            placeholder="Введіть заголовок..."
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="ml-1 text-sm font-medium text-zinc-400">Контент</label>
                        <textarea
                            className="w-full min-h-[150px] rounded-lg border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                            value={content}
                            placeholder="Про що цей пост?"
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>

                    <div className="mt-2 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                        >
                            Скасувати
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg shadow-blue-900/20 transition-all active:scale-95"
                        >
                            Зберегти зміни
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}