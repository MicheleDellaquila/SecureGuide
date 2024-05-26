import type { PropsWithChildren } from "react";
import "./modal.scss";
import clsx from "clsx";
import useShowModal from "./hook/useShowModal";
import { createPortal } from "react-dom";

// Modal props
interface ModalProps {
  className?: string;
}

const Modal = ({ className, children }: PropsWithChildren<ModalProps>) => {
  const { refModal } = useShowModal();

  return createPortal(
    <dialog ref={refModal} className={clsx("Modal", className)}>
      <div className="Modal__inner">{children}</div>
    </dialog>,
    document.getElementById("portal")!,
  );
};

export default Modal;
