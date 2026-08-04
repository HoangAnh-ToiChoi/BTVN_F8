import React from "react";
import { Link } from "react-router";
import styles from "./Home.module.scss";

function Home() {
    const tasks = [
        {
            id: 1,
            title: "Bài 1: Setup Multiple Layouts với React Router",
            status: "incomplete",
            path: "/login",
            description: "Cấu hình lồng Layouts (DefaultLayout, AuthLayout, AdminLayout) và định tuyến trang NotFound (*) trong AppRouter.",
            subtasks: [
                { text: "Cấu trúc thư mục trang và layout", done: true },
                { text: "DefaultLayout (Header, Footer, Outlet)", done: true },
                { text: "AuthLayout & AuthSidebar (Đăng nhập, Đăng ký, Quên mật khẩu)", done: false },
                { text: "AdminLayout & AdminSidebar (Header/Footer riêng, Sidebar menu)", done: false },
                { text: "Trang NotFound (*) xử lý 404", done: true },
                { text: "Cấu hình Routes lồng trong AppRoutes", done: true }
            ]
        },
        {
            id: 2,
            title: "Bài 2: Posts List với Pagination & API Integration",
            status: "completed",
            path: "/posts",
            description: "Hiển thị danh sách 20 bài viết/trang từ API, đồng bộ trang hiện tại lên URL bằng useSearchParams và tích hợp bộ phân trang Pagination.",
            subtasks: [
                { text: "Gọi API lấy danh sách posts", done: true },
                { text: "Hiển thị 20 bài viết dạng lưới Card đẹp mắt", done: true },
                { text: "Tích hợp Pagination (First, Last, Prev, Next, highlight số trang)", done: true },
                { text: "Đồng bộ ?page lên thanh địa chỉ URL", done: true },
                { text: "Hiển thị màn hình Loading trong lúc tải", done: true }
            ]
        },
        {
            id: 3,
            title: "Bài 3: Post Detail với Comments",
            status: "completed",
            path: "/post/1",
            description: "Sử dụng useParams lấy id bài viết, tải đồng thời chi tiết bài viết và danh sách comments, xử lý lỗi 404 tự động chuyển hướng.",
            subtasks: [
                { text: "Lấy id bài viết từ URL bằng useParams", done: true },
                { text: "Gọi song song 2 API bằng Promise.all", done: true },
                { text: "Chuyển hướng về /posts (replace: true) khi lỗi 404", done: true },
                { text: "Hiển thị chi tiết bài viết & danh sách bình luận đầy đủ thông tin", done: true }
            ]
        },
        {
            id: 4,
            title: "Bài 4: ScrollToTop Component",
            status: "completed",
            path: "/contact",
            description: "Tạo component ScrollToTop lắng nghe thay đổi route và tự động cuộn lên đầu trang giúp cải thiện trải nghiệm người dùng.",
            subtasks: [
                { text: "Tạo component bằng useLocation và useEffect", done: true },
                { text: "Tự động scroll về (0, 0) khi pathname thay đổi", done: true },
                { text: "Tích hợp vào AppRouter hoạt động toàn trang", done: true }
            ]
        },
        {
            id: 5,
            title: "Bài 5: Contact & Privacy Pages",
            status: "completed",
            path: "/privacy",
            description: "Thiết kế 2 trang Contact và Privacy dạng bài blog dài, đặt link dưới Footer để kiểm tra tính năng ScrollToTop.",
            subtasks: [
                { text: "Tạo trang Contact & Privacy đủ dài để có thanh cuộn", done: true },
                { text: "Liên kết 2 trang dưới Footer của DefaultLayout", done: true },
                { text: "Kiểm tra tính năng ScrollToTop hoạt động chính xác", done: true }
            ]
        }
    ];

    return (
        <div className={styles.homeContainer}>
            <header className={styles.homeHeader}>
                <h1 className={styles.mainTitle}>F8 Fullstack - BTVN Day 36</h1>
                <p className={styles.subTitle}>Hệ thống theo dõi tiến độ hoàn thành bài tập về nhà</p>
            </header>

            <main className={styles.tasksGrid}>
                {tasks.map((task) => (
                    <div key={task.id} className={`${styles.taskCard} ${styles[task.status]}`}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>{task.title}</h3>
                            <p className={styles.cardSubtitle}>
                                💪 Tự code, tự làm, không báo "AI" làm hộ — Chúc bạn hoàn thành tốt bài tập! 🚀
                            </p>
                        </div>
                        
                        <div className={styles.cardBody}>
                            <div className={styles.subtasksList}>
                                {task.subtasks.map((sub, idx) => (
                                    <div key={idx} className={`${styles.subtaskItem} ${sub.done ? styles.done : styles.pending}`}>
                                        <span className={styles.subtaskIcon}>
                                            {sub.done ? "✓" : "○"}
                                        </span>
                                        <span className={styles.subtaskText}>{sub.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.cardFooter}>
                            <Link to={task.path} className={styles.actionBtn}>
                                Xem bài làm
                            </Link>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default Home;
