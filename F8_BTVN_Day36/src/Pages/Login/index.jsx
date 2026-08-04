import { Link } from "react-router";

import styles from "./Login.module.scss";

function Login() {
    return (
        <div className={styles.login}>
            <h1>Login </h1>
            <form action="" className={styles.formLogin}>
                <label>
                    <span>Email</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" />
                </label>
                <Link to="/">Login</Link>
            </form>
        </div>
    );
}

export default Login;
