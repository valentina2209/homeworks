import React, { useEffect, useState, useRef } from 'react'

function TestSum() {
  const [count, setCount] = useState(0)
  const latestCount = useRef(count) // Зберігаємо актуальне значення count

  useEffect(() => {
    latestCount.current = count // Оновлюємо реф при зміні count
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      // Якщо б ми тут використовували `count` без useRef,
      // то він завжди був би 0, якщо `count` не в залежностях
      // console.log('Count:', count); // Буде 0 після першого рендера, якщо count не в залежностях
      console.log('Latest Count (from useRef):', latestCount.current)
    }, 1000)

    return () => clearInterval(interval)
  }, []) // Пустий масив залежностей, щоб setInterval запускався лише один раз

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

// Прості стилі для демонстрації
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '25px',
    maxWidth: '400px',
    margin: '40px auto',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#333',
    fontSize: '15px',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #cccccc',
    borderRadius: '6px',
    boxSizing: 'border-box', // Важливо для коректного розрахунку ширини
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 25px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '15px',
    transition: 'background-color 0.2s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  message: {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
  errorMessage: {
    backgroundColor: '#ffe0e0',
    color: '#cc0000',
    border: '1px solid #ffaa99',
  },
  successMessage: {
    backgroundColor: '#e0ffe0',
    color: '#008000',
    border: '1px solid #aaffaa',
  },
}

export default TestSum
