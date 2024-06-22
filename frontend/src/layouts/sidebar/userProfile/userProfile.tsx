import Profile from "@/assets/icons/profile.png";
import useShowModal from "./hooks/useShowModal";
import useSignOut from "./hooks/useSignOut";

// components
import Modal from "@ui/modal/modal";
import UpdateProfileModal from "./updateProfileModal/updateProfileModal";
import LogOutIcon from "@icons/logOutIcon/logOutIcon";

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
        <LogOutIcon onLogOut={logoutUserHandler} />
      </div>
    </>
  );
};

export default UserProfile;
