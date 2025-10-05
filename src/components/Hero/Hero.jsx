import React from "react";
import "./Hero.css";
import FlowerDecorator from "../FlowerDecorator/FlowerDecorator";

// --- ASET GAMBAR ---
// Ilustrasi Pasangan
import coupleIllustration from "../../assets/img/couple-illustration.png";

// Aset Bunga Sudut Kiri Atas
import bungaTL1 from "../../assets/img/bunga-tl-1.png";
import bungaTL2 from "../../assets/img/bunga-tl-2.png";
import bungaTL3 from "../../assets/img/bunga-tl-3.png";
import bungaTL4 from "../../assets/img/bunga-tl-4.png";

// Aset Bunga Sudut Kanan Atas (Ganti dengan file-mu)
import bungaTR1 from "../../assets/img/bunga-tr-1.png";
import bungaTR2 from "../../assets/img/bunga-tr-2.png";

// --- KELOMPOK ASET ---
const topLeftFlowers = [bungaTL1, bungaTL2, bungaTL3, bungaTL4];
const topRightFlowers = [bungaTR1, bungaTR2];

function Hero({ onOpen, isOpened }) {
  const queryParams = new URLSearchParams(window.location.search);
  const guestName = queryParams.get("to")?.replace(/\+/g, " ") || "Nama Tamu";

  return (
    <header className={`hero ${isOpened ? "opened" : ""}`}>
      <FlowerDecorator position="top-left" flowers={topLeftFlowers} />
      <FlowerDecorator position="top-right" flowers={topRightFlowers} />

      <img
        src={coupleIllustration}
        alt="Ilustrasi Habib & Adiba"
        className="hero-illustration"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      />

      {/* Konten Teks & Tombol dengan Animasi */}
      <div className="hero-content">
        <h4 data-aos="fade-up" data-aos-delay="500">
          The Wedding of
        </h4>
        <h1 data-aos="fade-up" data-aos-delay="700">
          Habib & Adiba
        </h1>
        <p data-aos="fade-up" data-aos-delay="900">
          Kepada Bapak/Ibu/Saudara/i
        </p>
        <p className="guest-name" data-aos="fade-up" data-aos-delay="1100">
          {guestName}
        </p>
        <button
          className="btn"
          data-aos="fade-up"
          data-aos-delay="1300"
          onClick={onOpen}
        >
          Buka Undangan
        </button>
      </div>

      <div className="gradient-overlay"></div>
    </header>
  );
}

export default Hero;
