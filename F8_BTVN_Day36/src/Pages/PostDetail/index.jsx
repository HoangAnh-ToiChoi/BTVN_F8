import { useParams, useNavigate } from "react-router";
import React from "react";

import styles from "./PostDetail.module.scss";
import Loading from "../../Components/Loading";

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = React.useState(null);
    const [comments, setComments] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const navigation = useNavigate();

    React.useEffect(() => {
        setLoading(false);
        const timer = setTimeout(() => {
            setLoading(true);
        }, 2000);
        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
                (res) => {
                    if (!res.ok) throw new Error("Post not found");
                    return res.json();
                },
            ),
            fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
            ).then((res) => res.json()),
        ])
            .then(([post, comments]) => {
                setPost(post);
                setComments(comments);
            })
            .catch(() => navigation("/posts", { replace: true }))
            .finally(() => {
                clearTimeout(timer);
                setLoading(false);
            });
    }, [id]);

    if (!post) {
        return loading ? <Loading>Đang tải dữ liệu</Loading> : null;
    }
    return (
        <div className={styles.postDetailContainer}>
            <button className={styles.backBtn} onClick={() => navigation(-1)}>
                &larr; Quay lại danh sách
            </button>
            <article className={styles.postDetailCard}>
                <header className={styles.postHeader}>
                    <span className={styles.authorBadge}>
                        Tác giả: User {post.userId}
                    </span>
                    <h1 className={styles.postTitle}>{post.title}</h1>
                </header>
                <div className={styles.postContent}>
                    <p>{post.body}</p>
                </div>
            </article>

            <div className={styles.commentsSection}>
                <h2 className={styles.commentsTitle}>Bình luận ({comments.length})</h2>
                <div className={styles.commentsList}>
                    {comments.map((item) => (
                        <div key={item.id} className={styles.commentCard}>
                            <div className={styles.commentHeader}>
                                <div className={styles.avatar}>
                                    {item.email.charAt(0).toUpperCase()}
                                </div>
                                <div className={styles.commentMeta}>
                                    <h4 className={styles.commentName}>{item.name}</h4>
                                    <span className={styles.commentEmail}>{item.email}</span>
                                </div>
                            </div>
                            <p className={styles.commentBody}>{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostDetail;
