import type { PropsWithChildren, HTMLAttributes } from "react";
import clsx from "clsx";

// components
import CloseIcon from "@icons/closeIcon/closeIcon";

// styles
import "./modalHeader.scss";

// ModalHeader props
interface ModalHeaderProps extends HTMLAttributes<HTMLHeadElement> {
  className?: string;
  title: string;
  colorIcon: string;
  sizeIcon?: number;
  onClose?: () => void;
}

const ModalHeader = ({
  className,
  title,
  colorIcon,
  sizeIcon = 24,
  onClose,
  children,
  ...rest
}: PropsWithChildren<ModalHeaderProps>) => {
  return (
    <header className={clsx("ModalHeader", className)} {...rest}>
      <div className="ModalHeader__box">
        <h3 className="ModalHeader__box-title">{title}</h3>
        <CloseIcon className="ModalHeader__box-closeIcon" colorIcon={colorIcon} onClick={onClose} sizeIcon={sizeIcon} />
      </div>
      {children}
    </header>
  );
};

export default ModalHeader;
