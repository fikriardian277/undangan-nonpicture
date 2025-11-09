// src/components/Story/Story.jsx

import React from "react";
import "./Story.css";

// 1. IMPORT ILUSTRASI YANG SAMA DENGAN DI COUNTDOWN
import coupleIllustration from "../../assets/img/couple-countdown.svg";

function Story() {
  return (
    <section id="story" className="story-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Love Story
        </h2>

        {/* 2. TAMBAHKAN ANIMASI PADA KARTU CERITA */}
        <div className="story-content" data-aos="fade-up" data-aos-delay="200">
          <div className="story-image">
            {/* 3. GUNAKAN GAMBAR ILUSTRASI DI SINI */}
            <img src={coupleIllustration} alt="Couple Story" />
          </div>
          <div className="story-text">
            <h3>Awal Cerita</h3>
            <p>
              Berawal dari teman kuliah bersama-sama memperjuangkan S1 Teknik
              Sipil, bertemu pada tahun 2016 hingga selalu bertemu untuk
              sesekali makan bersama, lalu menjalin hubungan pacaran 11-11-2017.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
