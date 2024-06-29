import type { HTMLAttributes } from "react";
import "./spinner.scss";
import clsx from "clsx";

// Spinner props
interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size: "sm" | "md" | "lg";
}

const Spinner = ({ size, ...rest }: SpinnerProps) => {
  return <div className={clsx("Spinner", `Spinner--${size}`)} {...rest} />;
};

export default Spinner;
