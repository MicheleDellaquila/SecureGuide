import type { FieldErrors, UseFormClearErrors } from "react-hook-form";
import useCloseModal from "./hook/useCloseModal";

// components
import Field from "@/components/ui/field/field";
import Button from "@/components/ui/button/button";

// update profile props
interface UpdateProfileFormProps {
  formState?: string;
  errors?: FieldErrors<{ fullName: string; email: string; password: string }>;
  formResult?: { isSuccessful: boolean } | null;
  onClearErrors?: UseFormClearErrors<{ fullName: string; email: string; password: string }>;
  onClose: () => void;
}

const UpdateProfileForm = ({ formState, formResult, errors, onClearErrors, onClose }: UpdateProfileFormProps) => {
  useCloseModal(formResult, onClose);

  return (
    <>
      <Field errorMessage={errors?.fullName?.message ?? ""}>
        <Field.Label htmlFor="fullName" label="FullName" required />
        <Field.Input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Mario Rossi"
          isInError={!!errors?.fullName?.message}
          onChange={() => onClearErrors?.(["fullName"])}
        />
      </Field>
      <Field errorMessage={errors?.email?.message ?? ""}>
        <Field.Label htmlFor="email" label="Email" required />
        <Field.Input
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          isInError={!!errors?.email?.message}
          onChange={() => onClearErrors?.(["email"])}
        />
      </Field>
      <Button disabled={formState === "submitting"} size="md" variant="primary">
        Aggiorna Profilo
      </Button>
    </>
  );
};

export default UpdateProfileForm;
