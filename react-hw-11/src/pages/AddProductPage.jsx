import { addProduct } from "@/redux/slices/productsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import css from "./AddProductPage.module.css";

function AddProductPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [product, setProduct] = useState({
        image: "",
        name: "",
        price: "",
        description: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!product.image || !product.name || !product.price || !product.description) {
            alert('Заповніть всі поля');
            return;
        }

        const productToAdd = {
            ...product,
            price: Number(product.price)
        }

        dispatch(addProduct(productToAdd))
        navigate("/products")
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setProduct(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className={css.container}>
            <h1 className={css.title}>Додати новий товар</h1>

            <form onSubmit={handleSubmit} className={css.form}>
                <div className={css.inputGroup}>
                    <label className={css.label}>Посилання на зображення:</label>
                    <input
                        className={css.input}
                        type="url"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                        required
                    />
                </div>
                <div className={css.inputGroup}>
                    <label className={css.label}>Назва товару:</label>
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        placeholder="Смартфон"
                        required
                    />
                </div>
                <div className={css.inputGroup}>
                    <label className={css.label}>Ціна:</label>
                    <input
                        className={css.input}
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="12999"
                        min="0"
                        required
                    />
                </div>
                <div className={css.inputGroup}>
                    <label className={css.label}>Опис:</label>
                    <textarea
                        className={css.textarea}
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Стильний смартфон з великим екраном"
                        required
                    />
                </div>

                <div className={css.buttonGroup}>
                    <button type="submit" className={css.submitBtn}>
                        Додати товар
                    </button>

                    <button type="button" className={css.backBtn} onClick={() => navigate("/products")}>
                        Назад
                    </button>
                </div>

            </form>
        </div>
    );
}

export default AddProductPage;