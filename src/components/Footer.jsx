import React from "react";
import Assets from "../assets";

export default function Footer() {
  return (
    <footer className="bg-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-3 mb-3">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li>
                <a href="#our-services">Our services</a>
              </li>
              <li>
                <a href="#why-us">Why Us</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <p>Connect with us</p>
            <div className="social-icons">
              <a href="#" className="me-2">
                <img src={Assets.iconFacebook} alt="Facebook" />
              </a>
              <a href="#" className="me-2">
                <img src={Assets.iconInstagram} alt="Instagram" />
              </a>
              <a href="#" className="me-2">
                <img src={Assets.iconTwitter} alt="Twitter" />
              </a>
              <a href="#" className="me-2">
                <img src={Assets.iconMail} alt="Email" />
              </a>
              <a href="#">
                <img src={Assets.iconTwitch} alt="Twitch" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <p>Copyright Binar 2022</p>
            <a className="navbar-brand" href="#">
              <img src={Assets.logoTmmin} alt="TMMIN Car Rental" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
