import ProductItem from "./ProductItem";
import css from "./ProductList.module.css"

function ProductsList({ products }) {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Список товарів</h1>
            <div className={css.productsList}>
                {products.map((product, id) => (
                    <ProductItem key={id} {...product} />
                ))}
            </div>
        </div>
    );
}

export default ProductsList;