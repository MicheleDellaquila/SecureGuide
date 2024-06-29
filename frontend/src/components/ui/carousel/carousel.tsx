import type { CSSProperties, PropsWithChildren, HTMLAttributes } from "react";
import "./carousel.scss";
import useSlider from "./hook/useSlider";

// Carousel props
interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  autoplay: boolean;
}

const Carousel = ({ autoplay, children, ...rest }: PropsWithChildren<CarouselProps>) => {
  const { currItem } = useSlider(autoplay);

  return (
    <div className="Carousel" {...rest}>
      <div style={{ "--i": `${currItem * -100}%` } as CSSProperties} className="Carousel__inner">
        {children}
      </div>
    </div>
  );
};

export default Carousel;
