import { Outlet } from "react-router";
import styles from "./DefaultLayout.module.scss";
import Header from "../Components/Header";
import DefaultFooter from "./Components/DefaultFooter";

function DefaultLayout() {
    return (
        <>
            <div className={styles.defaultLayout}>
                <Header />
                <Outlet />
                <DefaultFooter />
            </div>
        </>
    );
}

export default DefaultLayout;
