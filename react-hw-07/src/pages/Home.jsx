import css from './Home.module.css'

function Home() {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Цей магазин належить програмісту на фрілансі</h2>
            <p className={css.text}>Тому:</p>
            <ol>
                <li>Магазин працює коли хоче</li>
                <li>Товари надсилає швидко</li>
                <li>На запитання відповідає коли висипається</li>
            </ol>
        </div>
    )


}
export default Home