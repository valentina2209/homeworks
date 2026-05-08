import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="min-h-[calc(100vh-80px)] bg-[#09090b] text-white overflow-hidden">

            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />

            <main className="container mx-auto px-6 py-20 flex flex-col items-center text-center">

                <div className="mb-6 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm font-medium text-zinc-400">
                    ✨ Версія 2.0 — Побудовано на FSD
                </div>

                <h1 className="mb-6 max-w-4xl text-5xl font-extrabold tracking-tight lg:text-7xl">
                    Керуй своїм контентом <br />
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        швидко та професійно
                    </span>
                </h1>

                <p className="mb-10 max-w-2xl text-lg text-zinc-400">
                    Це твоя адмін-панель для управління користувачами та постами.
                    Використовуй сучасні інструменти для ефективної роботи.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        to="/posts"
                        className="rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20"
                    >
                        Переглянути пости
                    </Link>
                    <Link
                        to="/users"
                        className="rounded-xl border border-zinc-700 bg-zinc-900/50 px-8 py-4 text-sm font-bold hover:bg-zinc-800 transition-all backdrop-blur-md"
                    >
                        Список користувачів
                    </Link>
                </div>

                <div className="mt-24 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm">
                        <div className="mb-4 text-3xl">🚀</div>
                        <h3 className="mb-2 font-bold">React + Vite</h3>
                        <p className="text-sm text-zinc-500">Блискавична швидкість розробки та гаряче оновлення модулів.</p>
                    </div>
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm">
                        <div className="mb-4 text-3xl">🧩</div>
                        <h3 className="mb-2 font-bold">FSD Architecture</h3>
                        <p className="text-sm text-zinc-500">Масштабована структура папок, яку легко підтримувати.</p>
                    </div>
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm">
                        <div className="mb-4 text-3xl">⚛️</div>
                        <h3 className="mb-2 font-bold">RTK Query</h3>
                        <p className="text-sm text-zinc-500">Потужне керування станом та кешування даних з API.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}