import ButtonIcon from "@ui/buttonIcon/buttonIcon";

// style
import "./logOutIcon.scss";

// components
interface LogOutIconProps {
  onLogOut: () => void;
}

const LogOutIcon = ({ onLogOut }: LogOutIconProps) => {
  return (
    <ButtonIcon className="LogOutIcon" onClick={onLogOut}>
      <ButtonIcon.Icon name="LogOut" color="#6538ef" size={20} />
    </ButtonIcon>
  );
};

export default LogOutIcon;
