import type { HTMLProps, PropsWithChildren } from "react";
import "./field.css";

// label props
interface FieldLabelProps extends HTMLProps<HTMLLabelElement> {
  htmlFor?: string;
  label: string;
  required?: boolean;
}

// label component
const FieldLabel = ({ htmlFor, label, required }: FieldLabelProps) => {
  return (
    <label className="FieldLabel" htmlFor={htmlFor}>
      {label}
      {required && <span className="FieldLabel__required">*</span>}
    </label>
  );
};

// field props
interface FieldProps extends HTMLProps<HTMLDivElement> {
  errorMessages?: string;
}

export const Field = ({ errorMessages, children }: PropsWithChildren<FieldProps>) => {
  return (
    <div className="Field">
      {children}
      {errorMessages && <p className="Field__error">{errorMessages}</p>}
    </div>
  );
};

// export all components of field
Field.Label = FieldLabel;
