import type { FieldErrors, UseFormClearErrors } from "react-hook-form";
import useShowPassword from "../../hooks/useShowPassword";
import ShowPassword from "@/components/showPassword/showPassword";

// components
import { Field } from "@/components/ui/field/field";
import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";

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
      <Field errorMessages={errors?.fullName?.message ?? ""}>
        <Field.Label htmlFor="fullName" label="FullName" required />
        <Input
          className={errors?.fullName?.message && "SignUpForm__input--error"}
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
          className={errors?.email?.message && "SignUpForm__input--error"}
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={() => onClearErrors?.(["email"])}
        />
      </Field>
      <Field errorMessages={errors?.password?.message ?? ""}>
        <Field.Label label="Password" required />
        <div className="SignUpForm__wrapper">
          <Input
            className={errors?.password?.message && "SignUpForm__input--error"}
            type={showPassword ? "text" : "password"}
            placeholder="********"
            name="password"
            onChange={() => onClearErrors?.(["password"])}
          />
          <ShowPassword isVisible={showPassword} onChangeVisibility={handleShowPassword} />
        </div>
      </Field>
      <Button disabled={formState === "submitting"} size="md" variant="primary">
        Iscriviti
      </Button>
    </>
  );
};

export default SignUpForm;
