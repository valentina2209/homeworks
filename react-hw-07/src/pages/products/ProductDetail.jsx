import { Link, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import apiRoutes from "../../api/apiRoutes";
import Loader from "../../components/Loader";
import css from "./ProductDetail.module.css"
import frontRoutes from "../../routes/frontRoutes";

function ProductDetail() {
    const { id } = useParams()
    const { data: product, isLoading, error } = useFetch(apiRoutes.getProductById(id))

    return (
        <div className={css.container}>
            {!!isLoading && <Loader />}
            {!!error && <div>Error!</div>}
            {!!product && (<div className={css.card}>
                <div className={css.imageWrapper}>
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className={css.info}>
                    <h1 className={css.title}>{product.name}</h1>
                    <div className={css.price}>Price: {product.price}</div>

                    <p className={css.description}>
                        Цей товар настільки крутий, що програміст вже забув,
                        навіщо виходив з дому 🚀
                    </p>

                    <Link to={frontRoutes.navigate.productList} className={css.back}>
                        ← Назад до магазину
                    </Link>
                </div>
            </div>
            )}
        </div>
    );
}

export default ProductDetail;