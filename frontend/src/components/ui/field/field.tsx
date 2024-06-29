import type { HTMLAttributes, PropsWithChildren } from "react";
import "./field.scss";

// components
import Label from "@ui/field/label/label";
import Input from "@ui/input/input";

// field props
interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  errorMessage?: string;
}

const Field = ({ errorMessage, children, ...rest }: PropsWithChildren<FieldProps>) => {
  return (
    <div className="Field" {...rest}>
      {children}
      {errorMessage && <p className="Field__error">{errorMessage}</p>}
    </div>
  );
};

// export all components of field
Field.Label = Label;
Field.Input = Input;

export default Field;