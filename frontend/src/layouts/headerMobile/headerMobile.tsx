import SidebarMenu from "./sidebarMenu/sidebarMenu";
import AddChat from "@/components/addChat/addChat";

// styles
import "./headerMobile.scss";

const HeaderMobile = () => {
  return (
    <header className="HeaderMobile">
      <SidebarMenu />
      <AddChat className="HeaderMobile__addIcon" />
    </header>
  );
};

export default HeaderMobile;
