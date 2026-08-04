import { Outlet } from "react-router";

import styles from "./AuthLayout.module.scss";

// Layout
import AuthSidebar from "./Components/AuthSidebar";
import Header from "../Components/Header";

function AuthLayout() {
    return (
        <div className={styles.authContainer}>
            <Header />
            <div className={styles.authLayout}>
                <AuthSidebar />
                <div className={styles.authContent}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
