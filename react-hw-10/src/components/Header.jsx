import { NavLink } from 'react-router'
import css from "./Header.module.css"
import { useTheme } from '@/context/ThemeContext';

function Header() {
    const { theme, toggleTheme } = useTheme()

    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) => `${css.link} ${isActive ? css.active : ""}`}
                >
                    Транспорт
                </NavLink>
                <NavLink
                    to="/hotel"
                    className={({ isActive }) => `${css.link} ${isActive ? css.active : ""}`}
                >
                    Готелі
                </NavLink>
                <NavLink
                    to="/booking"
                    className={({ isActive }) => `${css.link} ${isActive ? css.active : ""}`}
                >
                    Мій тур
                </NavLink>

                <div className={css.toggleWrapper} onClick={toggleTheme}>
                    <div className={`${css.toggleTrack} ${theme === "dark" ? css.trackDark : ""}`}>
                        <div className={`${css.thumb} ${theme === "dark" ? css.thumbDark : ""}`}>
                            {theme === "light" ? "☀️" : "🌙"}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;



