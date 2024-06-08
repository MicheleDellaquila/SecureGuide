import type { HTMLProps, PropsWithChildren } from "react";
import "./field.scss";

// label props
interface LabelProps extends HTMLProps<HTMLLabelElement> {
  htmlFor?: string;
  label: string;
  required?: boolean;
}

// label component
const Label = ({ htmlFor, label, required }: LabelProps) => {
  return (
    <label className="Label" htmlFor={htmlFor}>
      {label}
      {required && <span className="Label__required">*</span>}
    </label>
  );
};

// field props
interface FieldProps extends HTMLProps<HTMLDivElement> {
  errorMessage?: string;
}

export const Field = ({ errorMessage, children }: PropsWithChildren<FieldProps>) => {
  return (
    <div className="Field">
      {children}
      {errorMessage && <p className="Field__error">{errorMessage}</p>}
    </div>
  );
};

// export all components of field
Field.Label = Label;
