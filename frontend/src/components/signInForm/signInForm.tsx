import type { FieldErrors, UseFormClearErrors } from "react-hook-form";
import useShowPassword from "@/hooks/useShowPassword";
import useShowModal from "@/hooks/useShowModalVerifyCode";

// components
import { Field } from "@/components/ui/field/field";
import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import ShowPassword from "@/components/showPassword/showPassword";
import Portal from "@/containers/portal/portal";
import VerifyCodeModal from "@/components/verifyCodeModal/verifyCodeModal";

// styles
import "./signInForm.css";

// sign in props
interface SignInFormProps {
  formState?: string;
  errors?: FieldErrors<{ email: string; password: string }>;
  formResult?: any;
  onClearErrors?: UseFormClearErrors<{ email: string; password: string }>;
}

const SignInForm = ({ formState, errors, formResult, onClearErrors }: SignInFormProps) => {
  const { showPassword, handleShowPassword } = useShowPassword();
  const { showModal, closeModal } = useShowModal(formResult);

  return (
    <>
      <Portal show={showModal} container={document.getElementById("modal")!}>
        <VerifyCodeModal onClose={closeModal} />
      </Portal>
      <Field errorMessages={errors?.email?.message ?? ""}>
        <Field.Label htmlFor="email" label="Email" required />
        <Input
          className={errors?.email?.message && "SignInForm__input--error"}
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={() => onClearErrors?.(["email"])}
        />
      </Field>
      <Field errorMessages={errors?.password?.message ?? ""}>
        <Field.Label htmlFor="password" label="Password" required />
        <div className="SignInForm__wrapper">
          <Input
            className={errors?.password?.message && "SignInForm__input--error"}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="********"
            onChange={() => onClearErrors?.(["password"])}
          />
          <ShowPassword isVisible={showPassword} onChangeVisibility={handleShowPassword} />
        </div>
      </Field>
      <Button disabled={formState === "submitting"} size="md" variant="primary">
        Accedi
      </Button>
    </>
  );
};

export default SignInForm;
