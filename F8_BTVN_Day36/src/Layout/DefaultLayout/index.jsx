import { Outlet } from "react-router";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout() {
    return (
        <div className={styles.defaultLayout}>
            <Outlet />
        </div>
    );
}

export default DefaultLayout;
