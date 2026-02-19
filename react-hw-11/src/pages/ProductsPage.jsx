import ProductFilter from "@/components/ProductFilter";
import ProductList from "@/components/ProductList";
import { changeFilter } from "@/redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import css from "./ProductsPage.module.css";

function ProductsPage() {
    const dispatch = useDispatch()
    const { items, filter } = useSelector(state => state.products)

    const filteredProducts = items.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div className={css.container}>
            <h1 className={css.title}>Каталог товарів</h1>

            <div className={css.toolbar}>
                <div className={css.filterWrapper}>
                    <ProductFilter
                        filter={filter}
                        onChange={value => dispatch(changeFilter(value))}
                    />
                </div>
                <Link to={"/products/add"} className={css.addLink}>Додати товар</Link>
            </div>
            <ProductList products={filteredProducts} />

            {filteredProducts.length === 0 && filter && (
                <p className={css.notFound}>
                    Товари за запитом <span>"{filter}"</span> не знайдені.
                </p>
            )}
        </div>
    )

}

export default ProductsPage;