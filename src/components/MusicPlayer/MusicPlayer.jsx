// src/components/MusicPlayer/MusicPlayer.jsx

import React, { useState, useRef, useEffect } from "react";
import "./MusicPlayer.css";
import { FaPlay, FaPause } from "react-icons/fa";
import backgroundMusic from "../../assets/audio/youlookatme.mp3";

function MusicPlayer({ isOpened }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));

  // Efek ini akan berjalan saat status 'isOpened' berubah
  useEffect(() => {
    // Jika undangan dibuka DAN musik belum pernah dimainkan, putar otomatis
    if (isOpened && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [isOpened]); // Bergantung pada props 'isOpened'

  // Fungsi untuk toggle play/pause
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
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
