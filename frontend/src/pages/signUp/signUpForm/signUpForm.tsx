import type { FieldErrors, UseFormClearErrors } from "react-hook-form";
import useShowPassword from "@/hooks/useShowPassword";

// components
import { Field } from "@ui/field/field";
import ShowPasswordIcon from "@icons/showPasswordIcon/showPasswordIcon";
import Button from "@ui/button/button";

// styles
import "./signUpForm.scss";

// sign up props
interface SignUpFormProps {
  formState?: string;
  errors?: FieldErrors<{ fullName: string; email: string; password: string }>;
  formResult?: any;
  onClearErrors?: UseFormClearErrors<{ fullName: string; email: string; password: string }>;
}

const SignUpForm = ({ formState, errors, onClearErrors }: SignUpFormProps) => {
  const { showPassword, handleShowPassword } = useShowPassword();

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
      <Field errorMessage={errors?.password?.message ?? ""}>
        <Field.Label label="Password" required />
        <div className="SignUpForm__wrapper">
          <Field.Input
            type={showPassword ? "text" : "password"}
            placeholder="********"
            name="password"
            isInError={!!errors?.password?.message}
            onChange={() => onClearErrors?.(["password"])}
          />
          <ShowPasswordIcon isVisible={showPassword} onChangeVisibility={handleShowPassword} />
        </div>
      </Field>
      <Button disabled={formState === "submitting"} size="md" variant="primary">
        Iscriviti
      </Button>
    </>
  );
};

export default SignUpForm;
