import type { HTMLProps } from "react";
import LogoImage from "@/assets/icons/logo.png";

// Logo props
interface LogoProps extends HTMLProps<HTMLImageElement> {}

const Logo = ({ ...props }: LogoProps) => {
  return <img src={LogoImage} alt="robot with the security ticker" {...props} />;
};

export default Logo;
