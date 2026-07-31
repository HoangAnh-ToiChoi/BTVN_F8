import React from "react";
import { NavLink } from "react-router";

import Nav from "../../Components/Navigation";
import styles from "./Home.module.scss";

function Home() {
    React.useEffect(() => {
        document.body.classList.add(styles["home-body"]);
        return () => {
            document.body.classList.remove(styles["home-body"]);
        };
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>📚 Bài Tập Buổi 35</h1>
                <p className={styles.subtitle}>
                    Thực hành nâng cao với React Component & Routing
                </p>
                <Nav />
            </header>

            <main className={styles["cards-grid"]}>
                <NavLink to="/Counter" className={styles["card-link"]}>
                    <article className={`${styles.card} ${styles.featured}`}>
                        <div className={styles["card-header"]}>
                            <h2>Bài 1: Counter App</h2>
                            <p className={styles.slogan}>
                                💪 Tự code, tự làm, không bảo "AI" làm hộ – Chúc
                                bạn hoàn thành tốt bài tập! 🚀
                            </p>
                        </div>
                        <div className={styles["card-body"]}>
                            <ul className={styles["feature-list"]}>
                                <li>
                                    Quản lý trạng thái tăng, giảm, reset với
                                    React.useState.
                                </li>
                                <li>
                                    Hiển thị màu sắc trạng thái động (số âm, số
                                    dương, bằng 0).
                                </li>
                                <li>
                                    Xử lý thay đổi nội dung văn bản mô tả trạng
                                    thái tương ứng.
                                </li>
                            </ul>
                        </div>
                        <div className={styles["card-footer"]}>
                            <span
                                className={`${styles.btn} ${styles["btn-featured"]}`}
                            >
                                Xem bài làm
                            </span>
                        </div>
                    </article>
                </NavLink>

                <NavLink to="/Todo" className={styles["card-link"]}>
                    <article className={`${styles.card} ${styles.featured}`}>
                        <div className={styles["card-header"]}>
                            <h2>Bài 2: Todo List App</h2>
                            <p className={styles.slogan}>
                                💪 Tự code, tự làm, không bảo "AI" làm hộ – Chúc
                                bạn hoàn thành tốt bài tập! 🚀
                            </p>
                        </div>
                        <div className={styles["card-body"]}>
                            <ul className={styles["feature-list"]}>
                                <li>
                                    Thêm, sửa, xóa, và toggle trạng thái hoàn
                                    thành công việc.
                                </li>
                                <li>
                                    Thống kê số lượng công việc: Tổng số, Hoàn
                                    thành, Còn lại.
                                </li>
                                <li>
                                    Sử dụng React state quản lý danh sách tasks
                                    động hoàn toàn.
                                </li>
                            </ul>
                        </div>
                        <div className={styles["card-footer"]}>
                            <span
                                className={`${styles.btn} ${styles["btn-featured"]}`}
                            >
                                Xem bài làm
                            </span>
                        </div>
                    </article>
                </NavLink>

                <NavLink to="/Profile" className={styles["card-link"]}>
                    <article className={`${styles.card} ${styles.featured}`}>
                        <div className={styles["card-header"]}>
                            <h2>Bài 3: Profile Card</h2>
                            <p className={styles.slogan}>
                                💪 Tự code, tự làm, không bảo "AI" làm hộ – Chúc
                                bạn hoàn thành tốt bài tập! 🚀
                            </p>
                        </div>
                        <div className={styles["card-body"]}>
                            <ul className={styles["feature-list"]}>
                                <li>
                                    Gọi API lấy thông tin người dùng từ
                                    JSONPlaceholder.
                                </li>
                                <li>
                                    Xử lý trạng thái Loading và hiển thị lỗi khi
                                    API thất bại.
                                </li>
                                <li>
                                    Thiết kế giao diện thẻ Profile lấy cảm hứng
                                    từ Facebook.
                                </li>
                            </ul>
                        </div>
                        <div className={styles["card-footer"]}>
                            <span
                                className={`${styles.btn} ${styles["btn-featured"]}`}
                            >
                                Xem bài làm
                            </span>
                        </div>
                    </article>
                </NavLink>

                <NavLink to="/Products" className={styles["card-link"]}>
                    <article className={`${styles.card} ${styles.featured}`}>
                        <div className={styles["card-header"]}>
                            <h2>Bài 3: Product List</h2>
                            <p className={styles.slogan}>
                                💪 Tự code, tự làm, không bảo "AI" làm hộ – Chúc
                                bạn hoàn thành tốt bài tập! 🚀
                            </p>
                        </div>
                        <div className={styles["card-body"]}>
                            <ul className={styles["feature-list"]}>
                                <li>
                                    Tải danh sách 12 bài viết (posts) từ API của
                                    JSONPlaceholder.
                                </li>
                                <li>
                                    Bố cục lưới (grid layout) hiển thị các bài
                                    viết trực quan.
                                </li>
                                <li>
                                    Xem chi tiết nội dung bài viết qua cửa sổ
                                    modal tương tác.
                                </li>
                            </ul>
                        </div>
                        <div className={styles["card-footer"]}>
                            <span
                                className={`${styles.btn} ${styles["btn-featured"]}`}
                            >
                                Xem bài làm
                            </span>
                        </div>
                    </article>
                </NavLink>

                <NavLink to="/Comments" className={styles["card-link"]}>
                    <article className={`${styles.card} ${styles.featured}`}>
                        <div className={styles["card-header"]}>
                            <h2>Bài 3: Comments Section</h2>
                            <p className={styles.slogan}>
                                💪 Tự code, tự làm, không bảo "AI" làm hộ – Chúc
                                bạn hoàn thành tốt bài tập! 🚀
                            </p>
                        </div>
                        <div className={styles["card-body"]}>
                            <ul className={styles["feature-list"]}>
                                <li>
                                    Lấy danh sách bình luận cho bài viết ID 1 từ
                                    API.
                                </li>
                                <li>
                                    Tích hợp form bình luận mới (hỗ trợ nhập
                                    Tên, Email, Nội dung).
                                </li>
                                <li>
                                    Render avatar ngẫu nhiên dựa trên tên người
                                    bình luận.
                                </li>
                            </ul>
                        </div>
                        <div className={styles["card-footer"]}>
                            <span
                                className={`${styles.btn} ${styles["btn-featured"]}`}
                            >
                                Xem bài làm
                            </span>
                        </div>
                    </article>
                </NavLink>

                <NavLink to="/Weather" className={styles["card-link"]}>
                    <article className={`${styles.card} ${styles.featured}`}>
                        <div className={styles["card-header"]}>
                            <h2>Bài 4: Weather App</h2>
                            <p className={styles.slogan}>
                                💪 Tự code, tự làm, không bảo "AI" làm hộ – Chúc
                                bạn hoàn thành tốt bài tập! 🚀
                            </p>
                        </div>
                        <div className={styles["card-body"]}>
                            <ul className={styles["feature-list"]}>
                                <li>
                                    Dự báo thời tiết các thành phố: Hà Nội, Đà
                                    Nẵng, TP.HCM.
                                </li>
                                <li>
                                    Tự động cập nhật biểu tượng (emoji) thời
                                    tiết tương ứng.
                                </li>
                                <li>
                                    Chức năng ngẫu nhiên hóa nhiệt độ và độ ẩm
                                    thực tế.
                                </li>
                            </ul>
                        </div>
                        <div className={styles["card-footer"]}>
                            <span
                                className={`${styles.btn} ${styles["btn-featured"]}`}
                            >
                                Xem bài làm
                            </span>
                        </div>
                    </article>
                </NavLink>

                <NavLink to="/Buttons" className={styles["card-link"]}>
                    <article className={`${styles.card} ${styles.featured}`}>
                        <div className={styles["card-header"]}>
                            <h2>Bài 5: Custom Buttons</h2>
                            <p className={styles.slogan}>
                                💪 Tự code, tự làm, không bảo "AI" làm hộ – Chúc
                                bạn hoàn thành tốt bài tập! 🚀
                            </p>
                        </div>
                        <div className={styles["card-body"]}>
                            <ul className={styles["feature-list"]}>
                                <li>
                                    Xây dựng Component Button dùng chung tùy
                                    biến cao.
                                </li>
                                <li>
                                    Hỗ trợ nhiều variant, size, border, loading
                                    & disabled.
                                </li>
                                <li>
                                    Trang showcase hiển thị trực quan các trạng
                                    thái tương tác.
                                </li>
                            </ul>
                        </div>
                        <div className={styles["card-footer"]}>
                            <span
                                className={`${styles.btn} ${styles["btn-featured"]}`}
                            >
                                Xem bài làm
                            </span>
                        </div>
                    </article>
                </NavLink>
            </main>

            <footer className={styles.footer}>
                <p>© 2026 F8 - Học lập trình để đi làm</p>
            </footer>
        </div>
    );
}

export default Home;
