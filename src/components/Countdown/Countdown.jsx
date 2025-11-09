// src/components/Countdown/Countdown.jsx

import React, { useState, useEffect } from "react";
import "./Countdown.css";
import FlowerDecorator from "../FlowerDecorator/FlowerDecorator"; // PENTING

// --- ASET GAMBAR ---
// Import ilustrasi untuk section ini
import coupleIllustration from "../../assets/img/couple-countdown.svg";

// Import bunga untuk hiasan sudut (PAKAI ASET YANG SAMA DARI HERO)
import bungaTL1 from "../../assets/img/bunga-tl-1.png";
import bungaTL2 from "../../assets/img/bunga-tl-2.png";
import bungaTL3 from "../../assets/img/bunga-tl-3.png";
import bungaTL4 from "../../assets/img/bunga-tl-4.png";
import bungaBL1 from "../../assets/img/bunga-bl-1.png";
import bungaBL2 from "../../assets/img/bunga-bl-2.png";
import bungaBL3 from "../../assets/img/bunga-bl-3.png";
// Buat array bunganya
const cornerFlowers = [bungaTL1, bungaTL2, bungaTL3, bungaTL4];
const bottomLeftFlowers = [bungaBL1, bungaBL2, bungaBL3];

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-12-21T08:00:00") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft()); // <-- Harusnya pakai huruf besar (CamelCase)
    }, 1000);
    return () => clearTimeout(timer);
  });

  const generateGoogleCalendarLink = () => {
    const event = {
      title: "Pernikahan Aang & Tuti",
      // PENTING: Ganti tanggal & waktu ini sesuai acaramu
      // Format: YYYYMMDDTHHMMSS (Waktu lokal, tanpa Z)
      startDate: "20251221T080000", // Contoh: 22 November 2025, Jam 10:00
      endDate: "20251221T150000", // Contoh: 22 November 2025, Jam 14:00 (Selesai)
      location:
        "Kediaman mempelai wanita kp. Ciakar RT 01 RW 05 Desa Leuwidulang, Kec. Sodonghilir, Kab. Tasikmalaya, Jawa Barat",
      details: "Acara Pernikahan Aang & Tuti. Mohon doa restu.",
      timezone: "Asia/Jakarta", // Atur zona waktu
    };

    // Mengubah spasi menjadi + untuk URL
    const encodedTitle = encodeURIComponent(event.title);
    const encodedLocation = encodeURIComponent(event.location);
    const encodedDetails = encodeURIComponent(event.details);

    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${event.startDate}/${event.endDate}&details=${encodedDetails}&location=${encodedLocation}&ctz=${event.timezone}`;
  };

  return (
    <section id="countdown" className="countdown-section">
      {/* ============================================================ */}
      {/* GUNAKAN 'position' YANG SAMA DENGAN DI HERO DI SINI */}
      {/* ============================================================ */}
      <FlowerDecorator position="top-left" flowers={cornerFlowers} />
      <FlowerDecorator position="top-right" flowers={cornerFlowers} />
      <FlowerDecorator position="bottom-left" flowers={bottomLeftFlowers} />

      <div className="container" data-aos="fade-up">
        <h4>The Wedding Of</h4>

        <div className="couple-illustration-countdown">
          <img src={coupleIllustration} alt="Habib & Adiba Illustration" />
        </div>

        <h2>Aang & Tuti</h2>
        <p>Kami berharap Anda menjadi bagian dari hari istimewa kami.</p>

        <div className="countdown-timer">
          <div className="timer-box">
            <span>{timeLeft.hari || "0"}</span>
            <p>Hari</p>
          </div>
          <div className="timer-box">
            <span>{timeLeft.jam || "0"}</span>
            <p>Jam</p>
          </div>
          <div className="timer-box">
            <span>{timeLeft.menit || "0"}</span>
            <p>Menit</p>
          </div>
          <div className="timer-box">
            <span>{timeLeft.detik || "0"}</span>
            <p>Detik</p>
          </div>
        </div>

        <p className="wedding-date">Minggu, 21 Desember 2025</p>
        <a
          href={generateGoogleCalendarLink()} // Panggil fungsi di sini
          target="_blank" // Buka di tab baru
          rel="noopener noreferrer" // Praktik keamanan
          className="btn"
        >
          Save The Date
        </a>
      </div>
    </section>
  );
}

export default Countdown;
