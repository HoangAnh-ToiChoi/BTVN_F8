import styles from "./AdminSidebar.module.scss";
import { NavLink } from "react-router";

function AdminSidebar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.adminHeader}>
                <h2>Admin Panel</h2>
            </div>
            <nav className={styles.navMenu}>
                <NavLink to="/admin" end className={styles.menuLink}>
                    <span className={styles.icon}>📊</span>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/admin/users" className={styles.menuLink}>
                    <span className={styles.icon}>👥</span>
                    <span>Users</span>
                </NavLink>
                <NavLink to="/admin/settings" className={styles.menuLink}>
                    <span className={styles.icon}>⚙️</span>
                    <span>Settings</span>
                </NavLink>
            </nav>
        </div>
    );
}

export default AdminSidebar;
