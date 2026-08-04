import { Outlet } from "react-router";

import styles from "./AuthLayout.module.scss";
import AuthSidebar from "./Components/AuthSidebar";

function AuthLayout() {
    return (
        <div className={styles.authLayout}>
            <AuthSidebar />
            <div className={styles.authContent}>
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;
