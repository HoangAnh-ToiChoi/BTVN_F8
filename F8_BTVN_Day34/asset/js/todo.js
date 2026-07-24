let uniqId = 0;
function TodoApp() {
    const [inputValue, setInputValue] = React.useState("");
    const [todos, setTodos] = React.useState([]);

    const totalCount = todos.length;
    const completeTask = todos.filter((todo) => todo.completed).length;
    const remainingTask = totalCount - completeTask;

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                { id: ++uniqId, text: inputValue, completed: false },
            ]);
            setInputValue("");
        }
    };

    const handleToggleTodo = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const handleDeleteTask = (id) => {
        const newTodo = todos.filter((todo) => todo.id !== id);
        setTodos(newTodo);
    };

    return (
        <div className="todo-card">
            <h1 className="title">Todo List App</h1>

            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Nhập task mới..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-add">
                    Thêm
                </button>
            </form>

            <div className="stats-bar">
                <span>
                    Tổng: <strong>{totalCount}</strong> task(s)
                </span>
                <span>
                    Hoàn thành: <strong>{completeTask}</strong> task(s)
                </span>
                <span>
                    Còn lại: <strong>{remainingTask}</strong> task(s)
                </span>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li
                        className={`todo-item ${todo.completed ? "completed" : ""}`}
                        key={todo.id}
                    >
                        <label className="todo-content">
                            <input
                                type="checkbox"
                                className="todo-checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggleTodo(todo.id)}
                            />
                            <span className="todo-text">{todo.text}</span>
                        </label>
                        <button
                            className="btn btn-delete"
                            onClick={() => handleDeleteTask(todo.id)}
                        >
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoApp />);
