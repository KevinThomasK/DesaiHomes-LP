"use client";
import { useEffect, useState } from "react";

const images = [
  "/assets/images/dd/pav.webp",
  "/assets/images/dd/pa-2.png",
  "/assets/images/dd/dd-1.webp",
];

const BackgroundSlider = ({ className, style, id, children }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        WebkitBackgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
      id={id}
    >
      {children} {/* Content, e.g., Hero component */}
    </div>
  );
};

export default BackgroundSlider;
