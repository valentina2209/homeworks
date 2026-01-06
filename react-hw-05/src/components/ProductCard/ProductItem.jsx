import styles from "./ProductItem.module.css"

function ProductItem({ title, imgSrc, price, oldPrice, discount, }) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={imgSrc} alt={title} />
            </div>
            <div className={styles.title}>{title}</div>

            {discount && (
                <div className={styles.discount}>
                    Ваша економія: <span>{discount} $</span>
                </div>
            )}

            <div className={styles.priceBlock}>
                {oldPrice && <div className={styles.oldPrice}>{oldPrice} $</div>}
                <div className={styles.currentPrice}>
                    {price} <span className={styles.currency}>$</span>
                </div>
            </div>
            <button className={styles.buyButton}>
                Купити
            </button>
        </div>
    );
}

export default ProductItem;