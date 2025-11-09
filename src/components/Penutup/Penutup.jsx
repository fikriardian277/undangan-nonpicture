// src/components/Penutup/Penutup.jsx

import React from "react";
import "./Penutup.css";
import FlowerDecorator from "../FlowerDecorator/FlowerDecorator"; // PENTING

// Import ilustrasi yang sama dengan di Countdown
import coupleIllustration from "../../assets/img/couple-countdown.svg";

// Import aset bunga yang mau kamu pakai untuk sudut bawah
// Boleh pakai aset yang sama atau yang baru
import bungaBL1 from "../../assets/img/bunga-bl-1.png"; // Contoh aset
import bungaBL2 from "../../assets/img/bunga-bl-2.png"; // Contoh aset
import bungaBL3 from "../../assets/img/bunga-bl-3.png"; // Contoh aset

const bottomLeftFlowers = [bungaBL1, bungaBL2, bungaBL3];
const bottomRightFlowers = [bungaBL1, bungaBL2, bungaBL3];

function Penutup() {
  return (
    <section id="penutup" className="penutup-section">
      <div className="container">
        <div className="penutup-illustration" data-aos="zoom-in">
          <img src={coupleIllustration} alt="Habib & Adiba" />
        </div>

        <p className="penutup-text" data-aos="fade-up" data-aos-delay="200">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas
          kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </p>

        <h3 data-aos="fade-up" data-aos-delay="300">
          Wassalamu'alaikum Wr. Wb.
        </h3>

        <h2 className="penutup-names" data-aos="fade-up" data-aos-delay="400">
          Aang & Tuti
        </h2>
      </div>

      {/* ======================================================= */}
      {/* === TAMBAHKAN DUA FLOWER DECORATOR BARU DI SINI === */}
      {/* ======================================================= */}
      <FlowerDecorator
        position="bottom-left"
        flowers={bottomLeftFlowers}
        className="penutup-style" // Nama panggilan khusus untuk Penutup
      />
      <FlowerDecorator
        position="bottom-right"
        flowers={bottomRightFlowers}
        className="penutup-style" // Nama panggilan khusus untuk Penutup
      />
    </section>
  );
}

export default Penutup;
