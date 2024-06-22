import SidebarMenu from "./sidebarMenu/sidebarMenu";
import AddChatIcon from "@icons/addChatIcon/addChatIcon";

// styles
import "./headerMobile.scss";

const HeaderMobile = () => {
  return (
    <header className="HeaderMobile">
      <SidebarMenu />
      <AddChatIcon className="HeaderMobile__addIcon" iconColor="#7c7c7c" />
    </header>
  );
};

export default HeaderMobile;
