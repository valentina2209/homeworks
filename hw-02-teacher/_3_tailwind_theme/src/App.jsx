import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300">
      <header className="p-4 flex justify-end">
        <ThemeToggle />
      </header>
      <main className="p-4 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          🎨 Tailwind + React + Темна/Світла тема
        </h1>
        <p className="mb-6">
          Приклад додатку з використанням Tailwind, темної та світлої теми,
          глобальних стилів та компонентних стилів.
        </p>

        <button className="btn btn-primary mr-4">Основна кнопка</button>
        <button className="btn btn-secondary mr-4">Додаткова кнопка</button>
        <button className="btn btn-danger">Видалити</button>
      </main>
    </div>
  )
}
