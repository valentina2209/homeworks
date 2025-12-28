import styles from './ProductItem.module.css'

function ProductItem({ name, price, image }) {
  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>
        <span className={styles.priceLabel}>Price:</span>
        {price}
      </div>
    </div>
  )
}

export default ProductItem
