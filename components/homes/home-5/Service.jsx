import { services6 } from "@/data/services";
import React from "react";

export default function Service() {
  return (
    <>
      <div
        className="page-section bg-dark-1 bg-dark-alpha-70 light-content parallax-7 pb-140"
        style={{
          backgroundImage: "url(/assets/images/dd/pa-2.png)",
        }}
      >
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">
                Pre-Approved Loan.
              </h2>
              <div
                className="text-gray"
                style={{ textTransform: "capitalize" }}
              >
                Be part of Kerala&#39;s first sports-themed 2&3BHK flats, DD
                Sports City at Pallipuram, near Technocity by Desai Homes.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-n140 position-relative z-index-1">
        <div className="row mb-n30 ">
          {/* Services Item*/}
          {services6.map((elm, i) => (
            <div
              key={i}
              className="col-6 col-md-6 col-lg-3 d-flex align-items-stretch mb-30"
            >
              <div className="services-3-item round text-center">
                <div
                  className="wow fadeInUpShort"
                  style={{ width: "140px", height: "150px" }}
                  data-wow-offset={50}
                >
                  <img src={elm.src} style={{ width: "70%", height: "50%" }} />

                  <h3
                    className="services-3-title"
                    style={{ marginTop: "20px" }}
                  >
                    {elm.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
          {/* End Services Item*/}

          {/* End Services Item*/}
        </div>
      </div>
    </>
  );
}
