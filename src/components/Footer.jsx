import React from 'react';
import './Footer.css';
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Customer Care</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">How to Buy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Daraz</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Daraz Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Make Money With Us</h3>
          <ul>
            <li><a href="#">Sell on Daraz</a></li>
            <li><a href="#">Become a Vendor</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Daraz. All rights reserved. Created by ALI AHMAD with <FaHeart /> </p>
      </div>
    </footer>
  );
};

export default Footer;
