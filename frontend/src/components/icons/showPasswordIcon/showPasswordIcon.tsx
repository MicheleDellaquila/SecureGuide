import ButtonIcon from "@ui/buttonIcon/buttonIcon";

// style
import "./showPasswordIcon.scss";

// show password props
interface ShowPasswordIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  isVisible: boolean;
  onChangeVisibility: () => void;
}

const ShowPasswordIcon = ({ isVisible, onChangeVisibility }: ShowPasswordIconProps) => {
  return (
    <ButtonIcon className="ShowPasswordIcon" onClick={onChangeVisibility}>
      <ButtonIcon.Icon name={isVisible ? "Eye" : "EyeOff"} size={20} />
    </ButtonIcon>
  );
};

export default ShowPasswordIcon;
