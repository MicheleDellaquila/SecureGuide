import useVerifyCode from "./hook/useVerifyCode"

// components
import GridContainer from "@/containers/gridContainer/gridContainer";
import VerifyCodeForm from "@/components/verifyCodeForm/verifyCodeForm";
import Form from "@/components/ui/form/form";

// styles
import "./verifyAccount.css";

export const VerifyAccount = () => {
  const { isInVerification, code, refForm, submitForm, verifyCodeForm } = useVerifyCode();

  return (
    <div className="VerifyAccount">
      <GridContainer className="VerifyAccount__container">
        <div className="VerifyAccount__inner">
          <h4 className="VerifyAccount__title">Inserisci il codice che è stato inviato alla tua email</h4>
          <p className="VerifyAccount__text">
            Questo ci permette di proteggere il tuo account verificando che sei tu la persona che sta provando a
            loggarsi
          </p>
          <Form
            key="verifyCodeForm"
            ref={refForm}
            className="VerifyAccount__form"
            formValues={code}
            onSubmitForm={verifyCodeForm}
          >
            <VerifyCodeForm isInVerification={isInVerification} onSubmit={submitForm} />
          </Form>
        </div>
      </GridContainer>
    </div>
  );
};
