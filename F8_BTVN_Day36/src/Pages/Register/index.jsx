import { Link } from "react-router";

import styles from "./Register.module.scss";

function Register() {
    return (
        <div className={styles.register}>
            <h1>Register </h1>
            <form action="" className={styles.formRegister}>
                <label>
                    <span>Name</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Email</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" />
                </label>
                <label>
                    <span>Confirm Password</span>
                    <input type="password" />
                </label>
                <Link to="/">Register</Link>
            </form>
        </div>
    );
}

export default Register;
