import { Link } from "react-router-dom";
import css from "./Shop.module.css"
import apiRoutes from "../../api/apiRoutes"
import useFetch from "../../hooks/useFetch"
import Loader from "../../components/Loader"
import frontRoutes from "../../routes/frontRoutes"
import ProductItem from "./ProductItem"

function Shop() {
    const { data: products, isLoading, error } = useFetch(apiRoutes.productsList)


    return (
        <div className={css.container}>
            {!!isLoading && <Loader />}
            {!!error && <div>Error!</div>}
            {!!products && (
                <div>
                    <div className={css.productsList}>
                        {products.map(prod => (
                            <ProductItem key={prod.id} product={prod} />
                        ))}
                    </div>
                    <Link to={frontRoutes.navigate.home} className={css.home}>На головну</Link>
                </div>
            )}
        </div>
    );
}

export default Shop;