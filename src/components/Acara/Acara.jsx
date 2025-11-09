// src/components/Acara/Acara.jsx

import React from "react";
import "./Acara.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import FlowerDecorator from "../FlowerDecorator/FlowerDecorator"; // PENTING

// Import aset bunga yang mau kamu pakai untuk sudut bawah
// Boleh pakai aset yang sudah ada atau yang baru
import bungaBL1 from "../../assets/img/bunga-bl-1.png";
import bungaBL2 from "../../assets/img/bunga-bl-2.png";
import bungaBL3 from "../../assets/img/bunga-bl-3.png";

const bottomLeftFlowers = [bungaBL1, bungaBL2, bungaBL3];
// Kita akan pakai aset yang sama untuk sudut kanan bawah (akan dibalik otomatis oleh CSS)
const bottomRightFlowers = [bungaBL1, bungaBL2, bungaBL3];

function Acara() {
  return (
    <section id="acara" className="acara-section">
      {/* Wave Atas */}
      <div className="wave-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--color-primary)"
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,208C672,213,768,203,864,181.3C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256L1440,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Konten Header */}
      <div className="acara-header" data-aos="fade-up">
        <h2 className="section-title">Save The Date</h2>
        <p className="ayat">
          "Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu
          mengingat (kebesaran Allah)."
          <br />
          (QS. Az Zariyat: 49)
        </p>
      </div>

      {/* Konten Acara */}
      <div className="container">
        {/* --- KARTU AKAD NIKAH --- */}
        <div className="card" data-aos="fade-right" data-aos-delay="400">
          <h3>Akad & Resepsi</h3>
          <p className="tanggal">Minggu, 21 Desember 2025</p>
          <p className="waktu">08:00 WIB - Selesai</p>
          <p className="alamat">
            Kediaman Mempelai Wanita Kp. Ciakar RT 01 RW 05 Desa Leuwidulang,
            Kec. Sodonghilir
          </p>
          <a
            href="https://www.google.com/maps/place/7%C2%B027'12.4%22S+108%C2%B006'26.6%22E/@-7.4534284,108.1066125,18z/data=!3m1!4b1!4m13!1m8!3m7!1s0x2e65feed50f3e5c1:0xfd8f2f2bc9112abb!2sLeuwidulang,+Kec.+Sodonghilir,+Kabupaten+Tasikmalaya,+Jawa+Barat!3b1!8m2!3d-7.4633968!4d108.1102567!16s%2Fg%2F121_5bzp!3m3!8m2!3d-7.45343!4d108.107378?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
            className="location-btn"
          >
            <FaMapMarkerAlt /> Lihat Lokasi
          </a>
        </div>

        {/* --- KARTU RESEPSI --- */}
        {/* <div className="card" data-aos="fade-left" data-aos-delay="400">
          <h3>Resepsi</h3>
          <p className="tanggal">Senin, 08 September 2025</p>
          <p className="waktu">10:00 WIB - Selesai</p>
          <p className="alamat">
            Jl. Sugeng Jeroni No.48b, Gedongkiwo, Kec. Mantrijeron, Kota
            Yogyakarta, Daerah Istimewa Yogyakarta 55786
          </p>
          <a href="#" className="location-btn">
            <FaMapMarkerAlt /> Lihat Lokasi
          </a>
        </div> */}
      </div>
      <FlowerDecorator
        position="bottom-left"
        flowers={bottomLeftFlowers}
        className="acara-style"
      />
      <FlowerDecorator
        position="bottom-right"
        flowers={bottomRightFlowers}
        className="acara-style"
      />
    </section>
  );
}

export default Acara;
