import { ReactNode } from "react";

export type ButtonType = {
  type?: "button" | "submit" | "link";
  children?: ReactNode;
  href?: string;
  disabled?: boolean;
  color?: "primary" | "primary-outline" | "outline" | "transparent";
  className?: string;
  style?: any;
  Icon?: any;
  iconPosition?: string;
  iconSize?: number;
  iconClassName?: string;
  iconColor?: string;
  onMouseOver?: any;
  onMouseLeave?: any;
  onClick?: any;
};
