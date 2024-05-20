import "./goBack.css";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

// components
import { ArrowLeft } from "lucide-react";

// GoBack props
interface GoBackProps {
  className?: string;
  sizeIcon?: number;
}

const GoBack = ({ className, sizeIcon = 20 }: GoBackProps) => {
  const navigate = useNavigate();

  return (
    <span className={clsx("GoBack", className)} onClick={() => navigate(-1)}>
      <ArrowLeft className="GoBack__icon" size={sizeIcon} />
    </span>
  );
};

export default GoBack;
