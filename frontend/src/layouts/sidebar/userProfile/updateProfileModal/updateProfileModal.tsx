import useUpdateProfile from "./hook/useUpdateProfile";
import updateProfileSchema from "./updateProfileZodSchema";

// components
import Modal from "@ui/modal/modal";
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
    <Modal>
      <Modal.Header
        className="UpdateProfileModal__header"
        title="Modifica Profilo"
        onClose={onClose}
        colorIcon="#7c7c7c"
        sizeIcon={20}
      />
      <Modal.Body className="UpdateProfileModal__body">
        <Form
          key="updateProfileForm"
          className="UpdateProfileModal__form"
          formValues={user}
          formSchema={updateProfileSchema}
          onSubmitForm={updateUser}
        >
          <UpdateProfileForm onClose={onClose} />
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateProfileModal;
