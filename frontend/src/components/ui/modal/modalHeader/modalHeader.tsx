import CloseIcon from "@icons/closeIcon/closeIcon";
import "./modalHeader.scss";
import type { PropsWithChildren } from "react";

// ModalHeader props
interface ModalHeaderProps {
  className?: string;
  title: string;
}

const ModalHeader = ({ className, title }: PropsWithChildren<ModalHeaderProps>) => {
  return (
    <header>
      <div>
        <h3 className={`ModalHeader__title ${className}`}>{title}</h3>
        <CloseIcon className="ModalHeader__closeIcon" />
      </div>
    </header>
  );
};

export default ModalHeader;
