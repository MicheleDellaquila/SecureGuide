import "./hamburgerMenu.css";
import { Menu } from "lucide-react";

// HamburgerMenu props
interface HamburgerMenuProps {
  onHandleSidebarVisibility: () => void;
}

const HamburgerMenu = ({ onHandleSidebarVisibility }: HamburgerMenuProps) => {
  return (
    <div className="HamburgerMenu">
      <div className="HamburgerMenu__inner" onClick={onHandleSidebarVisibility}>
        <Menu size={20} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
