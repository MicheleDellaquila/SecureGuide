import "./sidebar.scss";
import useNewChat from "./hook/useNewChat";

// icons
import Logo from "@/assets/icons/logo.png";
import { SquarePen } from "lucide-react";

// components
import Chats from "@/components/chats/chats";
import UserProfile from "./userProfile/userProfile";

const Sidebar = () => {
  const { addNewChat } = useNewChat();

  return (
    <aside className="Sidebar">
      <div className="Sidebar__header">
        <div className="Sidebar__box">
          <img className="Sidebar__logo" src={Logo} alt="lock" />
          <h4 className="Sidebar__title">Secure Guide</h4>
        </div>
        <span className="Sidebar__addIcon">
          <SquarePen onClick={addNewChat} />
        </span>
      </div>
      <div className="Sidebar__chats">
        <Chats />
      </div>
      <div className="Sidebar__footer">
        <UserProfile />
      </div>
    </aside>
  );
};

export default Sidebar;
