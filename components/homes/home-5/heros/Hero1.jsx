"use client";

import AnimatedText from "@/components/common/AnimatedText";
import React, { useState, useEffect } from "react";
import { ModalTrigger } from "@/components/Modal";

export default function Hero1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // You can set your background images in an array
  const backgroundImages = [
    "/assets/images/dd/dd-1.webp",
    "/assets/images/dd/dd-2.webp",
    "/assets/images/dd/pa-2.png",
  ];

  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(
    backgroundImages[0]
  );

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      openModal();
    }, 10000);

    const interval = setInterval(() => {
      openModal();
    }, 40000);

    // Change background image every 10 seconds for demonstration
    const imageChangeInterval = setInterval(() => {
      setCurrentBackgroundImage((prevImage) => {
        const currentIndex = backgroundImages.indexOf(prevImage);
        return backgroundImages[(currentIndex + 1) % backgroundImages.length];
      });
    }, 3000); // Change every 10 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
      clearInterval(imageChangeInterval);
    };
  }, []);

  return (
    <>
      <ModalTrigger isOpen={isModalOpen} onClose={closeModal} />
      <div
        className="home-section bg-dark-alpha-30  light-content z-index-1 scrollSpysection"
        style={{
          backgroundImage: `url(${currentBackgroundImage})`, // Use dynamic background image
          transition: "background-image 1s ease-in-out",
          backgroundSize: "cover", // Optional: Ensure background covers the entire div
          backgroundPosition: "center", // Optional: Center the background image
        }}
      >
        <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120 custom-hero">
          {/* Home Section Content */}
          <div className="home-content text-center">
            <h1 className="hs-title-3 mb-80 mb-sm-50 mb-xs-30">
              <span className="wow charsAnimInLong" data-splitting="chars">
                <AnimatedText text="Kerala’s No.1 Sports-Themed Flats in Trivandrum – Designed for Active Living!" />
              </span>
            </h1>
            <div
              className="local-scroll wow fadeInUpShort"
              data-wow-delay="0.57s"
            >
              <button
                onClick={openModal}
                className="link-hover-anim link-circle-1 align-middle"
                data-link-animate="y"
              >
                <span
                  onClick={openModal}
                  className="link-strong link-strong-unhovered"
                >
                  Discover Now{" "}
                  <i
                    className="mi-arrow-right size-18 align-middle"
                    aria-hidden="true"
                  ></i>
                </span>
                <span
                  onClick={openModal}
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  Discover Now{" "}
                  <i
                    className="mi-arrow-right size-18 align-middle"
                    aria-hidden="true"
                  ></i>
                </span>
              </button>
            </div>
          </div>
          {/* End Home Section Content */}
          {/* Scroll Down */}
          <div
            className="local-scroll scroll-down-3-wrap wow fadeInUp"
            data-wow-offset={0}
          >
            <a href="#about" className="scroll-down-3">
              Scroll Down
            </a>
          </div>
          {/* End Scroll Down */}
        </div>
      </div>
    </>
  );
}
