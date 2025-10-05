// src/components/Gift/Gift.jsx

import React, { useState } from "react";
import "./Gift.css";
import { FaGift, FaCopy, FaCheck } from "react-icons/fa"; // Import ikon

function Gift() {
  // State untuk melacak apakah detail hadiah terlihat atau tidak
  const [isVisible, setIsVisible] = useState(false);
  // State untuk melacak item mana yang baru saja di-copy
  const [copied, setCopied] = useState("");

  // Fungsi untuk menampilkan/menyembunyikan detail hadiah
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Fungsi untuk menyalin teks ke clipboard
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type); // Set item yang di-copy (misal: 'bca')
      setTimeout(() => setCopied(""), 2000); // Reset setelah 2 detik
    });
  };

  return (
    <section id="gift" className="dark-section">
      <div className="container" data-aos="fade-up">
        <div className="gift-box">
          <h2 className="section-title">Amplop Digital</h2>
          <p>
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami, dan
            jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado
            secara cashless.
          </p>
          <button className="btn-light" onClick={toggleVisibility}>
            <FaGift /> Klik Disini
          </button>

          {/* Container untuk detail hadiah yang bisa disembunyikan */}
          <div className={`gift-details ${isVisible ? "visible" : ""}`}>
            {/* Kartu BCA */}
            <div className="gift-card">
              <h4>BCA</h4>
              <p className="account-number">1234567890</p>
              <p className="account-name">a/n Adiba</p>
              <button
                className="copy-btn"
                onClick={() => handleCopy("1234567890", "bca")}
              >
                {copied === "bca" ? (
                  <>
                    <FaCheck /> Disalin
                  </>
                ) : (
                  <>
                    <FaCopy /> Salin
                  </>
                )}
              </button>
            </div>

            {/* Kartu DANA */}
            <div className="gift-card">
              <h4>DANA</h4>
              <p className="account-number">081234567890</p>
              <p className="account-name">a/n Habib</p>
              <button
                className="copy-btn"
                onClick={() => handleCopy("081234567890", "dana")}
              >
                {copied === "dana" ? (
                  <>
                    <FaCheck /> Disalin
                  </>
                ) : (
                  <>
                    <FaCopy /> Salin
                  </>
                )}
              </button>
            </div>

            {/* Kartu Kirim Hadiah */}
            <div className="gift-card address-card">
              <h4>Kirim Hadiah</h4>
              <p className="address-details">
                <strong>Penerima:</strong> Habib Yulianto
                <br />
                <strong>No. HP:</strong> 081234567890
                <br />
                <strong>Alamat:</strong> Jl. Sugeng Jeroni No.48A, Yogyakarta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gift;
