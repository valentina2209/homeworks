import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // При монтуванні читаємо тему з localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  // При зміні isDark додаємо/видаляємо клас dark і зберігаємо у localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      //   document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      //   document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="btn btn-secondary"
      aria-label="Перемикач теми"
    >
      {isDark ? '☀️ Світла тема' : '🌙 Темна тема'}
    </button>
  )
}
