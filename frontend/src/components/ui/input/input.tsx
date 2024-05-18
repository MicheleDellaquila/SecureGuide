import "./input.css";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

// input props
interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  type: string;
  placeholder: string;
  name: string;
}

const Input = ({ className, type, placeholder, name, ...props }: InputProps) => {
  const { register } = useFormContext();

  return (
    <input className={clsx("Input", className)} type={type} placeholder={placeholder} {...register(name)} {...props} />
  );
};

export default Input;
