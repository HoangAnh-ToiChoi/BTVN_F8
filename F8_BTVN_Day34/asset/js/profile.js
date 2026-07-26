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
        return <div>Loading...</div>;
    }
    if (!user) {
        return <div className="error">Không tìm thấy thông tin user!</div>;
    }
    return (
        <div className="fb-profile-container">
            <div className="fb-cover-photo"></div>

            <div className="fb-profile-header">
                <div className="fb-avatar-container">
                    <div className="fb-avatar-circle">
                        {user.name ? user.name.charAt(0) : "U"}
                    </div>
                </div>

                <div className="fb-profile-info">
                    <h2 className="fb-name">{user.name}</h2>
                    <p className="fb-username">@{user.username}</p>
                </div>

                <div className="fb-action-buttons">
                    <button className="fb-btn fb-btn-primary">
                        Thêm bạn bè
                    </button>
                    <button className="fb-btn fb-btn-secondary">
                        Nhắn tin
                    </button>
                </div>
            </div>

            <div className="fb-profile-details">
                <h3 className="fb-details-title">Giới thiệu</h3>
                <div className="fb-details-list">
                    <div className="fb-details-item">
                        <span className="fb-icon">📍</span>
                        <span>
                            Sống tại <strong>{user.address?.city}</strong>
                        </span>
                    </div>
                    <div className="fb-details-item">
                        <span className="fb-icon">💼</span>
                        <span>
                            Làm việc tại <strong>{user.company?.name}</strong>
                        </span>
                    </div>
                    <div className="fb-details-item">
                        <span className="fb-icon">✉️</span>
                        <span>
                            Email: <strong>{user.email}</strong>
                        </span>
                    </div>
                    <div className="fb-details-item">
                        <span className="fb-icon">📞</span>
                        <span>
                            Điện thoại: <strong>{user.phone}</strong>
                        </span>
                    </div>
                    <div className="fb-details-item">
                        <span className="fb-icon">🔗</span>
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProfileCard />);
