function CarsList({ cars }) {
  return (
    <ol>
      {cars.map((car) => (
        <li key={car.id}>{`${car.brand} - ${car.year}`}</li>
      ))}
    </ol>
  )
}

export default CarsList
