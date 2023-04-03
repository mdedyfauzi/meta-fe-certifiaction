import React, { useEffect, useState } from 'react';

import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';

import './styles.css';

const Header = ({ setActiveSection }) => {
  const [isShow, setIsShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // header fixed

  const debounce = (fn) => {
    let frame;

    return (...params) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        fn(...params);
      });
    };
  };

  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  };

  document.addEventListener('scroll', debounce(storeScroll), { passive: true });

  storeScroll();

  // on scroll hide header

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setIsShow(false);
      } else {
        // if scroll up show the navbar
        setIsShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  // smoth on scrol

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  return (
    <header className={!isShow && 'header-hidden'}>
      <img src="/logo.png" alt="logo" />
      <nav className="header-nav">
        <div>
          <a href="#project">project</a>
          <a href="#contact">contact</a>
        </div>
        <div className="header-divider" />
        <a href="https://www.linkedin.com/in/maulanafauzi/" target="_blank" rel="noreferrer">
          <FiLinkedin color="white" className="header-nav-icon" />
        </a>
        <a href="https://www.instagram.com/mdedyfauzi/" target="_blank" rel="noreferrer">
          <BsInstagram color="white" className="header-nav-icon" />
        </a>
        <a href="https://github.com/mdedyfauzi" target="_blank" rel="noreferrer">
          <FiGithub color="white" className="header-nav-icon" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
