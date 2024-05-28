import { useEffect } from "react";

const useCloseModal = (formResult: any, onClose: () => void) => {
  // close modal if form is successful
  useEffect(() => {
    if (formResult?.isSuccessful) onClose();
  }, [formResult]);
};

export default useCloseModal;
