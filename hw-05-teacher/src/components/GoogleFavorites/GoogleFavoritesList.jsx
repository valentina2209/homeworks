import GoogleFavoriteCard from './GoogleFavoriteCard'

function GoogleFavoritesList({ favoriteItemsList }) {
  return (
    <div>
      {favoriteItemsList.map((item) => (
        <GoogleFavoriteCard key={item.id} {...item} />
      ))}
    </div>
  )
}

export default GoogleFavoritesList
