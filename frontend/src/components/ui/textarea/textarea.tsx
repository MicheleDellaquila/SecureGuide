import "./textarea.css";
import clsx from "clsx";
import { forwardRef, type HTMLProps } from "react";
import { useFormContext } from "react-hook-form";

// textare props
interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
  className?: string;
  placeholder?: string;
  name: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, type, placeholder, name, ...props }, ref) => {
    const { register } = useFormContext();
    const { ref: refInput, ...rest } = register(name);

    return (
      <textarea
        className={clsx("Textare", className)}
        ref={ref}
        placeholder={placeholder}
        {...rest}
        {...props}
      />
    );
  },
);

export default Textarea;
