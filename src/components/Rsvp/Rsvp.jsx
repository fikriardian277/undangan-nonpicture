// src/components/Rsvp/Rsvp.jsx

import React, { useState, useEffect } from "react";
import "./Rsvp.css";

function Rsvp() {
  const [nama, setNama] = useState("");
  const [ucapan, setUcapan] = useState("");
  const [kehadiran, setKehadiran] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State untuk loading
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- TEMPEL LINK API-MU DI SINI ---
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyEiOsMtTl23TzJW5Z3kujsQHB4rDl72ooTgcuKX1gkhehJHvYDgaCjO7HTwH7K2_i-zg/exec"; // GANTI DENGAN LINK API-MU

  const fetchComments = () => {
    setIsLoading(true);
    fetch(scriptURL)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching comments!", error.message);
        setIsLoading(false);
      });
  };

  // Gunakan useEffect untuk mengambil data saat komponen pertama kali dimuat
  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !ucapan || !kehadiran) {
      alert("Harap isi semua kolom ya!");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("Nama", nama);
    formData.append("Ucapan", ucapan);
    formData.append("Kehadiran", kehadiran);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        console.log("Success!", response);
        alert("Terima kasih atas ucapan dan konfirmasinya!");
        setNama("");
        setUcapan("");
        setKehadiran("");
        setIsSubmitting(false);
        fetchComments(); // Ambil ulang komentar setelah berhasil submit
      })
      .catch((error) => {
        console.error("Error!", error.message);
        alert("Maaf, terjadi kesalahan. Silakan coba lagi.");
        setIsSubmitting(false);
      });
  };
  return (
    <section id="rsvp" className="dark-section rsvp-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Ucapkan Sesuatu
        </h2>
        <p className="sub-title" data-aos="fade-up" data-aos-delay="100">
          Berikan Ucapan & Doa Restu
        </p>

        <form
          className="rsvp-form"
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Nama Anda"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Tulis Ucapan & Doa"
              rows="5"
              value={ucapan}
              onChange={(e) => setUcapan(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <select
              value={kehadiran}
              onChange={(e) => setKehadiran(e.target.value)}
              required
            >
              <option value="" disabled>
                Konfirmasi Kehadiran
              </option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>
          {/* Tombol akan nonaktif saat sedang mengirim data */}
          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? "Mengirim..." : "Kirim"}
          </button>
        </form>
        <div className="comments-list" data-aos="fade-up" data-aos-delay="300">
          <h3>Ucapan Tamu</h3>
          {isLoading && <p className="loading-text">Memuat komentar...</p>}

          {!isLoading && comments.length === 0 && (
            <p className="loading-text">
              Jadilah yang pertama memberikan ucapan!
            </p>
          )}

          {!isLoading &&
            comments.map((comment, index) => (
              <div key={index} className="comment-item">
                <p className="comment-name">{comment.Nama}</p>
                <p className="comment-text">{comment.Ucapan}</p>
                <p className="comment-status">
                  {comment.Kehadiran === "Hadir"
                    ? "✅ Hadir"
                    : "❌ Tidak Hadir"}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Rsvp;
