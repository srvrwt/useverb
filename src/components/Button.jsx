import React from "react";
import ArrowIcon from "../assets/icons/btn-arrow.svg";

export default function Button({
  text,
  onClick,
  href,
  showArrow = true,
  target = "_self",
  className = "",
}) {
  return href ? (
    <a href={href} target={target} className={`btn ${className}`}>
      <span>{text}</span>
      {showArrow && <img src={ArrowIcon} alt="arrow" className="btn-arrow" />}
    </a>
  ) : (
    <button onClick={onClick} className={`btn ${className}`}>
      <span>{text}</span>
      {showArrow && <img src={ArrowIcon} alt="arrow" className="btn-arrow" />}
    </button>
  );
}
