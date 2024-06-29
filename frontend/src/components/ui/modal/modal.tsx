import type { PropsWithChildren, HTMLAttributes } from "react";
import "./modal.scss";
import clsx from "clsx";
import { createPortal } from "react-dom";
import useShowModal from "./hook/useShowModal";

// components
import ModalHeader from "./modalHeader/modalHeader";
import ModalBody from "./modalBody/modalBody";

// Modal props
interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
  className?: string;
}

const Modal = ({ className, children, ...rest }: PropsWithChildren<ModalProps>) => {
  const { refModal } = useShowModal();

  return createPortal(
    <dialog ref={refModal} className={clsx("Modal", className)} {...rest}>
      <div className="Modal__inner">{children}</div>
    </dialog>,
    document.getElementById("portal")!,
  );
};

// attach all sub-components to the modal
Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;
