import "./sidebar.css";
import useSignOut from "./hook/useSignOut";

// icons
import Logo from "@/assets/icons/logo.png";
import Profile from "@/assets/icons/profile.png";

// components
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  const { logoutUserHandler } = useSignOut();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <aside className="Sidebar">
      <div className="Sidebar__header">
        <img className="Sidebar__logo" src={Logo} alt="lock" />
        <h4 className="Sidebar__title">Secure Guide</h4>
      </div>
      <div className="Sidebar__box"></div>
      <div className="Sidebar__footer">
        <Link className="Sidebar__profile" to="/home/modifica-profilo">
          <img className="Sidebar__profile-img" src={Profile} alt="profile" />
          <p className="Sidebar__profile-userName">{user.fullName}</p>
        </Link>
        <span className="Sidebar__logout" onClick={logoutUserHandler}>
          <LogOut size={20} />
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
