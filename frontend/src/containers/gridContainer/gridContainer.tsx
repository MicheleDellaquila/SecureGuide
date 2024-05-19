import { ReactNode } from "react";
import "./gridContainer.css";
import clsx from "clsx";

// grid container props
interface GridContainer extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const GridContainer = ({ className, children }: GridContainer) => {
  return <div className={clsx("GridContainer", className)}>{children}</div>;
};

export default GridContainer;
