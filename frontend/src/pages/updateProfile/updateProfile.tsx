// components
import GoBack from "@/components/goBack/goBack";
import Card from "@/components/ui/card/card";
import UpdateProfileForm from "@/components/updateProfileForm/updateProfileForm";
import Form from "@/components/ui/form/form";

// styles
import "./updateProfile.css";

export const UpdateProfile = () => {
  return (
    <div className="UpdateProfile">
      <Card className="UpdateProfile__card">
        <div className="UpdateProfile__card-goBack">
          <GoBack className="UpdateProfile__goBack" />
        </div>
        <h2>Modifica Profilo</h2>
        <Form formValues={{}} onSubmitForm={() => {}}>
          <UpdateProfileForm />
        </Form>
      </Card>
    </div>
  );
};
