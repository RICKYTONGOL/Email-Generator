import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
const Footer = () => {
  let logoImgSrc = "/images/MainLogo.png";

  return (
    <>
      {/* <!-- Footer --> */}

      <div className="row" id="sf-footer">
        <footer id="skipToFooter">
          <div className="wrapper">
            <div className="row">
              <div className="col-6">
                <a
                  className="logo"
                  href="https://www.lincolnu.edu/index.html"
                  target="_parent"
                >
                  <Image
                    width={250}
                    height={100}
                    className="logo-img"
                    src={logoImgSrc}
                    alt="Company Logo"
                    priority
                  />
                </a>

                <div className="address">
                  <span className="fas fa-map-marker-alt"></span>

                  <a
                    className="addressLink"
                    href="https://www.google.com/maps/place/820+Chestnut+St,+Jefferson+City,+MO+65101/data=!4m2!3m1!1s0x87db5e6eefcaf4ef:0xef766a8420170a88?sa=X&amp;ved=2ahUKEwjv1Kyq4L7tAhWl2FkKHVWuDBkQ8gEwAHoECAYQAQ"
                    target="_parent"
                  >
                    820 Chestnut Street, Jefferson City, MO 65101
                  </a>

                  <span className="fas fa-phone"></span>

                  <a className="phone" href="tel:15766815000" target="_parent">
                    1-573-681-5000
                  </a>
                </div>

                <div className="social-icons">
                  <a
                    className="facebook"
                    href="https://www.facebook.com/LUBlueTigers"
                    target="_parent"
                  >
                    <span className="fab fa-facebook-f"></span>
                    <span>Facebook</span>
                  </a>

                  <a
                    className="twitter"
                    href="https://twitter.com/LUBlueTigers"
                    target="_parent"
                  >
                    <span className="fab fa-twitter"></span>
                    <span>Twitter</span>
                  </a>

                  <a
                    className="youtube"
                    href="https://www.youtube.com/channel/UCXqko_SMgFxzWMQ9_KgEdSg"
                    target="_parent"
                  >
                    <span className="fab fa-youtube"></span>
                    <span>YouTube</span>
                  </a>

                  <a
                    className="instagram"
                    href="https://www.instagram.com/lubluetigers/"
                    target="_parent"
                  >
                    <span className="fab fa-instagram"></span>
                    <span>Instagram</span>
                  </a>

                  <a
                    className="flickr"
                    href="https://www.flickr.com/photos/lubluetigers/"
                    target="_blank"
                  >
                    <span className="fab fa-flickr"></span>
                    <span>Flickr</span>
                  </a>
                </div>
              </div>

              <div className="col-6">
                <span className="column-title">Connect With Us</span>

                <ul className="footerLinks">
                  <li>
                    <a
                      href="https://www.lincolnu.edu/student-life/disability-services/index.html"
                      target="_parent"
                    >
                      Access &amp; Ability Services
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.lincolnu.edu/events/index.html"
                      target="_parent"
                    >
                      Calendar
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.lincolnu.edu/visit/index.html"
                      target="_parent"
                    >
                      Campus Locations
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.lincolnu.edu/police/index.html"
                      target="_parent"
                    >
                      Campus Police Department
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.lincolnu.edu/about-lincoln/human-resource-services/employment-opportunities.html"
                      target="_parent"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.lincolnu.edu/about-lincoln/purchasing/bid-information/index.html"
                      target="_parent"
                    >
                      Current Bids
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.lincolnu.edu/about-lincoln/administrative-offices/index.html"
                      target="_parent"
                    >
                      Directory
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.lincolnu.edu/its-help-desk/index.html"
                      target="_parent"
                    >
                      ITS Helpdesk
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="subfooter row">
              <div className="col-6">
                <span className="copyright">
                  © 2022 Lincoln University. All Rights Reserved.
                </span>
              </div>

              <div className="col-6">
                <ul className="subfooterLinks">
                  <li>
                    <a
                      href="https://www.lincolnu.edu/about-lincoln/title-ix/index.html"
                      target="_parent"
                    >
                      Title IX
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.lincolnu.edu/student-life/disability-services/index.html"
                      target="_parent"
                    >
                      Access &amp; Ability Services
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.lincolnu.edu/about-lincoln/oira/student-consumer.html"
                      target="_parent"
                    >
                      Student Consumer Info
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.lincolnu.edu/about-lincoln/statement-of-nondiscrimination.html"
                      target="_parent"
                    >
                      Non-Discrimination Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
