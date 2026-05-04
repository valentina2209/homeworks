import { Toaster } from "react-hot-toast"
import { HomePage } from "./pages/home/HomePage"
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Toaster position="top-right" />
        <header className="bg-white border-b border-gray-200 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-blue-600 text-center">
              Планувальник мрій
            </h1>
            <p className="text-center text-gray-500 mt-2">
              Крок за кроком до вашої мети
            </p>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {/* Відображаємо нашу сторінку */}
          <HomePage />
        </main>
      </div>
    </BrowserRouter>
   
  )
}

export default App
