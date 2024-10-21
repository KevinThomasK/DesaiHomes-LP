"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
//import Nav from "./components/Nav";
import { CiMobile1 } from "react-icons/ci";

import Image from "next/image";
export default function Header5({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll">
        <a href="#top" className="logo font-alt">
          <Image
            src="/assets/images/dd/logo.png"
            alt="Your Company Logo"
            width={80}
            height={40}
          />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          {/* <Nav links={links} /> */}
          <li className="ms-3 me-2" />
          <li>
            <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              className="opacity-1 no-hover"
              target="_blank"
            >
              <span
                className="btn btn-mod btn-small btn-border-w btn-circle d-flex align-items-center justify-content-center"
                data-btn-animate="y"
              >
                <span className="btn-animate-y">
                  <a
                    href="tel:+919961766888"
                    className="btn-animate-y-1 d-flex align-items-center"
                    style={{ color: "white" }}
                  >
                    <CiMobile1
                      style={{
                        color: "white",
                        fontSize: "20px",
                        marginRight: "10px",
                      }}
                    />
                    9961766888
                  </a>
                  <a
                    href="tel:+919961766888"
                    className="btn-animate-y-2 d-flex align-items-center"
                    style={{ color: "white" }}
                    aria-hidden="true"
                  >
                    <CiMobile1
                      style={{
                        color: "white",
                        fontSize: "20px",
                        marginRight: "10px",
                      }}
                    />
                    9961766888
                  </a>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
