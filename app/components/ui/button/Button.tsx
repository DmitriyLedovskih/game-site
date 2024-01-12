import Link from "next/link";
import { FC } from "react";
import styles from "./Button.module.scss";
import { ButtonType } from "@/app/@types/ButtonType";

const Button: FC<ButtonType> = ({
  type = "button",
  children,
  href = "#",
  disabled,
  color = "",
  className,
  style,
  Icon,
  iconPosition = "right",
  iconSize,
  iconClassName,
  iconColor,
  onMouseOver,
  onMouseLeave,
  onClick,
}) => {
  const content = () => {
    return (
      <>
        {Icon && iconPosition === "left" && (
          <Icon
            className={`${styles.icon} ${iconClassName ? iconClassName : ""}`}
            size={iconSize}
            color={iconColor}
          />
        )}
        {children}
        {Icon && iconPosition === "right" && (
          <Icon
            className={`${styles.icon} ${iconClassName ? iconClassName : ""}`}
            size={iconSize}
            color={iconColor}
          />
        )}
      </>
    );
  };

  switch (type) {
    case "link":
      return (
        <Link
          href={href}
          className={`${styles.button} ${styles[color]} ${
            className ? className : ""
          }`}
          style={style && style}
          onClick={onClick && onClick}
          onMouseOver={onMouseOver && onMouseOver}
          onMouseLeave={onMouseLeave && onMouseLeave}
        >
          {content()}
        </Link>
      );
    default:
      return (
        <button
          type={type}
          className={`${styles.button} ${styles[color]} ${
            className ? className : ""
          }`}
          style={style && style}
          onClick={onClick && onClick}
          onMouseOver={onMouseOver && onMouseOver}
          onMouseLeave={onMouseLeave && onMouseLeave}
          disabled={disabled}
        >
          {content()}
        </button>
      );
  }
};

export default Button;
