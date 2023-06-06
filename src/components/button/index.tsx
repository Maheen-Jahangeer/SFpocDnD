import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./styles.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant?: "primary" | "secondary";
}

const Button = ({ label, ...props }: ButtonProps) => (
    <button
        className={classNames(
            styles.button,
            props.variant === "secondary" && styles.buttonSecondary
        )}
        {...props}
    >
        {label}
    </button>
);

export default Button;
