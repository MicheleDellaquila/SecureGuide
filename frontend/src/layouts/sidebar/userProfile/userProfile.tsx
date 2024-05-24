import Profile from "@/assets/icons/profile.png";
import useSignOut from "./hook/useSignOut";

// components
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

// styles
import "./userProfile.scss";

const UserProfile = () => {
  const { logoutUserHandler } = useSignOut();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="UserProfile">
      <Link className="UserProfile__profile" to="/home/modifica-profilo">
        <img className="UserProfile__profile-img" src={Profile} width={32} height={32} alt="profile" />
        <p className="UserProfile__profile-userName">{user.fullName}</p>
      </Link>
      <span className="UserProfile__logout" onClick={logoutUserHandler}>
        <LogOut size={20} />
      </span>
    </div>
  );
};

export default UserProfile;
