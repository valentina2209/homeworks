import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }

    document.addEventListener('keydown', handleKeyDown)

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  let modalRoot = document.getElementById('modal-root')
  if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.id = 'modal-root'
    document.body.appendChild(modalRoot)
  }

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      className={styles.overlay}
      onClick={() => onClose?.()}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
        {onClose && (
          <div className={styles.closeWrapper}>
            <button onClick={onClose} className={styles.closeButton}>
              Закрити
            </button>
          </div>
        )}
      </div>
    </div>
  )

  return createPortal(modalContent, modalRoot)
}

export default Modal
