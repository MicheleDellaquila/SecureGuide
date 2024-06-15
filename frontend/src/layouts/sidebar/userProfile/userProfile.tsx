import Profile from "@/assets/icons/profile.png";
import useShowModal from "./hooks/useShowModal";
import useSignOut from "./hooks/useSignOut";

// components
import Modal from "@/components/ui/modal/modal";
import UpdateProfileModal from "./updateProfileModal/updateProfileModal";
import { LogOut } from "lucide-react";

// styles
import "./userProfile.scss";

const UserProfile = () => {
  const { showModal, handleModal } = useShowModal();
  const { logoutUserHandler } = useSignOut();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <>
      {showModal && (
        <Modal>
          <UpdateProfileModal onClose={handleModal} />
        </Modal>
      )}
      <div className="UserProfile">
        <div className="UserProfile__profile" onClick={handleModal}>
          <img className="UserProfile__profile-img" src={Profile} width={32} height={32} alt="profile" />
          <p className="UserProfile__profile-userName">{user.fullName}</p>
        </div>
        <span role="button" className="UserProfile__logout" onClick={logoutUserHandler} aria-label="Logout">
          <LogOut size={20} />
        </span>
      </div>
    </>
  );
};

export default UserProfile;
