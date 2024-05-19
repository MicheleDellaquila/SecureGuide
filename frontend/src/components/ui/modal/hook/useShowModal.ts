import { useEffect, useRef } from "react";

const useShowModal = () => {
  const refModal = useRef<HTMLDialogElement>(null);

  // show modal
  useEffect(() => {
    if (refModal.current) refModal.current.showModal();
  }, []);

  return { refModal };
};

export default useShowModal;
