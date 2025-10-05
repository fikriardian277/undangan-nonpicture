// src/components/Footer/Footer.jsx

import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk scroll ke paling atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animasi scroll halus
    });
  };

  // Efek untuk memunculkan tombol saat scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        // Muncul setelah scroll 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup function untuk menghapus event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <p className="footer-credit">Made with ❤️ by temu hati</p>
        </div>
      </footer>

      {/* Tombol Back to Top */}
      <button
        className={`back-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default Footer;
