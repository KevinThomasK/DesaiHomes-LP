"use client"; // This file is a client component

import { useEffect } from "react";

const images = [
  "/assets/images/dd/dd-1.webp",
  "/assets/images/dd/pav.webp",
  "/assets/images/dd/pa-2.png",
];

const BackgroundSlider = ({ setBackgroundImage }) => {
  useEffect(() => {
    let currentIndex = 0;

    const changeBackground = () => {
      setBackgroundImage(images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length;
    };

    changeBackground(); // Set the initial background
    const interval = setInterval(changeBackground, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [setBackgroundImage]);

  return null; // This component doesn't render anything
};

export default BackgroundSlider;
