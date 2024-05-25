import type { CSSProperties, PropsWithChildren } from "react";
import "./carousel.scss";
import useSlider from "./hook/useSlider";

// Carousel props
interface CarouselProps {
  autoplay: boolean;
}

const Carousel = ({ autoplay, children }: PropsWithChildren<CarouselProps>) => {
  const { currItem } = useSlider(autoplay);

  return (
    <div className="Carousel">
      <div style={{ "--i": `${currItem * -100}%` } as CSSProperties} className="Carousel__inner">
        {children}
      </div>
    </div>
  );
};

export default Carousel;
