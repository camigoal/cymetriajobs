import { tuple } from 'astro:schema';
import { text } from 'express';
import { title } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: '/images/carousel-1.jpg',
    title: (
      <>
        {/* Impulsa tu <span style={{ color: '#ff8427' }}>futuro</span> con nosotros */}
        Impulsa tu futuro con nosotros
      </>
    ),
    text: '¡Descubre las oportunidades que tenemos para ti!',
  },
  {
    id: 2,
    image: '/images/carousel-2.jpeg',
    title: ("Posiciones 100% remotas, híbridas y presenciales."),
    text: '¡¡Aplica y únete a nuestro equipo #UNSTOPABBLES!',
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ borderRadius: '8px' }}>
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          style={{
            width: '100%',
            display: 'block',
          }}
        />
      </div>

      {currentIndex === 0 && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            transform: 'translateY(-50%)',
            padding: '1rem 2rem',
            borderRadius: '8px',
            color: '#1e212b',
            maxWidth: '40%'
          }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem', fontWeight: '500' }}>{slides[0].title}</h2>
          <p style={{ fontSize: '1.3rem', lineHeight: '1.5' }}>{slides[0].text}</p>
        </div>
      )}

      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          top: '50%',
          left: '1rem',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          borderRadius: '4px',
        }}
      >
        &#10094;
      </button>

      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          top: '50%',
          right: '1rem',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          borderRadius: '4px',
        }}
      >
        &#10095;
      </button>
    </div>
  );
}
