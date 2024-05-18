import { useEffect, useState } from "react";

const useSlider = (autoplay: boolean) => {
  const [currItem, setCurrItem] = useState(0);

  // auto play
  useEffect(() => {
    if(!autoplay) return;

    const intervalId = setInterval(() => {
      setCurrItem(prev => {
        const nextItem = prev + 1;
        return nextItem >= 3 ? 0 : nextItem;
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { currItem };
};

export default useSlider;
