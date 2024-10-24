import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
const Header = () => {
  let logoImgSrc = "/images/MainLogo.png";
  let bannerImgSrc = "/images/lu-campus-aerial-view.jpg";

  return (
    <>
      <header>
        <div className="row" id="sf-header">
          <div className="col-6 col-md-12">
            <Image
              id="sf-logo"
              width={250}
              height={100}
              className="logo-img"
              src={logoImgSrc}
              alt="Company Logo"
              priority
            />
          </div>
        </div>
      </header>
      {/* Navigation  */}
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://lincolnu.sealforge.com/index.html"
                  >
                    Email Signature Generator
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://lincolnu.sealforge.com/HowTo.html"
                  >
                    How To
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Banner --> */}

      <div className="row">
        <div className="col-12 p-0 sf-relative">
          <Image
            id="sf-banner"
            layout="responsive"
            width={250}
            height={100}
            className="logo-img"
            src={bannerImgSrc}
            alt="Banner"
            priority
          />

          <div className="sf-overlay"></div>

          <div className="sf-banner-text">
            <h1>EMAIL SIGNATURE GENERATOR</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
