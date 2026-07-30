import React from "react";
import styles from "./Product.module.scss";

function ProductApp() {
    const [products, setProduct] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [selectedPost, setSelectedPost] = React.useState(null);

    React.useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/posts?_limit=12",
                );
                const data = await res.json();
                setProduct(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, []);

    if (loading) {
        return <div className={styles.loading}>Đang tải bài viết...</div>;
    }
    return (
        <div className={styles["posts-container"]}>
            <h1 className={styles["main-title"]}>Danh sách bài viết</h1>
            <div className={styles["posts-grid"]}>
                {products.map((post) => (
                    <div key={post.id} className={styles["post-card"]}>
                        <div className={styles["post-header"]}>
                            <span className={styles["post-badge"]}>ID: {post.id}</span>
                            <span className={styles["post-user-badge"]}>
                                User ID: {post.userId}
                            </span>
                        </div>
                        <h2 className={styles["post-title"]}>
                            {post.title.charAt(0).toUpperCase() +
                                post.title.slice(1)}
                        </h2>
                        <p className={styles["post-body"]}>
                            {post.body.length > 100
                                ? post.body.substring(0, 100) + "..."
                                : post.body}
                        </p>
                        <button
                            className={styles["btn-detail"]}
                            onClick={() => {
                                setSelectedPost(post);
                            }}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                ))}
            </div>
            {selectedPost && (
                <PostModal
                    post={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}
        </div>
    );
}
function PostModal({ post, onClose }) {
    if (!post) return null;

    return (
        <div className={styles["modal-overlay"]} onClick={onClose}>
            <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
                <button className={styles["modal-close"]} onClick={onClose}>
                    &times;
                </button>
                <div className={styles["modal-header"]}>
                    <span className={styles["post-badge"]}>ID: {post.id}</span>
                    <span className={styles["post-user-badge"]}>
                        User ID: {post.userId}
                    </span>
                </div>
                <h2 className={styles["modal-title"]}>
                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </h2>
                <p className={styles["modal-body"]}>{post.body}</p>
            </div>
        </div>
    );
}

export default ProductApp;
