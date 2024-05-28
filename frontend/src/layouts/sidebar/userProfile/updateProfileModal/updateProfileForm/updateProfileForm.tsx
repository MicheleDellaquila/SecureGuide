import type { FieldErrors, UseFormClearErrors } from "react-hook-form";

// components
import { Field } from "@/components/ui/field/field";
import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";

// styles
import "./updateProfileForm.scss";
import useCloseModal from "./hook/useCloseModal";

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
      <Field errorMessages={errors?.fullName?.message ?? ""}>
        <Field.Label htmlFor="fullName" label="FullName" required />
        <Input
          className={errors?.fullName?.message && "UpdateProfileForm__input--error"}
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Mario Rossi"
          onChange={() => onClearErrors?.(["fullName"])}
        />
      </Field>
      <Field errorMessages={errors?.email?.message ?? ""}>
        <Field.Label htmlFor="email" label="Email" required />
        <Input
          className={errors?.email?.message && "UpdateProfileForm__input--error"}
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
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
