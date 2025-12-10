// Задача 4. Однорядковий сапер. Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни (використати атрибути). Спочатку клітинки сірі. При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним, якщо немає – зеленим. Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.
import styles from './SimpleSaper.module.css'
function SimpleSaper({ gameField }) {
  function handleCellClick(e) {
    const tdEl = e.target
    if (tdEl.tagName === 'TD') {
      const hasMine = tdEl.getAttribute('mine') === '1'
      if (hasMine) tdEl.style.backgroundColor = 'red'
      else tdEl.style.backgroundColor = 'green'
    }
  }

  return (
    <>
      <h1>Saper</h1>
      <table>
        <tbody>
          <tr onClick={handleCellClick}>
            {gameField.map((cell) => (
              <td
                key={cell.id}
                mine={cell.hasMine}
                className={styles.cell}
              ></td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default SimpleSaper
