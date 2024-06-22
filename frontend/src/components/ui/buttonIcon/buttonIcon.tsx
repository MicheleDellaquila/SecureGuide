import { HTMLAttributes, type PropsWithChildren } from "react";
import "./buttonIcon.scss";
import clsx from "clsx";

// components
import Icon from "@/components/ui/icon/icon";

// button icon props
interface ButtonIconProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  onClick?: () => void;
}

const ButtonIcon = ({ className, onClick, children, ...props }: PropsWithChildren<ButtonIconProps>) => {
  return (
    <span className={clsx("ButtonIcon", className)} onClick={onClick} {...props}>
      {children}
    </span>
  );
};

// attach all sub components to ButtonIcon
ButtonIcon.Icon = Icon;

export default ButtonIcon;
