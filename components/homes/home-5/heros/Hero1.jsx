"use client";

import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import { useState, useEffect } from "react";
import { ModalTrigger } from "@/components/Modal";

export default function Hero1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      openModal();
    }, 10000);

    const interval = setInterval(() => {
      openModal();
    }, 40000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {" "}
      <ModalTrigger isOpen={isModalOpen} onClose={closeModal} />
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120 custom-hero">
        {/* Home Section Content */}
        <div className="home-content text-center">
          {/* <h2 className="section-title-tiny mb-50 mb-sm-30 wow fadeInDownShort">
            Desai Homes
          </h2> */}
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
    </>
  );
}
