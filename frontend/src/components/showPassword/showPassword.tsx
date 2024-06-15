import "./showPassword.scss";
import { Eye, EyeOff } from "lucide-react";

// show password props
interface ShowPasswordProps extends React.HTMLAttributes<HTMLSpanElement> {
  isVisible: boolean;
  onChangeVisibility: () => void;
}

const ShowPassword = ({ isVisible, onChangeVisibility }: ShowPasswordProps) => {
  return (
    <span
      role="button"
      className="ShowPassword"
      onClick={onChangeVisibility}
      aria-label={isVisible ? "Nascondi Password" : "Mostra Password"}
    >
      {isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
    </span>
  );
};

export default ShowPassword;
