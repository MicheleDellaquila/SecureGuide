import { type HTMLProps, forwardRef } from "react";
import "./input.scss";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import getRef from "@/utils/refs";

// input props
interface InputProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  type: string;
  placeholder?: string;
  name: string;
  isInError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, placeholder, name, isInError, ...props }, ref) => {
  const { register } = useFormContext();
  const { ref: refInput, ...rest } = register(name);

  return (
    <input
      ref={refEl => getRef(ref, refEl as HTMLInputElement, refInput)}
      className={clsx("Input", className, isInError && "Input--error")}
      type={type}
      placeholder={placeholder}
      {...rest}
      {...props}
    />
  );
});

export default Input;
