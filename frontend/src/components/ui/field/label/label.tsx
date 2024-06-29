import type { HTMLAttributes } from "react";
import "./label.scss";

// label props
interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  label: string;
  required?: boolean;
}

// label component
const Label = ({ htmlFor, label, required, ...rest }: LabelProps) => {
  return (
    <label className="Label" htmlFor={htmlFor} {...rest}>
      {label}
      {required && <span className="Label__required">*</span>}
    </label>
  );
};

export default Label;
