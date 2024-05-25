import { createPortal } from "react-dom";
import "./sidebarMenu.scss";
import useShowSidebar from "./hook/useShowSidebar";

// components
import { Menu } from "lucide-react";
import Sidebar from "@/layouts/sidebar/sidebar";

const SidebarMenu = () => {
  const { showSidebar, handleShowSidebar } = useShowSidebar();

  return (
    <div className="SidebarMenu">
      <div className="SidebarMenu__inner" onClick={handleShowSidebar}>
        <Menu size={20} />
      </div>
      {showSidebar &&
        createPortal(
          <div className="Backdrop">
            <div className="Sidebar__wrapper">
              <Sidebar onClose={handleShowSidebar} />
            </div>
          </div>,
          document.getElementById("portal")!,
        )}
    </div>
  );
};

export default SidebarMenu;
