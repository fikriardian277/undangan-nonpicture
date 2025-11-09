// src/components/MusicPlayer/MusicPlayer.jsx

import React, { useState, useRef, useEffect } from "react";
import "./MusicPlayer.css";
import { FaPlay, FaPause } from "react-icons/fa";
import backgroundMusic from "../../assets/audio/tiara-andini.mp3";

function MusicPlayer({ isOpened }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));

  // --- FUNGSI BARU: FADE-IN VOLUME ---
  const fadeIn = (audio, duration, maxVolume) => {
    // Volume di-set ke 0 sebelum play
    audio.volume = 0;

    const targetVolume = Math.min(maxVolume, 1.0);
    const steps = 100;
    const intervalTime = duration / steps;
    const volumeIncrease = targetVolume / steps;

    // Panggil play (ini yang lo bilang sudah jalan)
    audio.play().catch(console.error);

    const fadeInterval = setInterval(() => {
      if (audio.volume < targetVolume) {
        audio.volume += volumeIncrease;

        // Batasi volume agar tidak melebihi target
        if (audio.volume >= targetVolume) {
          audio.volume = targetVolume;
          clearInterval(fadeInterval);
        }
      } else {
        clearInterval(fadeInterval);
      }
    }, intervalTime);

    // Kembalikan ID interval untuk cleanup
    return fadeInterval;
  };
  // ------------------------------------

  // Efek ini akan berjalan saat status 'isOpened' berubah
  useEffect(() => {
    let fadeIntervalId = null;
    const audio = audioRef.current;

    // Jika undangan dibuka DAN musik belum pernah dimainkan
    if (isOpened && !isPlaying) {
      // Panggil fungsi fade-in: 4 detik fade-in ke 70% volume
      fadeIntervalId = fadeIn(audio, 4000, 0.7);
      setIsPlaying(true);
    }
    // JANGAN LUPA LOGIKA INI!
    else if (!isOpened) {
      // Set volume ke 70% saat undangan belum dibuka (agar tombol play/pause tidak kaget)
      audio.volume = 0.7;
    }

    // Tambahkan CLEANUP untuk menghentikan interval lama jika terjadi re-render
    return () => {
      if (fadeIntervalId) {
        clearInterval(fadeIntervalId);
      }
    };
  }, [isOpened]); // Dependensi hanya isOpened

  // Fungsi untuk toggle play/pause (TIDAK ADA PERUBAHAN)
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      // Atur volume ke 0.7 saat diputar manual (jika belum diatur oleh fade-in)
      if (audio.volume < 0.7) audio.volume = 0.7;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button className="music-toggle-btn" onClick={togglePlayPause}>
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
  );
}

export default MusicPlayer;
