import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdOutlineNavigateNext } from 'react-icons/md';
import './Footer.css';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img className='footer-image' src={Logo} alt="Logo" />
      </div>
      <div className="footer-address">
        <h3>Adres</h3>
        <div className="footer-address-details">
          <p className="footer-address-p"><FaMapMarkerAlt /> Oruç Reis Mah. Tekstilkent Cad. <br/> G1 Blok No: 10 AB/3037</p>
          <p className="footer-address-p"><FaPhone />0536 851 6772</p>
          <p className="footer-address-p"><FaEnvelope />info@desaambalaj.com</p>
        </div>
      </div>
      <div className="footer-menu">
        <h3>Menüler</h3>
        <div className="footer-menu-links">
          <a href="#"><MdOutlineNavigateNext />Anasayfa</a>
          <a href="#"><MdOutlineNavigateNext />Hakkımızda</a>
          <a href="#"><MdOutlineNavigateNext />Ürünlerimiz</a>
          <a href="#"><MdOutlineNavigateNext />İletişim</a>
        </div>
      </div>
      <div className="footer-social">
        <h3>Sosyal Medya</h3>
        <div className="footer-social-links">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
