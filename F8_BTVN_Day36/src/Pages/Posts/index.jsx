import { useNavigate, useSearchParams, Link } from "react-router";

import React from "react";
import styles from "./Posts.module.scss";
import Pagination from "../../Components/Pagination";
import Loading from "../../Components/Loading";

function Posts() {
    const [post, setPost] = React.useState([]);
    const [url, setUrl] = useSearchParams();
    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();

    React.useEffect(() => {
        let isCurrent = true;

        setLoading(false);
        const timer = setTimeout(() => {
            setLoading(true);
        }, 2000);

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
                if (isCurrent) setPost(data);
            })
            .finally(() => {
                if (isCurrent) {
                    clearTimeout(timer);
                    setLoading(false);
                }
            });

        return () => {
            isCurrent = false;
            clearTimeout(timer);
        };
    }, [page]);

    React.useEffect(() => {
        const pageUrl = +url.get("page") || 1;
        setPage(pageUrl);
        window.scroll({ top: 0, behavior: "smooth" });
    }, [url]);

    if (loading) {
        return <Loading>Đang tải dữ liệu.</Loading>;
    }

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
                            <Link
                                to={`/post/${item.id}`}
                                className={styles.readMoreBtn}
                            >
                                Đọc thêm
                            </Link>
                        </div>
                    );
                })}
            </div>
            {post.length > 0 && (
                <Pagination
                    currentPage={page}
                    totalPages={5}
                    onPageChange={(newPage) => {
                        setPage(newPage);
                        setUrl({ limit: 20, page: newPage });
                    }}
                />
            )}
        </div>
    );
}

export default Posts;
