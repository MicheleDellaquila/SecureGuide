import ButtonIcon from "@ui/buttonIcon/buttonIcon";

// style
import "./closeMenuIcon.scss";

// CloseMenuIcon props
interface CloseMenuIconProps {
  onCloseSidebar?: () => void;
}

const CloseMenuIcon = ({ onCloseSidebar }: CloseMenuIconProps) => {
  return (
    <ButtonIcon className="CloseMenuIcon" onClick={onCloseSidebar}>
      <ButtonIcon.Icon name="Menu" size={24} />
    </ButtonIcon>
  );
};

export default CloseMenuIcon;
