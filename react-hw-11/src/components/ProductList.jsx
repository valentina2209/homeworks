import css from "./ProductList.module.css"

function ProductList({ products }) {
    if (products.length === 0) {
        return null
    }

    return (
        <ul className={css.grid}>
            {products.map(product => (
                <li key={product.id} className={css.card}>
                    <div className={css.imageWrapper}>
                        <img src={product.image} alt={product.name} className={css.image} />
                    </div>

                    <div className={css.content}>
                        <h3 className={css.name}>{product.name}</h3>
                        <p className={css.price}>{product.price}</p>
                        <p className={css.description}>{product.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ProductList;