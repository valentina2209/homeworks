import { memo } from 'react'
import styles from './Ball.module.css'

function Ball() {
  console.log('11111111111111') // Перевіряємо, коли рендериться

  return <div className={styles.ball}></div>
}

export default memo(Ball) // Використовуємо мемоізацію
