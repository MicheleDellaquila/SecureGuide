import { useState } from "react";

const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  // handle show password
  const handleShowPassword = () => setShowPassword(prev => !prev);

  return { showPassword, handleShowPassword };
};

export default useShowPassword;
