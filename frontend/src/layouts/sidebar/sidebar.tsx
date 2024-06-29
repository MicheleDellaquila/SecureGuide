import "./sidebar.scss";
import useWindowSize from "@/hooks/useWindowSize";

// components
import Logo from "@ui/logo/logo";
import AddChatIcon from "@icons/addChatIcon/addChatIcon";
import CloseIcon from "@icons/closeIcon/closeIcon";
import Chats from "@/layouts/sidebar/chats/chats";
import UserProfile from "./userProfile/userProfile";

// Sidebar component
interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const { width } = useWindowSize();

  return (
    <aside className="Sidebar">
      <header className="Sidebar__header">
        {width >= 1024 && <Logo width={48} height={48} />}
        {width < 1024 && <CloseIcon className="Sidebar__header-closeIcon" onClick={onClose} colorIcon="#6538ef" />}
        <AddChatIcon iconColor="#6538ef" />
      </header>
      <div className="Sidebar__chats">
        <Chats isMobile={width < 1024} onCloseSidebar={onClose} />
      </div>
      <div className="Sidebar__footer">
        <UserProfile />
      </div>
    </aside>
  );
};

export default Sidebar;
