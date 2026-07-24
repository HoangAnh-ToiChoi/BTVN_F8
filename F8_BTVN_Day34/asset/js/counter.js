function CounterApp() {
    const [count, setCount] = React.useState(0);

    return (
        <div className="counter-card">
            <h1 className="title">Counter App</h1>

            <div
                className={
                    count > 0
                        ? "count-display positive"
                        : count < 0
                          ? "count-display negative"
                          : "count-display zero"
                }
            >
                {count}
            </div>

            <p className="status-text">
                {count > 0 ? "số dương" : count < 0 ? "số âm" : "bằng không"}
            </p>

            <div className="button-group">
                <button
                    className="btn btn-increase"
                    onClick={() => setCount(count + 1)}
                >
                    Tăng (+1)
                </button>
                <button
                    className="btn btn-decrease"
                    onClick={() => setCount(count - 1)}
                >
                    Giảm (-1)
                </button>
                <button className="btn btn-reset" onClick={() => setCount(0)}>
                    Reset (0)
                </button>
            </div>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CounterApp />);
