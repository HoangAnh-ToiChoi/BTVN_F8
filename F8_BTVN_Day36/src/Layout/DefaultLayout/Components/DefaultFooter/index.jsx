import styles from "./DefaultFooter.module.scss";
import { NavLink } from "react-router";

function DefaultFooter() {
    return (
        <footer className={styles.footer}>
            <NavLink to="/privacy">Privacy</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </footer>
    );
}

export default DefaultFooter;
