import { NavLink } from 'react-router'
import css from "./Header.module.css"

function Header() {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) => `${css.link} ${isActive ? css.active : ""}`}
                >
                    Головна
                </NavLink>
                <NavLink
                    to="/products"
                    className={({ isActive }) => `${css.link} ${isActive ? css.active : ""}`}
                >
                    Каталог товарів
                </NavLink>
                <NavLink
                    to="/posts"
                    className={({ isActive }) => `${css.link} ${isActive ? css.active : ""}`}
                >
                    Список публікацій
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;


