import ProductItem from './ProductItem'
import styles from './ProductsList.module.css'

function ProductsList({ products }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список товарів</h1>
      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsList
