import type { PropsWithChildren } from "react";
import "./card.css";
import clsx from "clsx";

// Card props
interface CardProps {
  className?: string;
}

const Card = ({ className, children }: PropsWithChildren<CardProps>) => {
  return <div className={clsx("Card", className)}>{children}</div>;
};

export default Card;
