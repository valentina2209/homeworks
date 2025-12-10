import { useState } from 'react'
import styles from './SimpleSaper.module.css'
function SimpleSaperReact({ initGameField }) {
  const [gameField, setGameField] = useState(() =>
    JSON.parse(JSON.stringify(initGameField))
  )
  const [history, setHistory] = useState([])
  const hasHistory = history.length > 0

  function getCurrentClass(ind) {
    if (gameField[ind].isOpen) {
      if (gameField[ind].hasMine) return styles['has-mine-state']
      else return styles['no-mine-state']
    } else return styles.cell
  }

  function onCellClick(cellId) {
    setHistory((prevH) => [...prevH, JSON.parse(JSON.stringify(gameField))])

    setGameField((prevGameField) =>
      prevGameField.map((cell) =>
        cell.id === cellId ? { ...cell, isOpen: true } : cell
      )
    )
  }

  function onRevert() {
    const lastGameField = history.at(-1)
    setGameField(lastGameField)
    setHistory((prev) => prev.slice(0, -1))
  }

  return (
    <>
      <h1>Saper (React-version)</h1>
      <table>
        <tbody>
          <tr>
            {gameField.map((cell, ind) => (
              <td
                key={cell.id}
                className={getCurrentClass(ind)}
                onClick={() => onCellClick(cell.id)}
              ></td>
            ))}
          </tr>
        </tbody>
      </table>
      <hr />
      {hasHistory && <button onClick={onRevert}>Revert</button>}
    </>
  )
}

export default SimpleSaperReact
