import { useState } from "react";

const useSidebarVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  // toggle sidebar
  const toggleSidebarVisibility = () => setIsVisible(prev => !prev);

  return { isVisible, toggleSidebarVisibility };
};

export default useSidebarVisibility;
