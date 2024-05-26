import "./sidebar.scss";

// icons
import Logo from "@/assets/icons/logo.png";
import { Menu } from "lucide-react";

// components
import Chats from "@/layouts/sidebar/chats/chats";
import UserProfile from "./userProfile/userProfile";
import useWindowSize from "@/hooks/useWindowSize";
import AddChat from "@/components/addChat/addChat";

// Sidebar component
interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const { width } = useWindowSize();

  return (
    <aside className="Sidebar">
      <div className="Sidebar__header">
        {width >= 1024 && (
          <div className="Sidebar__box">
            <img className="Sidebar__logo" src={Logo} alt="lock" />
            <h4 className="Sidebar__title">Secure Guide</h4>
          </div>
        )}
        {width < 1024 && (
          <span className="Sidebar__sidebarMenu" onClick={onClose}>
            <Menu />
          </span>
        )}
        <AddChat />
      </div>
      <div className="Sidebar__chats">
        <Chats isMobile={width < 1024} onClose={onClose} />
      </div>
      <div className="Sidebar__footer">
        <UserProfile />
      </div>
    </aside>
  );
};

export default Sidebar;
