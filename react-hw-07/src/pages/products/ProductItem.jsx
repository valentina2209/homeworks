import { Link } from "react-router-dom";
import frontRoutes from "../../routes/frontRoutes";
import css from "./ProductItem.module.css"

function ProductItem({ product }) {
    return (
        <div className={css.card}>
            <div className={css.imageWrapper}>
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className={css.info}>
                <Link
                    to={frontRoutes.navigate.getProductDetail(product.id)}
                    className={css.name}
                >
                    {product.name}
                </Link>

                <div className={css.price}>{product.price} $</div>
            </div>
        </div>
    );
}

export default ProductItem;