import styles from "./Footer.module.scss";
import { NavLink } from "react-router";

function Footer() {
    return (
        <footer className={styles.footer}>
            <NavLink to="/privacy">Privacy</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </footer>
    );
}

export default Footer;
