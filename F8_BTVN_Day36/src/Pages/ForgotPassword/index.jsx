import { Link } from "react-router";
import React from "react";
import styles from "./ForgotPassword.module.scss";

function ForgotPassword() {
    return (
        <div className={styles.forgotPassword}>
            <h1>Forgot Password</h1>
            <form action="" className={styles.formForgotPassword}>
                <label>
                    <span>New Password</span>
                    <input type="password" />
                </label>
                <label>
                    <span>Confirm Password</span>
                    <input type="password" />
                </label>
                <Link to="/auth/login">Reset Password</Link>
            </form>
        </div>
    );
}

export default ForgotPassword;
