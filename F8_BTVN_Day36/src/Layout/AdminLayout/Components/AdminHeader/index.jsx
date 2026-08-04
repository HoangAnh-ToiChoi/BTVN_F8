import { useNavigate } from "react-router";

import styles from "./AdminHeader.module.scss";

function AdminHeader() {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <div
                className={styles.logo}
                onClick={() => {
                    navigate("/");
                }}
            >
                Admin Panel
            </div>
            <div className={styles.userInfo}>Welcome, Admin!</div>
        </header>
    );
}

export default AdminHeader;
