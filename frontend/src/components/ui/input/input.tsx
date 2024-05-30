import { type HTMLProps, forwardRef } from "react";
import "./input.scss";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import getInputRef from "@/utils/getInputRef";

// input props
interface InputProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  type: string;
  placeholder?: string;
  name: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, placeholder, name, ...props }, ref) => {
  const { register } = useFormContext();
  const { ref: refInput, ...rest } = register(name);

  return (
    <input
      ref={refEl => getInputRef(ref, refEl as HTMLInputElement, refInput)}
      className={clsx("Input", className)}
      type={type}
      placeholder={placeholder}
      {...rest}
      {...props}
    />
  );
});

export default Input;
