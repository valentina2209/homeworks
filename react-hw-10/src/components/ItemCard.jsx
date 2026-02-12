import css from "./ItemCard.module.css"

function ItemCard({
    image,
    name,
    type,
    extra,
    isSelected,
    onToggle,
    onRemove,
    showRemove = false,
    showToggle = true,
}) {
    return (
        <article className={css.card}>
            <div className={css.imageWrapper}>
                <img src={image} alt={name} className={css.image} />
            </div>
            <div className={css.content}>
                <p className={css.type}>{type}</p>
                <h2 className={css.name}>{name}</h2>


                {extra && <p className={css.extra}>{extra}</p>}

                <div className={css.actions}>
                    {showToggle && onToggle && (
                        <button
                            className={`${css.button} ${isSelected ? css.secondary : css.primary}`}
                            onClick={onToggle}
                        >
                            {isSelected ? "Скасувати" : "Обрати"}
                        </button>
                    )}

                    {showRemove && onRemove && (
                        <button
                            className={`${css.button} ${css.danger}`}
                            onClick={onRemove}
                        >
                            Видалити
                        </button>
                    )}
                </div>
            </div>
        </article>

    );
}

export default ItemCard;






























