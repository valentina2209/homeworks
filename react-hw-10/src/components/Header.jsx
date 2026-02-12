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
                    Bus
                </NavLink>
                <NavLink
                    to="/hotel"
                    className={({ isActive }) => `${css.link} ${isActive ? css.active : ""}`}
                >
                    Hotel
                </NavLink>
                <NavLink
                    to="/booking"
                    className={({ isActive }) => `${css.link} ${isActive ? css.active : ""}`}
                >
                    Booking
                </NavLink>

                <button
                    className={`${css.themeToggle} ${theme === 'dark' ? css.dark : ''}`}
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    <div className={css.toggleCircle}>
                        {theme === 'light' ? '☀️' : '🌙'}
                    </div>
                </button>
            </nav>
        </header>
    );
}

export default Header;