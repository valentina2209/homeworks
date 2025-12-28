function UserProfile({ name, age, isActive }) {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{isActive ? 'Активний' : 'Не активний'}</div>
    </div>
  )
}

export default UserProfile
