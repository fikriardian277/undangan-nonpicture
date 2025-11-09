// src/components/Mempelai/Mempelai.jsx

import React from "react";
import "./Mempelai.css";
import FlowerDecorator from "../FlowerDecorator/FlowerDecorator"; // 1. Import FlowerDecorator

// --- ASET GAMBAR ---
// 2. Import ilustrasi mempelai pria dan wanita
import groomIllustration from "../../assets/img/groom-illustration.svg";
import brideIllustration from "../../assets/img/bride-illustration.svg";

// 3. Import aset bunga (hanya bunga-tl-1.png seperti permintaan)
import bungaTL1 from "../../assets/img/bunga-tl-1.png";

// 4. Buat array bunga (kita hanya perlu satu gambar untuk setiap sisi)
const singleFlower = [bungaTL1];

function Mempelai() {
  return (
    <section id="mempelai" className="mempelai-section">
      <FlowerDecorator position="top-left" flowers={singleFlower} />
      <FlowerDecorator position="top-right" flowers={singleFlower} />

      {/* Container utama tidak perlu data-aos karena kita akan menganimasikan isinya satu per satu */}
      <div className="container">
        <div className="salam-pembuka" data-aos="fade-up">
          <h2>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h2>
          <h3>Assalamu'alaikum Wr. Wb.</h3>
          <p>
            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
            serta kerabat sekalian untuk menghadiri acara pernikahan kami.
          </p>
        </div>

        {/* === MEMPELAI PRIA (Animasi dari Kanan) === */}
        <div
          className="mempelai-card"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="mempelai-photo-frame">
            <img
              src={groomIllustration}
              alt="Habib Yulianto"
              className="mempelai-photo"
            />
          </div>
          <h3 className="mempelai-name">Aang Supriatna</h3>
          <p className="mempelai-parents">
            Putra ke satu dari Bapak Sutisna & Ibu Dese
          </p>
          {/* <a
            href="https://instagram.com/habib.yulianto"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <i className="fab fa-instagram"></i>
          </a> */}
        </div>

        {/* Simbol "&" (Animasi Fade In) */}
        <div className="and-symbol" data-aos="zoom-in" data-aos-delay="400">
          &
        </div>

        {/* === MEMPELAI WANITA (Animasi dari Kiri) === */}
        <div
          className="mempelai-card"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="mempelai-photo-frame">
            <img
              src={brideIllustration}
              alt="Adiba Salsabila"
              className="mempelai-photo"
            />
          </div>
          <h3 className="mempelai-name">Tuti Alawiyah</h3>
          <p className="mempelai-parents">
            Putri kedua dari Bapak Hadin & Ibu Haryani
          </p>
          {/* <a
            href="https://instagram.com/adiba.salsabila"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <i className="fab fa-instagram"></i>
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Mempelai;
