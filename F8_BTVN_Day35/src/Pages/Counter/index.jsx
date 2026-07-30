import React from "react";
import styles from "./Counter.module.scss";

function CounterApp() {
    const [count, setCount] = React.useState(0);

    return (
        <div className={styles['counter-card']}>
            <h1 className={styles.title}>Counter App</h1>

            <div
                className={
                    count > 0
                        ? `${styles['count-display']} ${styles.positive}`
                        : count < 0
                          ? `${styles['count-display']} ${styles.negative}`
                          : `${styles['count-display']} ${styles.zero}`
                }
            >
                {count}
            </div>

            <p className={styles['status-text']}>
                {count > 0 ? "số dương" : count < 0 ? "số âm" : "bằng không"}
            </p>

            <div className={styles['button-group']}>
                <button
                    className={`${styles.btn} ${styles['btn-increase']}`}
                    onClick={() => setCount(count + 1)}
                >
                    Tăng (+1)
                </button>
                <button
                    className={`${styles.btn} ${styles['btn-decrease']}`}
                    onClick={() => setCount(count - 1)}
                >
                    Giảm (-1)
                </button>
                <button className={`${styles.btn} ${styles['btn-reset']}`} onClick={() => setCount(0)}>
                    Reset (0)
                </button>
            </div>
        </div>
    );
}

export default CounterApp;
