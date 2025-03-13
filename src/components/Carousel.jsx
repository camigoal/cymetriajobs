import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: '/images/carousel-1.jpg',
    title: 'Impulsa tu futuro con nosotros',
    text: '¡Descubre las oportunidades que tenemos para ti!',
    textAlign: 'left',
  },
  {
    id: 2,
    image: '/images/carousel-2.jpeg',
    title: 'Posiciones 100% remotas, híbridas y presenciales.',
    text: '¡Aplica y únete a nuestro equipo #UNSTOPPABLES!',
    textAlign: 'center',
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
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getSlideClass = (slide) => {
    let baseClass = `
      absolute
      top-1/2
      -translate-y-1/2
      p-4
      rounded-lg
      transition-opacity duration-500 ease-in-out
    `;

    if (slide.id === 1) {
      baseClass += `
        left-[10%]
        text-[#002C69]
        max-w-[40%]
        text-left
        rounded-md
        px-6 py-4
        bg-[rgba(255,255,255,0.5)]
        backdrop-blur-sm
      `;
    } else if (slide.id === 2) {
      baseClass += `
        left-1/2
        -translate-x-1/2
        text-white
        max-w-[60%]
        text-center
      `;
    }
    return baseClass;
  };

  return (
    <div className="relative w-full overflow-hidden mt-[80px]">
      <div className="w-full h-[600px] overflow-hidden relative">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className={getSlideClass(slides[currentIndex])}>
        <h2
          className={`
            text-[3rem] mb-2
            ${slides[currentIndex].textAlign === 'center' ? 'text-center' : 'text-left'}
          `}
        >
          {slides[currentIndex].title}
        </h2>
        <p
          className={`
            text-[1.3rem] leading-[1.5]
            ${slides[currentIndex].textAlign === 'center' ? 'text-center' : 'text-left'}
          `}
        >
          {slides[currentIndex].text}
        </p>
      </div>

      <button
        onClick={handlePrev}
        className="
          absolute
          top-1/2
          -translate-y-1/2
          left-4
          bg-[rgba(0,0,0,0.5)]
          text-white
          border-none
          px-3 py-2
          cursor-pointer
          rounded
        "
      >
        &#10094;
      </button>

      <button
        onClick={handleNext}
        className="
          absolute
          top-1/2
          -translate-y-1/2
          right-4
          bg-[rgba(0,0,0,0.5)]
          text-white
          border-none
          px-3 py-2
          cursor-pointer
          rounded
        "
      >
        &#10095;
      </button>
    </div>
  );
}
