import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaMedrt,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Quick Links</h2>
            <Link to="/About" target="_blank">
              About Us
            </Link>

            <Link to="/Contact" target="_blank">
              Contact Us
            </Link>

            <Link to="/MyNews">News</Link>
          </div>
          <div className="footer-link-items">
            <h2>Features</h2>
            <Link to="/Awareness">Crime Awareness</Link>
            <Link to="/Estimation">Crime Estimation</Link>
            <Link to="/Event">Historical Data</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link
              to={{ pathname: "https://www.instagram.com/" }}
              target="_blank"
            >
              Instagram
            </Link>

            <Link
              to={{ pathname: "https://www.facebook.com/" }}
              target="_blank"
            >
              Facebook
            </Link>

            <Link to={{ pathname: "https://twitter.com/" }} target="_blank">
              Twitter
            </Link>
          </div>
        </div>
      </div>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              LCES
            </Link>
          </div>
          <ul className="website-rights">
            &copy;{new Date().getFullYear()} London Crime Estimation | All
            rights reserved | Terms Of Service | Privacy Policy
          </ul>

          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to={{ pathname: "https://www.facebook.com/" }}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
            <Link
              class="social-icon-link instagram"
              to={{ pathname: "https://www.instagram.com/" }}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>

            <Link
              class="social-icon-link twitter"
              to={{ pathname: "https://twitter.com/" }}
              target="_blank"
              aria-label="Twitter"
            >
              <VscTwitter />
            </Link>
            <Link
              class="social-icon-link twitter"
              to={{ pathname: "https://www.linkedin.com/" }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
