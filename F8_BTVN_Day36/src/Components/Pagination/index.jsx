import styles from "./Pagination.module.scss";

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className={styles.pagination}>
            <button
                className={`${styles.pageItem} ${styles.navBtn}`}
                onClick={() => onPageChange(1)}
                disabled={currentPage <= 1}
            >
                First
            </button>
            <button
                className={`${styles.pageItem} ${styles.navBtn}`}
                onClick={() => {
                    if (currentPage > 1) {
                        onPageChange(currentPage - 1);
                    }
                }}
                disabled={currentPage <= 1}
            >
                Previous
            </button>
            {Array(totalPages)
                .fill()
                .map((_, index) => {
                    const pageNum = index + 1;
                    return (
                        <button
                            key={pageNum}
                            className={`${styles.pageItem}
                                 ${currentPage === pageNum ? styles.active : ""}`}
                            onClick={() => {
                                onPageChange(pageNum);
                            }}
                            disabled={currentPage === pageNum}
                        >
                            {pageNum}
                        </button>
                    );
                })}
            <button
                className={`${styles.pageItem} ${styles.navBtn}`}
                onClick={() => {
                    if (currentPage < totalPages) {
                        onPageChange(currentPage + 1);
                    }
                }}
                disabled={currentPage >= totalPages}
            >
                Next
            </button>
            <button
                className={`${styles.pageItem} ${styles.navBtn}`}
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage >= totalPages}
            >
                Last
            </button>
        </div>
    );
}

export default Pagination;
