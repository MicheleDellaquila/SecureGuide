import { type HTMLProps, forwardRef } from "react";
import clsx from "clsx";

// components
import Input from "@/components/ui/input/input";

// styles
import "./inputCode.css";

// input code props
interface InputCodeProps extends HTMLProps<HTMLInputElement> {
  htmlFor: string;
  className?: string;
}

const InputCode = forwardRef<HTMLInputElement, InputCodeProps>(({ htmlFor, className, ...rest }, ref) => {
  return (
    <label className={clsx("InputCode", className)} htmlFor={htmlFor}>
      <Input ref={ref} className="InputCode__input" type="tel" name={htmlFor} id={htmlFor} maxLength={1} {...rest} />
    </label>
  );
});

export default InputCode;
