"use client";
import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import { IoCall } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6">
          <div className="row mb-50">
            <div className="col-lg-10">
              <h2 className="section-caption mb-xs-10">Contact Us</h2>
              <h3 className="section-title mb-0">
                <span className="wow charsAnimIn" data-splitting="chars">
                  <AnimatedText text="Discover your dream apartment today!" />
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row mb-60 mb-sm-50">
            {/* Contact Item */}
            <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".3s"
              >
                <div className="alt-features-icon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                  </svg>
                  <div className="alt-features-icon-s">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
                    </svg>
                  </div>
                </div>
                <h4 className="alt-features-title">Say hello</h4>
                <div className="alt-features-descr clearlinks">
                  <div>
                    <a href="mailto:sales@desaihomes.com">
                      sales@desaihomes.com
                    </a>
                  </div>
                  <a
                    href="tel:+919961766888"
                    className="btn btn-primary btn-sm d-block align-items-center mb-2"
                    style={{ color: "white" }}
                  >
                    <IoCall style={{ marginRight: "10px" }} /> 9961766888
                  </a>
                  <a
                    href="tel:+919961766888"
                    className="btn btn-primary btn-sm d-block align-items-center mb-2"
                    style={{ color: "white" }}
                  >
                    <IoCall style={{ marginRight: "10px" }} />
                    9961766888
                  </a>
                </div>
              </div>
            </div>
            {/* End Contact Item */}
            {/* Contact Item */}
            <div className="col-sm-6 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".5s"
              >
                <div className="alt-features-icon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                  </svg>
                </div>
                <h4 className="alt-features-title">Location</h4>
                <div className="alt-features-descr">
                  Edavilakom Rd, Kunnumpuram, Murukkumpuzha, Pallippuram, Kerala
                  695302
                </div>
              </div>
            </div>
            {/* End Contact Item */}
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.5s">
        <div className="col-md-6 mb-sm-50">
          {/* Contact Form */}
          {/* <div className="location-highlights">
            <h4>Location Highlights</h4>
            <ul>
              <li>Prime location in the heart of the city</li>
              <li>Easy access to public transportation</li>
              <li>Close proximity to shopping centers</li>
              <li>Nearby top-rated schools and universities</li>
              <li>Walking distance to parks and recreational areas</li>
              <li>Well-connected to major highways</li>
              <li>Safe and secure neighborhood</li>
              <li>Close to restaurants and cafes</li>
              <li>5-minute drive to the city’s business district</li>
              <li>Modern infrastructure and facilities</li>
            </ul>
          </div> */}

          <div className="location-highlight">
            <h4>Location Highlights</h4>
            <table className="table table-sm compact-table">
              <tbody>
                <tr>
                  <td>Technocity, Pallippuram</td>
                  <td>3.50 Km</td>
                </tr>
                <tr>
                  <td>Nissan Digital Hub</td>
                  <td>2.50 Km</td>
                </tr>
                <tr>
                  <td>Proposed Light Metro</td>
                  <td>3.00 Km</td>
                </tr>
                <tr>
                  <td>Bio Life Science Park, Thonnackal</td>
                  <td>4.00 Km</td>
                </tr>
                <tr>
                  <td>Kendriya Vidyalaya, Pallippuram</td>
                  <td>3.00 Km</td>
                </tr>
                <tr>
                  <td>Blue Mount Public School, Thonnackal</td>
                  <td>3.50 Km</td>
                </tr>
                <tr>
                  <td>Trivandrum International School</td>
                  <td>7.00 Km</td>
                </tr>
                <tr>
                  <td>Murukkumpuzha Railway Station</td>
                  <td>1.00 Km</td>
                </tr>
                <tr>
                  <td>Kaniyapuram Railway Station</td>
                  <td>3.00 Km</td>
                </tr>
                <tr>
                  <td>Sainik School, Pallippuram</td>
                  <td>8.00 Km</td>
                </tr>
                <tr>
                  <td>
                    St. Thomas Institute for Science & Technology, Chandavila
                  </td>
                  <td>11.00 Km</td>
                </tr>
                <tr>
                  <td>Kaniyapuram KSRTC Bus Depot</td>
                  <td>3.50 Km</td>
                </tr>
                <tr>
                  <td>MGM School, Kazhakuttom</td>
                  <td>11.50 Km</td>
                </tr>
                <tr>
                  <td>Technopark, Kazhakuttom</td>
                  <td>7.50 Km</td>
                </tr>
                <tr>
                  <td>Kazhakuttom Railway Station</td>
                  <td>8.00 Km</td>
                </tr>
                <tr>
                  <td>Taurus Zentrum Mall</td>
                  <td>8.00 Km</td>
                </tr>
                <tr>
                  <td>Infosys & UST Global</td>
                  <td>10.50 Km</td>
                </tr>
                <tr>
                  <td>Green Field Sports Hub</td>
                  <td>8.00 Km</td>
                </tr>
                <tr>
                  <td>Lulu Mall</td>
                  <td>13.00 Km</td>
                </tr>
                <tr>
                  <td>Trivandrum International Airport</td>
                  <td>17.00 Km</td>
                </tr>
                <tr>
                  <td>Mangalapuram Junction (NH)</td>
                  <td>2.50 Km</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* End Contact Form */}
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          {/* Google Map */}
          <div className="map-boxed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8631957683406!2d76.83702857599349!3d8.609130695417962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05abbbd75e424b%3A0x277987eb020ebde8!2sDD%20Sports%20City%20Trivandrum!5e0!3m2!1sen!2sin!4v1729249042717!5m2!1sen!2sin"
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* End Google Map */}
        </div>
      </div>
    </div>
  );
}
