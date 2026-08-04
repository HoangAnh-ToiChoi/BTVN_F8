import { NavLink } from "react-router";
import styles from "./Header.module.scss";

function Header() {
    return (
        <div className={styles.header}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/privacy">Privacy</NavLink>
            <div className={styles.authGroup}>
                <NavLink to="/auth/login">Login</NavLink>
                <NavLink to="/auth/register">Register</NavLink>
                <NavLink to="/admin/">Admin</NavLink>
            </div>
        </div>
    );
}

export default Header;
