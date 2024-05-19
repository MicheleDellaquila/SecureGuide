import useVerifyCode from "./hook/useVerifyCode";

// components
import Modal from "@/components/ui/modal/modal";
import Form from "@/components/ui/form/form";
import FormCode from "./formCode/formCode";
import Button from "@/components/ui/button/button";

// styles
import "./verifyCodeModal.css";

// VerifyCodeModal props
interface VerifyCodeModalProps {
  onClose: () => void;
}

const VerifyCodeModal = ({ onClose }: VerifyCodeModalProps) => {
  const { isInVerification, code, refForm, submitForm, verifyCodeForm } = useVerifyCode();
  console.log(onClose);

  return (
    <Modal className="VerifyCodeModal">
      <div className="VerifyCodeModal__inner">
        <h4 className="VerifyCodeModal__title">Inserisci il codice che è stato inviato alla tua email</h4>
        <p className="VerifyCodeModal__text">
          Questo ci permette di proteggere il tuo account verificando che sei tu la persona che sta provando a loggarsi
        </p>
        <Form
          key="verifyCodeForm"
          ref={refForm}
          className="VerifyCodeModal__form"
          formValues={code}
          onSubmitForm={verifyCodeForm}
        >
          <FormCode onSubmit={submitForm} />
        </Form>
        <Button className="VerifyCodeModal__resendButton" disabled={isInVerification} size="md" variant="primary">
          Rinvia codice in
        </Button>
      </div>
    </Modal>
  );
};

export default VerifyCodeModal;
