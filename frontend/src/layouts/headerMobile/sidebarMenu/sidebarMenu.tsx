import { createPortal } from "react-dom";
import "./sidebarMenu.scss";
import useShowSidebar from "./hook/useShowSidebar";

// components
import Sidebar from "@/layouts/sidebar/sidebar";
import ButtonIcon from "@/components/ui/buttonIcon/buttonIcon";

const SidebarMenu = () => {
  const { showSidebar, handleShowSidebar } = useShowSidebar();

  return (
    <div className="SidebarMenu">
      <ButtonIcon onClick={handleShowSidebar}>
        <ButtonIcon.Icon name="Menu" color="#656565" size={24} />
      </ButtonIcon>
      {showSidebar &&
        createPortal(
          <div className="Backdrop">
            <Sidebar onClose={handleShowSidebar} />
          </div>,
          document.getElementById("portal")!,
        )}
    </div>
  );
};

export default SidebarMenu;
