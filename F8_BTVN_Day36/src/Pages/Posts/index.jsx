import React from "react";
import styles from "./Posts.module.scss";
import { useNavigate, useSearchParams } from "react-router";

function Posts() {
    const [post, setPost] = React.useState([]);
    const [url, setUrl] = useSearchParams();
    const [page, setPage] = React.useState(1);
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`,
        )
            .then((res) => {
                if (!res.ok) {
                    navigate("/not-found");
                }
                return res.json();
            })
            .then((data) => {
                setPost(data);
            });
    }, [page]);
    React.useEffect(() => {
        const pageUrl = +url.get("page") || 1;
        setPage(pageUrl);
        window.scroll({ top: 0, behavior: "smooth" });
    }, [url]);
    return (
        <div className={styles.postsContainer}>
            <h1 className={styles.title}>Danh sách bài viết</h1>
            <div className={styles.postsGrid}>
                {post.map((item) => {
                    return (
                        <div key={item.id} className={styles.postCard}>
                            <div className={styles.cardContent}>
                                <h2 className={styles.postTitle}>
                                    {item.title}
                                </h2>
                                <p className={styles.postBody}>{item.body}</p>
                            </div>
                            <button className={styles.readMoreBtn}>
                                Đọc thêm
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className={styles.pagination}>
                {Array(5)
                    .fill()
                    .map((_, index) => {
                        const pageNum = index + 1;
                        return (
                            <button
                                key={pageNum}
                                className={`${styles.pageItem}
                                 ${page === pageNum ? styles.active : ""}`}
                                onClick={() => {
                                    setPage(pageNum);
                                    setUrl({ limit: 20, page: pageNum });
                                }}
                            >
                                {pageNum}
                            </button>
                        );
                    })}
            </div>
        </div>
    );
}

export default Posts;
