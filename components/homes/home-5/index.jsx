"use client";
import React from "react";
import About from "./About";
import Marquee from "./Marquee";
import Image from "next/image";
import Team from "./Team";
import Service from "./Service";
import Portfolio from "./Portfolio";
import PortfolioTwo from "./PortfolioTwo";
//import Blog from "./Blog";
//import NewsLetter from "./NewsLetter";
import ContactTwo from "./ContactTwo";
import Link from "next/link";
import MarqueeDark from "./MarqueeDark";
import { useState } from "react";
import { ModalTrigger } from "@/components/Modal";

export default function Home5({ onePage = false, dark = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      {" "}
      <ModalTrigger isOpen={isModalOpen} onClose={closeModal} />
      <div className="page-section overflow-hidden">
        {dark ? <MarqueeDark /> : <Marquee />}
      </div>
      <section
        className="page-section pt-0 pb-0 bg-dark-1 bg-dark-alpha-80 light-content"
        style={{
          backgroundImage: "url(/assets/images/dd/dd-2.webp)",
        }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-6 col-xl-5">
              <div className="call-action-1-images pb-60 pb-md-0 mt-n30 mt-md-70 mb-n30 mb-md-70 mb-sm-0">
                <div className="call-action-1-image-1 round">
                  <Image
                    src="/assets/images/dd/e-1.jpg"
                    width={678}
                    height={840}
                    alt="Image Description"
                  />
                </div>
                <div className="call-action-1-image-2">
                  <div
                    className="call-action-1-image-2-inner"
                    data-rellax-y=""
                    data-rellax-speed="0.7"
                    data-rellax-percentage="0.427"
                  >
                    <Image
                      src="/assets/images/dd/d-park.png"
                      alt="Image Description"
                      width={300}
                      height={409}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-xl-1 d-flex align-items-center">
              <div className="row small-section">
                <div className="col-xl-11">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Explore More Projects
                  </h2>
                  <div className="text-gray mb-30 mb-sm-20">
                    <p className="mb-0">
                      In the most prominent and sought after residential region
                      of Trivandrum
                    </p>
                  </div>
                  <div className="local-scroll">
                    {onePage ? (
                      <>
                        {" "}
                        <button
                          onClick={openModal}
                          className="link-hover-anim link-circle-1 align-middle"
                          data-link-animate="y"
                        >
                          <span
                            onClick={openModal}
                            className="link-strong link-strong-unhovered"
                          >
                            View Services{" "}
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
                            View Services{" "}
                            <i
                              className="mi-arrow-right size-18 align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <Link
                          href={`/alegant-services${dark ? "-dark" : ""}`}
                          className="link-hover-anim link-circle-1 align-middle"
                          data-link-animate="y"
                        >
                          <span className="link-strong link-strong-unhovered">
                            View Services{" "}
                            <i
                              className="mi-arrow-right size-18 align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span
                            className="link-strong link-strong-hovered"
                            aria-hidden="true"
                          >
                            View Services{" "}
                            <i
                              className="mi-arrow-right size-18 align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section pb-0  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="team"
      >
        <Team />
      </section>
      <section
        className={`page-section pb-0  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <hr className="mt-0 mb-0" />
        <div className="container mt-3">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">
                <span className="text-gray">Exclusive</span> Amenities
                <span className="text-gray">.</span>
              </h2>
              <div className="text-gray">
                Experience luxury amenities at DD Sports City: Olympic-sized
                swimming pool, full-size football court, tennis, shuttle,
                basketball courts, and a jogging track for active living
              </div>
            </div>
          </div>
        </div>
        <Portfolio />
      </section>
      <div className="page-section overflow-hidden">
        {dark ? <MarqueeDark /> : <Marquee />}
      </div>
      <section
        className={`page-section pt-0  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <Service />
      </section>
      <section
        className={`small-section ${
          dark ? "bg-dark-2 light-content" : "bg-dark-1 light-content"
        } `}
      >
        <div className="container">
          <div className="row mb-n10">
            <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 mb-sm-30 text-center text-md-start">
              <h2 className="section-title-small mb-0">Book A Project Now?</h2>
            </div>
            <div className="col-md-4 col-lg-3 text-center text-md-end">
              <div className="mt-n20">
                {onePage ? (
                  <>
                    {" "}
                    <button
                      onClick={openModal}
                      className="link-hover-anim link-circle-1 align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Contact us
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Contact us
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      href={`/elegant-contact${dark ? "-dark" : ""}`}
                      className="link-hover-anim link-circle-1 align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Start a Project
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Start a Project
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        className={`page-section scrollSpysection   ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <Blog />
      </section> */}
      {/* test start*/}
      <section
        className={`page-section  scrollSpysection  overflow-hidden  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <PortfolioTwo />
      </section>
      {/* test end*/}
      {/* <section
        className="small-section bg-dark-1 bg-dark-alpha-70 bg-scroll light-content"
        style={{
          backgroundImage: "url(/assets/images/demo-elegant/section-bg-4.jpg)",
        }}
      >
        <NewsLetter />
      </section> */}
      <hr className="mt-0 mb-0" />
      {/* about start */}
      <section
        style={{ marginTop: "-70px" }}
        className={`page-section  scrollSpysection pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center mb-md-50">
              <div>
                <div className="wow linesAnimIn" data-splitting="lines">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Your
                    <span className="text-gray"> Dream Home</span> Near
                    Technocity is Waiting for You!
                    <span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray mb-30 mb-sm-20">
                    <p className="mb-0">
                      Experience a new standard of living at Desai Homes Sports
                      City Flats, located in Technocity, Trivandrum. Enjoy
                      spacious flats with top-notch amenities, including a
                      full-sized football court, tennis and basketball courts,
                      and jogging tracks. Live your dream home with modern
                      amenities and a vibrant community. Book Yours Today!
                    </p>
                  </div>
                </div>
                <div className="local-scroll wow fadeInUpShort wch-unset">
                  {onePage ? (
                    <>
                      {" "}
                      <button
                        onClick={openModal}
                        className="link-hover-anim link-circle-1 align-middle"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          I&#39;m Interested{" "}
                          <span className="visually-hidden">about us</span>{" "}
                          <i
                            className="mi-arrow-right size-18 align-middle"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          I&#39;m Interested{" "}
                          <span className="visually-hidden">about us</span>{" "}
                          <i
                            className="mi-arrow-right size-18 align-middle"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link
                        href={`/elegant-about${dark ? "-dark" : ""}`}
                        className="link-hover-anim link-circle-1 align-middle"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Learn More{" "}
                          <span className="visually-hidden">about us</span>{" "}
                          <i
                            className="mi-arrow-right size-18 align-middle"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Learn More{" "}
                          <span className="visually-hidden">about us</span>{" "}
                          <i
                            className="mi-arrow-right size-18 align-middle"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            <About />
          </div>
        </div>
      </section>
      {/* about end */}
      <hr className="mt-12 mb-0" />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <div className="container">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">
                <span className="text-gray">Contact</span> Us
                <span className="text-gray">.</span>
              </h2>
              <div className="text-gray">
                Find the perfect space for your lifestyle with our premium
                apartments!
              </div>
            </div>
          </div>
        </div>
        <ContactTwo />
      </section>
    </>
  );
}
