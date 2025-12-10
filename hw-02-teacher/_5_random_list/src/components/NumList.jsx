function NumList({ numbers }) {
  return (
    <ul>
      {numbers.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  )
}

export default NumList
