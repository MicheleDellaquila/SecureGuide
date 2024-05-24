import type { PropsWithChildren } from "react";
import clsx from "clsx";

// container props
interface Container extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  full: boolean;
}

const Container = ({ className, full, children }: PropsWithChildren<Container>) => {
  const containerClass = full ? "container__fluid" : "container";

  return <div className={clsx(containerClass, className)}>{children}</div>;
};

export default Container;
