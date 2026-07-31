import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.module.scss";

function Button({
    primary = false,
    rounded = false,
    bordered = false,
    disabled = false,
    loading = false,
    size = "medium",
    href = "",
    children,
    ...PassProp
}) {
    const className = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
        [styles.disabled]: disabled,
        [styles.loading]: loading,
        [styles[size]]: size,
    });

    const Component = href ? "a" : "button";
    return (
        <Component {...PassProp} href={href} className={clsx(className)}>
            {loading && <span className={clsx(styles.spinner)}></span>}
            <span className={clsx(styles.text)}>{children}</span>
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    size: PropTypes.string,
    href: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;
