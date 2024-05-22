// components
import FormCode from "./formCode/formCode";
import Button from "@/components/ui/button/button";

// styles
import "./verifyCodeForm.css";

// verify code form props
interface VerifyCodeFormProps {
  isInVerification: boolean;
  onSubmit: () => void;
}

const VerifyCodeForm = ({ isInVerification, onSubmit }: VerifyCodeFormProps) => {
  return (
    <div className="VerifyCodeForm">
      <div className="VerifyCodeForm__inputs">
        <FormCode onSubmit={onSubmit} />
      </div>
      <Button className="VerifyCodeForm__button" disabled={isInVerification} size="md" variant="primary">
        Rinvia codice in
      </Button>
    </div>
  );
};

export default VerifyCodeForm;
