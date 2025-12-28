import styles from './GoogleFavoriteCard.module.css'

function GoogleFavoriteCard({ title, imgSrc, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imgSrc} alt="favorite" />
      </div>
      <div className={styles.linkContainer}>
        <a href={link} target="_blank">
          {title}
        </a>
      </div>
    </div>
  )
}

export default GoogleFavoriteCard
