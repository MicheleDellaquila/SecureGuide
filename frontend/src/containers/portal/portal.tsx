import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

// portal props
interface PortalProps {
  show: boolean;
  container: HTMLElement;
  key?: string;
}

const Portal = ({ show, container, key, children }: PropsWithChildren<PortalProps>) => {
  return createPortal(show && children, container, key);
};

export default Portal;
