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
        return <div className="loading">Đang tải bài viết...</div>;
    }
    return (
        <div className="posts-container">
            <h1 className="main-title">Danh sách bài viết</h1>
            <div className="posts-grid">
                {products.map((post) => (
                    <div key={post.id} className="post-card">
                        <div className="post-header">
                            <span className="post-badge">ID: {post.id}</span>
                            <span className="post-user-badge">
                                User ID: {post.userId}
                            </span>
                        </div>
                        <h2 className="post-title">
                            {post.title.charAt(0).toUpperCase() +
                                post.title.slice(1)}
                        </h2>
                        <p className="post-body">
                            {post.body.length > 100
                                ? post.body.substring(0, 100) + "..."
                                : post.body}
                        </p>
                        <button
                            className="btn-detail"
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
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-header">
                    <span className="post-badge">ID: {post.id}</span>
                    <span className="post-user-badge">
                        User ID: {post.userId}
                    </span>
                </div>
                <h2 className="modal-title">
                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </h2>
                <p className="modal-body">{post.body}</p>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProductApp />);
