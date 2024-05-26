import { useState } from "react";

const useShowModal = () => {
  const [showModal, setShowModal] = useState(false);

  // handle modal
  const handleModal = () => setShowModal(prev => !prev);

  return { showModal, handleModal };
};

export default useShowModal;
