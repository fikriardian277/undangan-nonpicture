// src/App.jsx

import React, { useState, useEffect } from "react";

// 2. Import library AOS dan CSS-nya
import AOS from "aos";
import "aos/dist/aos.css";

// Import semua komponenmu seperti biasa
import Hero from "./components/Hero/Hero.jsx";
import Mempelai from "./components/Mempelai/Mempelai.jsx";
import Countdown from "./components/Countdown/Countdown.jsx";
import Acara from "./components/Acara/Acara.jsx";
import Gift from "./components/Gift/Gift.jsx";
// import Story from "./components/Story/Story.jsx";
import Rsvp from "./components/Rsvp/Rsvp.jsx";
import Penutup from "./components/Penutup/Penutup.jsx";
import "./index.css";
import Footer from "./components/Footer/Footer.jsx";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer.jsx";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    AOS.refresh(); // Refresh AOS setelah konten utama muncul
  };
  // 3. Tambahkan block ini untuk menyalakan AOS saat aplikasi pertama kali dimuat
  useEffect(() => {
    AOS.init({
      duration: 1000, // Kita turunkan sedikit durasinya agar terasa lebih responsif
      easing: "ease-in-out-sine",
      once: false,
    });

    // Buat fungsi untuk di-panggil saat window selesai load
    const handleLoad = () => {
      AOS.refresh();
    };

    // Panggil fungsi refresh saat semua konten sudah dimuat
    window.addEventListener("load", handleLoad);

    // Ini penting: Hapus event listener saat komponen tidak lagi digunakan
    // untuk mencegah memory leak.
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className={`app-wrapper ${isOpened ? "opened" : ""}`}>
      <Hero onOpen={handleOpenInvitation} isOpened={isOpened} />

      <main className="main-content">
        <Countdown />
        <Mempelai />
        <Acara />
        <Gift />
        {/* <Story /> */}
        <Rsvp />
        <Penutup />
        <Footer />
      </main>
      {isOpened && <MusicPlayer isOpened={isOpened} />}
    </div>
  );
}

export default App;
