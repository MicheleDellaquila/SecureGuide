import type { FieldErrors, UseFormClearErrors } from "react-hook-form";
import useShowPassword from "@/hooks/useShowPassword";

// components
import Field from "@ui/field/field";
import Button from "@ui/button/button";
import ShowPasswordIcon from "@icons/showPasswordIcon/showPasswordIcon";
import { Link } from "react-router-dom";

// styles
import "./signInForm.scss";

// sign in props
interface SignInFormProps {
  formState?: string;
  errors?: FieldErrors<{ email: string; password: string }>;
  formResult?: any;
  onClearErrors?: UseFormClearErrors<{ email: string; password: string }>;
}

const SignInForm = ({ formState, errors, onClearErrors }: SignInFormProps) => {
  const { showPassword, handleShowPassword } = useShowPassword();

  return (
    <>
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
        <Field.Label htmlFor="password" label="Password" required />
        <div className="SignInForm__wrapper">
          <Field.Input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="********"
            isInError={!!errors?.password?.message}
            onChange={() => onClearErrors?.(["password"])}
          />
          <ShowPasswordIcon isVisible={showPassword} onChangeVisibility={handleShowPassword} />
          <Link className="SignInForm__forgetPassword" to="/reset-password">
            Password dimentica?
          </Link>
        </div>
      </Field>
      <Button className="SignInForm__button" disabled={formState === "submitting"} size="md" variant="primary">
        Accedi
      </Button>
    </>
  );
};

export default SignInForm;
