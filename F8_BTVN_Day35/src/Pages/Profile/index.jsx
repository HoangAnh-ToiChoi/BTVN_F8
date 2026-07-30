import React from "react";
import styles from "./Profile.module.scss";

function ProfileCard() {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fecthUser = async () => {
            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/users/1",
                );
                const data = await res.json();
                setUser(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fecthUser();
    }, []);

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }
    if (!user) {
        return <div className={styles.error}>Không tìm thấy thông tin user!</div>;
    }
    return (
        <div className={styles["fb-profile-container"]}>
            <div className={styles["fb-cover-photo"]}></div>

            <div className={styles["fb-profile-header"]}>
                <div className={styles["fb-avatar-container"]}>
                    <div className={styles["fb-avatar-circle"]}>
                        {user.name ? user.name.charAt(0) : "U"}
                    </div>
                </div>

                <div className={styles["fb-profile-info"]}>
                    <h2 className={styles["fb-name"]}>{user.name}</h2>
                    <p className={styles["fb-username"]}>@{user.username}</p>
                </div>

                <div className={styles["fb-action-buttons"]}>
                    <button className={`${styles["fb-btn"]} ${styles["fb-btn-primary"]}`}>
                        Thêm bạn bè
                    </button>
                    <button className={`${styles["fb-btn"]} ${styles["fb-btn-secondary"]}`}>
                        Nhắn tin
                    </button>
                </div>
            </div>

            <div className={styles["fb-profile-details"]}>
                <h3 className={styles["fb-details-title"]}>Giới thiệu</h3>
                <div className={styles["fb-details-list"]}>
                    <div className={styles["fb-details-item"]}>
                        <span className={styles["fb-icon"]}>📍</span>
                        <span>
                            Sống tại <strong>{user.address?.city}</strong>
                        </span>
                    </div>
                    <div className={styles["fb-details-item"]}>
                        <span className={styles["fb-icon"]}>💼</span>
                        <span>
                            Làm việc tại <strong>{user.company?.name}</strong>
                        </span>
                    </div>
                    <div className={styles["fb-details-item"]}>
                        <span className={styles["fb-icon"]}>✉️</span>
                        <span>
                            Email: <strong>{user.email}</strong>
                        </span>
                    </div>
                    <div className={styles["fb-details-item"]}>
                        <span className={styles["fb-icon"]}>📞</span>
                        <span>
                            Điện thoại: <strong>{user.phone}</strong>
                        </span>
                    </div>
                    <div className={styles["fb-details-item"]}>
                        <span className={styles["fb-icon"]}>🔗</span>
                        <span>
                            Website:{" "}
                            <a
                                href={`https://${user.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {user.website}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
