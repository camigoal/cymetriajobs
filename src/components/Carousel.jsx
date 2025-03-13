import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <>
      <Navbar />
      <section
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/hero-image.jpg)",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

        {/* Contenido principal con animación */}
        <div className={`relative z-10 text-center text-white max-w-2xl px-6 py-8 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h1 className="mb-6 text-5xl md:text-6xl font-bold leading-tight">
            Impulsa tu <span className="text-blue-400">futuro</span> con nosotros
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-100">
            Las oportunidades están aquí y son para ti. No esperes más, aplica hoy y únete a nuestro equipo <span className='text-blue-400 font-bold'>#UNSTOPPABLES</span> para hacer historia juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
              Aplica Ahora
            </button>
            {/* <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-full text-white font-semibold transition-all duration-300">
              Conoce más
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
}
