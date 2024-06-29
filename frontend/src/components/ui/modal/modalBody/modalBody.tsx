import type { PropsWithChildren, HTMLAttributes } from "react";
import "./modalBody.scss";
import clsx from "clsx";

// ModalBody props
interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ModalBody = ({ className, children, ...props }: PropsWithChildren<ModalBodyProps>) => {
  return (
    <div className={clsx("ModalBody", className)} {...props}>
      {children}
    </div>
  );
};

export default ModalBody;
