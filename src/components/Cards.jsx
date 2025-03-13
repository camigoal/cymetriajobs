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
    <div style={{ background: '#002C69', width: '100%', padding: '3rem 0' }}>
      {/* Contenedor del título alineado con la primera card */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <p style={{ color: '#AAA', fontSize: '1.2rem', letterSpacing: '2px', marginLeft: '14%' }}>
          QUÉ NOS DIFERENCIA
        </p>
        <h2
          style={{
            color: 'white',
            fontSize: '3rem',
            fontWeight: 'normal',
            marginBottom: '2rem',
            marginLeft: '14%', // Mueve el título para alinearlo con la primera card
          }}
        >
          4 razones para unirte al <span style={{ color: '#0094FF' }}>#</span>TeamUnstoppables
        </h2>
      </div>

      {/* Contenedor de Cards */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          margin: '0 auto',
          maxWidth: '1400px',
          flexWrap: 'nowrap',
        }}
      >
        {data.map((card, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '300px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              overflow: 'hidden',
              textAlign: 'center',
              padding: '1.5rem',
              transition: 'transform 0.2s ease-in-out',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={card.image} alt={card.title} style={{ width: 'auto', height: '80px', marginBottom: '1rem' }} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{card.title}</h3>
            <p style={{ color: '#ddd', fontSize: '0.9rem', marginBottom: '1rem' }}>{card.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
