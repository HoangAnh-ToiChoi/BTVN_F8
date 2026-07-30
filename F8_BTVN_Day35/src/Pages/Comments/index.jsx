import React from "react";
import styles from "./Comments.module.scss";

const fakeTimes = [
    "2 phút trước",
    "15 phút trước",
    "1 giờ trước",
    "2 giờ trước",
    "5 giờ trước",
    "12 giờ trước",
    "1 ngày trước",
    "2 ngày trước",
];

function Comments() {
    const [comments, setComments] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [body, setBody] = React.useState("");

    function handleName(e) {
        setName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handleBody(e) {
        setBody(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (name.trim() && email.trim() && body.trim()) {
            const nextId = comments.length
                ? Math.max(...comments.map((c) => c.id)) + 1
                : 1;
            const newComment = {
                id: nextId,
                name: name,
                email: email,
                body: body,
            };
            setComments([newComment, ...comments]);
            setName("");
            setEmail("");
            setBody("");
        }
    }

    React.useEffect(() => {
        const fetchComment = async () => {
            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/comments?postId=1",
                );
                const data = await res.json();
                setComments(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchComment();
    }, []);

    if (loading) {
        return <div className={styles.loading}>Đang tải bình luận...</div>;
    }
    return (
        <div className={styles["comments-container"]}>
            <h1 className={styles["main-title"]}>Danh sách bình luận</h1>

            <form className={styles["comment-form"]} onSubmit={handleSubmit}>
                <h2 className={styles["form-title"]}>Để lại bình luận</h2>
                <div className={styles["form-group-row"]}>
                    <input
                        type="text"
                        className={styles["comment-input"]}
                        placeholder="Tên của bạn"
                        onChange={handleName}
                        value={name}
                    />
                    <input
                        type="email"
                        className={styles["comment-input"]}
                        placeholder="Email của bạn"
                        onChange={handleEmail}
                        value={email}
                    />
                </div>
                <textarea
                    className={styles["comment-textarea"]}
                    placeholder="Viết bình luận..."
                    onChange={handleBody}
                    value={body}
                ></textarea>
                <button type="submit" className={styles["btn-submit"]}>
                    Gửi bình luận
                </button>
            </form>

            <div className={styles["comments-grid"]}>
                {comments.map((comment) => (
                    <div key={comment.id} className={styles["comment-card"]}>
                        <div className={styles["comment-card-header"]}>
                            <img
                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                    comment.name,
                                )}&background=random`}
                                alt={comment.name}
                                className={styles["comment-avatar"]}
                            />
                            <div className={styles["comment-meta"]}>
                                <h3 className={styles["comment-name"]}>
                                    {comment.name.charAt(0).toUpperCase() +
                                        comment.name.slice(1)}
                                </h3>
                                <span className={styles["comment-email"]}>
                                    {comment.email}
                                </span>
                            </div>
                            <span className={styles["comment-time"]}>
                                {fakeTimes[comment.id % fakeTimes.length]}
                            </span>
                        </div>
                        <p className={styles["comment-body"]}>{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comments;
