import useGetUser from "./hook/useUpdateProfile";
import { updateProfileSchema } from "@/utils/zodSchema";

// components
import GoBack from "@/components/goBack/goBack";
import Card from "@/components/ui/card/card";
import UpdateProfileForm from "@/components/updateProfileForm/updateProfileForm";
import Form from "@/components/ui/form/form";

// styles
import "./updateProfile.css";

export const UpdateProfile = () => {
  const { user, updateUser } = useGetUser();

  return (
    <div className="UpdateProfile">
      <Card className="UpdateProfile__card">
        <GoBack className="UpdateProfile__card-goBack" />
        <h1 className="UpdateProfile__title">Modifica Profilo</h1>
        <Form formValues={user} formSchema={updateProfileSchema} onSubmitForm={updateUser}>
          <UpdateProfileForm />
        </Form>
      </Card>
    </div>
  );
};
