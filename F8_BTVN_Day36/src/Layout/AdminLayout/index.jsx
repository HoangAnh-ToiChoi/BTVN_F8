import { Outlet } from "react-router";

import styles from "./AdminLayout.module.scss";

import AdminHeader from "./Components/AdminHeader";
import AdminFooter from "./Components/AdminFooter";
import AdminSidebar from "./Components/AdminSidebar";

function AdminLayout() {
    return (
        <div className={styles.adminContainer}>
            <AdminHeader />
            <div className={styles.adminBody}>
                <AdminSidebar />
                <div className={styles.adminMain}>
                    <main className={styles.mainContent}>
                        <Outlet />
                    </main>
                    <AdminFooter />
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
