import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router';
import { Home, RefreshCcw, ArrowLeft, AlertCircle } from 'lucide-react';

const GlobalErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    let errorMessage = "Сталася непередбачувана помилка";
    let errorStatus = "Упс!";

    if (isRouteErrorResponse(error)) {
        errorStatus = error.status.toString();
        errorMessage = error.statusText || error.data?.message || "Сторінку не знайдено";
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
            <div className="max-w-md w-full text-center">

                <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-red-50 rounded-full">
                        <AlertCircle size={64} className="text-red-500" />
                    </div>
                </div>


                <h1 className="text-9xl font-black text-slate-200 absolute left-1/2 -translate-x-1/2 -top-10 -z-10 select-none">
                    {errorStatus}
                </h1>

                <h2 className="text-3xl font-bold text-slate-800 mb-2 relative">
                    Щось пішло не так
                </h2>

                <p className="text-slate-600 mb-8 bg-white p-4 rounded-xl border border-slate-200 shadow-sm italic">
                    "{errorMessage}"
                </p>


                <div className="grid grid-cols-1 gap-3">
                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-200"
                    >
                        <RefreshCcw size={18} />
                        Спробувати знову
                    </button>

                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-xl font-semibold transition-all"
                        >
                            <ArrowLeft size={18} />
                            Назад
                        </button>

                        <button
                            onClick={() => navigate('/')}
                            className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                        >
                            <Home size={18} />
                            На головну
                        </button>
                    </div>
                </div>


                <p className="mt-10 text-sm text-slate-400">
                    Якщо проблема повторюється, будь ласка, зверніться до підтримки.
                </p>
            </div>
        </div>
    );
};

export default GlobalErrorPage;