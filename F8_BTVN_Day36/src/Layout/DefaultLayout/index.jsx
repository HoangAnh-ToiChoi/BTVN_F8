import { Outlet } from "react-router";
import styles from "./DefaultLayout.module.scss";
import Header from "../Components/Header";
import Footer from "./Components/footer";

function DefaultLayout() {
    return (
        <>
            <div className={styles.defaultLayout}>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default DefaultLayout;
