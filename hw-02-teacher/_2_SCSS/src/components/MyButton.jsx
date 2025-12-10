const MyButton = ({ children, onClick }) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {children}
    </button>
  )
}

export default MyButton
