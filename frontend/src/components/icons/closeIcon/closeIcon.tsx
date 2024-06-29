import type { HTMLAttributes } from "react";
import clsx from "clsx";

// components
import ButtonIcon from "@ui/buttonIcon/buttonIcon";

// style
import "./closeIcon.scss";

// CloseIcon props
interface CloseIconProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  colorIcon: string;
  sizeIcon?: number;
  onClick?: () => void;
}

const CloseIcon = ({ className, colorIcon, sizeIcon = 24, onClick }: CloseIconProps) => {
  return (
    <ButtonIcon className={clsx("CloseIcon", className)} onClick={onClick}>
      <ButtonIcon.Icon name="X" color={colorIcon} size={sizeIcon} />
    </ButtonIcon>
  );
};

export default CloseIcon;
