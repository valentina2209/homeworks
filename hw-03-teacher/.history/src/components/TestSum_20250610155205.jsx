import React, { useState, useRef } from 'react';

function TwoFieldValidator() {
  // 1. Стан для зберігання значень полів вводу.
  // Ці змінні стану роблять наші інпути "контрольованими компонентами".
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [message, setMessage] = useState(''); // Для відображення повідомлень користувачу

  // 2. Рефи для отримання прямого доступу до DOM-елементів <input>.
  // Це потрібно для програмного встановлення фокуса.
  const field1Ref = useRef(null);
  const field2Ref = useRef(null);

  // 3. Обробник натискання кнопки "Перевірити та Надіслати"
  const handleSubmit = () => {
    setMessage(''); // Очищуємо попередні повідомлення

    // Перевіряємо перше поле
    if (field1.trim() === '') { // `.trim()` видаляє пробіли на початку та в кінці
      setMessage('Будь ласка, заповніть перше поле.');
      field1Ref.current.focus(); // Встановлюємо курсор у перше поле
      return; // Зупиняємо виконання функції, якщо є помилка
    }

    // Перевіряємо друге поле (тільки якщо перше вже заповнене)
    if (field2.trim() === '') {
      setMessage('Будь ласка, заповніть друге поле.');
      field2Ref.current.focus(); // Встановлюємо курсор у друге поле
      return; // Зупиняємо виконання функції
    }

    // Якщо обидва поля заповнені, виводимо успішне повідомлення
    setMessage('Обидва поля заповнені! Можна надсилати дані.');
    // Тут можна додати логіку відправки даних на сервер
    console.log('Дані готові до надсилання:', { field1, field2 });
  };

  return (
    <div style={styles.container}>
      <h2>Перевірка Порожніх Полів</h2>
      <p>Заповніть обидва поля та натисніть кнопку.</p>

      <div style={styles.inputGroup}>
        <label htmlFor="field1" style={styles.label}>Поле 1:</label>
        <input
          id="field1"
          type="text"
          value={field1}
          onChange={(e) => setField1(e.target.value)}
          ref={field1Ref} {/* Прив'язуємо реф */}
          style={styles.input}
          placeholder="Введіть щось сюди"
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="field2" style={styles.label}>Поле 2:</label>
        <input
          id="field2"
          type="text"
          value={field2}
          onChange={(e) => setField2(e.target.value)}
          ref={field2Ref} {/* Прив'язуємо реф */}
          style={styles.input}
          placeholder="Введіть щось сюди"
        />
      </div>

      <button onClick={handleSubmit} style={styles.button}>
        Перевірити та Надіслати
      </button>

      {/* Повідомлення для користувача */}
      {message && (
        <p style={{ ...styles.message, ...(message.includes('Будь ласка') ? styles.errorMessage : styles.successMessage) }}>
          {message}
        </p>
      )}
    </div>
  );
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
  }
};

export default TwoFieldValidator;
