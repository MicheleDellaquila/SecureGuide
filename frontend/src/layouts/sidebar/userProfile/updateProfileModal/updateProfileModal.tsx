import useUpdateProfile from "./hook/useUpdateProfile";
import { updateProfileSchema } from "@/utils/zodSchema";

// components
import { X } from "lucide-react";
import Form from "@/components/ui/form/form";
import UpdateProfileForm from "./updateProfileForm/updateProfileForm";

// styles
import "./updateProfileModal.scss";

// UpdateProfileModal props
interface UpdateProfileModalProps {
  onClose: () => void;
}

const UpdateProfileModal = ({ onClose }: UpdateProfileModalProps) => {
  const { user, updateUser } = useUpdateProfile();

  return (
    <div className="UpdateProfileModal">
      <div className="UpdateProfileModal__header">
        <h3 className="UpdateProfileModal__header-title">Modifica Profilo</h3>
        <span className="UpdateProfileModal__header-closeIcon" onClick={onClose}>
          <X />
        </span>
      </div>
      <div className="UpdateProfileModal__body">
        <Form
          key="updateProfileForm"
          className="UpdateProfileModal__form"
          formValues={user}
          formSchema={updateProfileSchema}
          onSubmitForm={updateUser}
        >
          <UpdateProfileForm onClose={onClose} />
        </Form>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
