import useFormCode from "./hook/useFormCode";

// components
import InputCode from "./inputCode/inputCode";

// styles
import "./formCode.css";

// Code props
interface FormCodeProps {
  formState?: string;
  formResult?: any;
  onSubmit: () => void;
}

const FormCode = ({ formState, formResult, onSubmit }: FormCodeProps) => {
  const { refCode, goNextInput } = useFormCode(onSubmit);
  const classInput = formState === "submitting" ? "FormCode__input--disabled" : undefined;

  console.log(formResult);
  return (
    <>
      <div className="FormCode">
        <InputCode
          ref={el => (refCode.current[0] = el as HTMLInputElement)}
          className={classInput}
          htmlFor="number1"
          onBlur={() => goNextInput(0)}
        />
        <InputCode
          ref={el => (refCode.current[1] = el as HTMLInputElement)}
          className={classInput}
          htmlFor="number2"
          onBlur={() => goNextInput(1)}
        />
        <InputCode
          ref={el => (refCode.current[2] = el as HTMLInputElement)}
          className={classInput}
          htmlFor="number3"
          onBlur={() => goNextInput(2)}
        />
      </div>
      <div className="FormCode">
        <InputCode
          ref={el => (refCode.current[3] = el as HTMLInputElement)}
          className={classInput}
          htmlFor="number4"
          onBlur={() => goNextInput(3)}
        />
        <InputCode
          ref={el => (refCode.current[4] = el as HTMLInputElement)}
          className={classInput}
          htmlFor="number5"
          onBlur={() => goNextInput(4)}
        />
        <InputCode
          ref={el => (refCode.current[5] = el as HTMLInputElement)}
          className={classInput}
          htmlFor="number6"
          onBlur={() => goNextInput(5)}
        />
      </div>
    </>
  );
};

export default FormCode;
