import "./slide.scss";

// Slide props
interface SlideProps {
  title: string;
  img: string;
  text: string;
}

const Slide = ({ title, text, img }: SlideProps) => {
  return (
    <div className="Slide">
      <div className="Slide__box">
        <h3 className="Slide__box-title">{title}</h3>
        <p className="Slide__box-text">{text}</p>
      </div>
      <img src={img} alt={title} />
    </div>
  );
};

export default Slide;
