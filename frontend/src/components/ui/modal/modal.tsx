import type { PropsWithChildren } from "react";
import "./modal.css";
import clsx from "clsx";
import useShowModal from "./hook/useShowModal";

// Modal props
interface ModalProps {
  className?: string;
}

const Modal = ({ className, children }: PropsWithChildren<ModalProps>) => {
  const { refModal } = useShowModal();

  return (
    <dialog ref={refModal} className={clsx("Modal", className)}>
      <div className="Modal__inner">{children}</div>
    </dialog>
  );
};

export default Modal;
