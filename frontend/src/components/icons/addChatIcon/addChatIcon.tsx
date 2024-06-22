import "./addChatIcon.scss";
import clsx from "clsx";
import useNewChat from "./hook/useNewChat";

// components
import ButtonIcon from "@ui/buttonIcon/buttonIcon";

// AddChat props
interface AddChatIconProps {
  className?: string;
  iconColor: string;
}

const AddChatIcon = ({ className, iconColor }: AddChatIconProps) => {
  const { addNewChat } = useNewChat();

  return (
    <ButtonIcon className={clsx("AddChatIcon", className)} onClick={addNewChat}>
      <ButtonIcon.Icon name="SquarePen" color={iconColor} size={24} />
    </ButtonIcon>
  );
};

export default AddChatIcon;
