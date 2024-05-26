import useWindowSize from "@/hooks/useWindowSize";
import { useLayoutEffect, useState } from "react";

const useShowSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { width } = useWindowSize()

  // close sidebar when window width is greater than 1023
  useLayoutEffect(() => {
    if (showSidebar && width > 1023) setShowSidebar(false);
  }, [showSidebar, width]);

  // handle show sidebar
  const handleShowSidebar = () => setShowSidebar(prev => !prev);

  return { showSidebar, handleShowSidebar };
};

export default useShowSidebar;
