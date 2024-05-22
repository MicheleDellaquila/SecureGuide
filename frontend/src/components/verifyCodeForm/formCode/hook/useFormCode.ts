import { useRef } from "react";

const useFormCode = (onSubmit: () => void) => {
  const refCode = useRef<HTMLInputElement[]>([]);

  // go next input if the before input is filled
  const goNextInput = (index: number) => {
    // check is the last input
    if (index === 5) return onSubmit();

    // check if input is filled
    if (refCode.current[index].value) {
      refCode.current[index + 1].focus();
    }
  };

  return { refCode, goNextInput };
};

export default useFormCode;
