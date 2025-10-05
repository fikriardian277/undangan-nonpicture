// src/components/FlowerDecorator/FlowerDecorator.jsx

import React from "react";
import "./FlowerDecorator.css";

// 1. Tambahkan 'className' di sini
function FlowerDecorator({ flowers, position, className }) {
  return (
    // 2. Gabungkan semua nama class di sini
    <div className={`decorator-container ${position} ${className || ""}`}>
      {flowers.map((flower, index) => (
        <img
          key={index}
          src={flower}
          alt={`Flower part ${index + 1}`}
          className={`flower-part part-${index + 1}`}
        />
      ))}
    </div>
  );
}

export default FlowerDecorator;
