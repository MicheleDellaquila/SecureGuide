import { FieldErrors, UseFormClearErrors } from "react-hook-form";
import useShowPassword from "../../hooks/useShowPassword";
import ShowPassword from "@/components/showPassword/showPassword";
import useShowModal from "@/hooks/useShowModalVerifyCode";

import { Field } from "@/components/ui/field/field";
import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import Portal from "@/containers/portal/portal";
import VerifyCodeModal from "@/components/verifyCodeModal/verifyCodeModal";

// styles
import "./signUpForm.css";

// sign up props
interface SignUpFormProps {
  formState?: string;
  errors?: FieldErrors<{ fullName: string; email: string; password: string }>;
  formResult?: any;
  onClearErrors?: UseFormClearErrors<{ fullName: string; email: string; password: string }>;
}

const SignInForm = ({ formState, errors, formResult, onClearErrors }: SignUpFormProps) => {
  const { showPassword, handleShowPassword } = useShowPassword();
  const { showModal, closeModal } = useShowModal(formResult);

  return (
    <>
      <Portal show={showModal} container={document.getElementById("modal")!}>
        <VerifyCodeModal onClose={closeModal} />
      </Portal>
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
        <Field.Label htmlFor="password" label="Password" required />
        <div className="SignUpForm__wrapper">
          <Input
            className={errors?.password?.message && "SignUpForm__input--error"}
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
        Iscriviti
      </Button>
    </>
  );
};

export default SignInForm;
