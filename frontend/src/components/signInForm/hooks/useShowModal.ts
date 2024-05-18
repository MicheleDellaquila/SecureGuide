import { useEffect, useState } from "react";

const useShowModal = (formResult: any) => {
  const [showModal, setShowModal] = useState(false);

  // check if login is successful
  useEffect(() => {
    if(!formResult) return;
    formResult.isSuccessful && setShowModal(true);
  }, [formResult]);

  // close modal
  const closeModal = () => setShowModal(false);

  return { showModal, closeModal };
};

export default useShowModal;
