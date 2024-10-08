// components/NavBar.js
'use client';
import React, { useState } from 'react';
import { FaInstagram, FaBasketballBall } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TiSocialLinkedin } from 'react-icons/ti';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './NavBar.module.css'; 
import icono from '../../assets/icono.ico'; 
import Image from 'next/image'; 

const NavBar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
            <FaXTwitter size={17} color="black" /> 
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
            <FaInstagram size={17} color="black" /> 
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3">
            <TiSocialLinkedin size={20} color="black" /> 
          </a>
          <span className="me-3">
            <FaBasketballBall size={17} color="black" /> 
          </span>
        </div>

        <div className="text-center d-flex align-items-center" style={{ marginLeft: '-15px' }}>
          <Image 
            src={icono} 
            alt="Icono" 
            width={40} 
            height={30} 
            style={{ marginRight: '1px', marginTop: '4px' }} 
          />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>Comet</span> 
        </div>

        <div className="d-flex align-items-center">
          <button className={styles.hamburgerButton} type="button" onClick={toggleMenu}>
            <div className={styles.hamburger}></div>
          </button>
        </div>
      </div>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
          <ul className={styles.menuList}>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
