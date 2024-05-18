import { ReactNode } from "react";
import "./field.css";

// label props
interface FieldLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
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
interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  errorMessages?: string;
}

export const Field = ({ children, errorMessages }: FieldProps) => {
  return (
    <div className="Field">
      {children}
      {errorMessages && <p className="Field__error">{errorMessages}</p>}
    </div>
  );
};

Field.Label = FieldLabel;
