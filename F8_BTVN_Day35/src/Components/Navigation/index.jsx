import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";

function Nav() {
    return (
        <nav className={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Counter">Counter</NavLink>
            <NavLink to="/Profile">Profile</NavLink>
            <NavLink to="/Todo">Todo List</NavLink>
            <NavLink to="/Comments">Comments</NavLink>
            <NavLink to="/Products">Products</NavLink>
            <NavLink to="/Buttons">Buttons</NavLink>
            <NavLink to="/Weather">Weather App</NavLink>
        </nav>
    );
}

export default Nav;
