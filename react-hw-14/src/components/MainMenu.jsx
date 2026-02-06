import { routes } from "@/router/routes";
import { NavLink } from "react-router";
import styles from "./MainMenu.module.css";

function MainMenu() {

    const menuItems = routes[0].children.filter((route) => route?.meta?.title)

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {menuItems.map((route, index) => (
                    <li key={index} className={styles.item}>
                        <NavLink
                            to={route.index ? "" : route.path}
                            end
                            className={({ isActive }) =>
                                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                            }
                        >
                            {route.meta.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MainMenu;