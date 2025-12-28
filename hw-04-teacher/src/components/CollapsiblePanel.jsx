import { useState } from 'react'

function CollapsiblePanel({ title, children }) {
  const [isOpen, setIsOpen] = useState(true)

  function handleOpenClick() {
    setIsOpen((v) => !v)
  }

  return (
    <div>
      <h1 onClick={handleOpenClick}>{title}</h1>
      {isOpen && <div>{children}</div>}
    </div>
  )
}

export default CollapsiblePanel
