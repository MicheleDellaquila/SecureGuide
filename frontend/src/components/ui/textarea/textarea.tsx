import "./textarea.scss";
import clsx from "clsx";
import { forwardRef, type HTMLProps } from "react";
import { useFormContext } from "react-hook-form";
import getRef from "@/utils/refs";

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
        ref={refEl => getRef(ref, refEl as HTMLTextAreaElement, refInput)}
        className={clsx("Textare", className)}
        placeholder={placeholder}
        {...rest}
        {...props}
      />
    );
  },
);

export default Textarea;
