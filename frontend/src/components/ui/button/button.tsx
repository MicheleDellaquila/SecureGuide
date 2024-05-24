import type { PropsWithChildren, ButtonHTMLAttributes } from "react";
import "./button.scss";
import clsx from "clsx";

// button props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
}

const Button = ({ className, disabled = false, size, variant, onClick, children, ...rest }: PropsWithChildren<ButtonProps>) => {
  const buttonStyle = `Btn Btn--${variant} Btn--${size}`;

  return (
    <button className={clsx(buttonStyle, className)} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
