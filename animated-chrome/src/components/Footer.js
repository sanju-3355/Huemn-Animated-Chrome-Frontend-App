import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#"><FaYoutube /></a>
        <a href="#"><BsTwitterX /></a>
        <a href="#"><FaFacebookSquare/></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaTiktok /></a>
      </div>
      <div className="footer-links">
        <div>
          <h4>Chrome Family</h4>
          <ul>
            <li>Other Platforms</li>
            <li>Chromebooks</li>
            <li>Chromecast</li>
            <li>Chrome Web Store</li>
          </ul>
        </div>
        <div>
          <h4>Enterprise</h4>
          <ul>
            <li>Download Chrome Browser</li>
            <li>Chrome Browser for Enterprise</li>
            <li>Chrome Devices</li>
            <li>Google Cloud</li>
            <li>Google Workspace</li>
          </ul>
        </div>
        <div>
          <h4>Education</h4>
          <ul>
            <li>Google Chrome Browser</li>
            <li>Devices</li>
          </ul>
        </div>
        <div>
          <h4>Dev and Partners</h4>
          <ul>
            <li>Chromium</li>
            <li>ChromeOS</li>
            <li>Chrome Web Store</li>
            <li>Chrome Experiments</li>
            <li>Chrome Beta</li>
            <li>Chrome Dev</li>
            <li>Chrome Canary</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Chrome Help</li>
            <li>Update Chrome</li>
            <li>Chrome Tips</li>
            <li>Google Chrome Blog</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Google Privacy and Terms | About Google | Google products</p>
        <select>
          <option>English - India</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
