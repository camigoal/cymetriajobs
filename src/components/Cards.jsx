export default function Cards() {
  const data = [
    {
      title: 'Valoramos tus ideas',
      text: 'Cada voz cuenta. ¡Tus ideas son clave para nuestra innovación!',
      image: '/images/idea-icon.png',
    },
    {
      title: 'Crezcamos juntos',
      text: 'Creemos en el potencial de nuestro equipo. ¡Impulsa tu carrera con nosotros!',
      image: '/images/grow-icon.png',
    },
    {
      title: 'Sé tú mismo',
      text: 'Únete a un equipo diverso, donde cada talento es valorado y celebrado.',
      image: '/images/be-yourself-icon.png',
    },
    {
      title: 'Innovación constante',
      text: 'Trabaja con tecnologías de punta y mantente siempre a la vanguardia.',
      image: '/images/innovation-icon.png',
    },
  ];

  return (
    <div className="w-full py-8 md:py-12 lg:py-16 min-h-[calc(100vh-64px)] flex items-center justify-center flex-col">
      {/* Contenedor del título alineado con las cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-[#00AEFF] text-base sm:text-lg tracking-[3px] font-semibold uppercase mb-2 text-center">
          Qué nos diferencia
        </p>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8 text-center">
          4 razones para unirte al <span className="text-[#0094FF] font-bold">#</span>TeamUnstoppables
        </h2>
      </div>

      <section className="flex justify-center flex-wrap gap-4 sm:gap-6 mx-auto max-w-7xl p-4">
        {data.map((card, index) => (
          <div
            key={index}
            className="bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-2xl 
                      flex-1 basis-[160px] sm:basis-[200px] md:basis-[250px] min-w-[160px] sm:min-w-[200px] md:min-w-[250px]
                      shadow-lg shadow-black/20 overflow-hidden text-center p-4 sm:p-6 md:p-8 
                      transition-all duration-300 hover:translate-y-[-10px] 
                      hover:shadow-xl hover:shadow-black/30 hover:bg-white/[0.12]
                      cursor-pointer z-10 relative"
          >
            <div className="flex justify-center items-center h-[70px] sm:h-[85px] md:h-[100px] mb-4 sm:mb-6">
              <img 
                src={card.image} 
                alt={card.title} 
                className="h-[60px] sm:h-[70px] md:h-[85px] w-auto drop-shadow-[0_5px_15px_rgba(0,148,255,0.5)]" 
              />
            </div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
              {card.title}
            </h3>
            <p className="text-[#B8D0FF] text-sm sm:text-base leading-relaxed font-light">
              {card.text}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
