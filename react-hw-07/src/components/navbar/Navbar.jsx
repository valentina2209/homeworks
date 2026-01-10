import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={css.container}>
            <ul className={css.navList}>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => [css.navLink, isActive ? css.active : ''].join(' ')}>
                        Головна
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/products'
                        className={({ isActive }) => [css.navLink, isActive ? css.active : ''].join(' ')}>
                        Магазин
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/rules'
                        className={({ isActive }) => [css.navLink, isActive ? css.active : ''].join(' ')}>
                        Правила оплати
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contacts'
                        className={({ isActive }) => [css.navLink, isActive ? css.active : ''].join(' ')}>
                        Контакти
                    </NavLink>
                </li>


            </ul>
        </nav>
    );
}

export default Navbar;