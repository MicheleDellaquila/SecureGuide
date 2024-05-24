import "./spinner.scss";
import clsx from "clsx";

// Spinner props
interface SpinnerProps {
  size: "sm" | "md" | "lg";
}

const Spinner = ({ size }: SpinnerProps) => {
  return <div className={clsx("Spinner", `Spinner--${size}`)} />;
};

export default Spinner;
