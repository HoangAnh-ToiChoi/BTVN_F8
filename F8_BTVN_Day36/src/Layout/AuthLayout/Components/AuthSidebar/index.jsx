import styles from "./AuthSidebar.module.scss";
import { NavLink } from "react-router";

function AuthSidebar() {
    return (
        <div className={styles.authSidebar}>
            <h3 className={styles.sidebarTitle}>Xác thực</h3>
            <ul className={styles.sidebarMenu}>
                <li>
                    <NavLink to="/auth/login" className={styles.menuLink}>Login</NavLink>
                </li>
                <li>
                    <NavLink to="/auth/register" className={styles.menuLink}>Register</NavLink>
                </li>
                <li>
                    <NavLink to="/auth/forgot-password" className={styles.menuLink}>Forgot Password</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default AuthSidebar;
