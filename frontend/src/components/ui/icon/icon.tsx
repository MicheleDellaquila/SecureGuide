import { ElementType, type HTMLAttributes } from "react";
import * as Icons from "lucide-react";

// Icon props
interface IconProps {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
}

const Icon = ({ name, size = 24, color, ...rest }: IconProps) => {
  const IconComponent = Icons[name] as ElementType;

  // return error if icon not found
  if (!IconComponent) throw new Error(`Icon '${name}' not found`);

  return <IconComponent size={size} color={color} {...rest} />;
};

export default Icon;
