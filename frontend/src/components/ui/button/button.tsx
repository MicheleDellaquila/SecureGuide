import { ReactNode } from "react";
import "./button.css";

// button props
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({ disabled = false, size, variant, onClick, children, ...rest }: ButtonProps) => {
  const buttonStyle = `Btn Btn--${variant} Btn--${size}`;

  return (
    <button className={buttonStyle} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
