import React from 'react';

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
    <div style={{ background: '#1e212b', width: '100%', padding: '2rem 0' }}>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          margin: '0 auto',
          marginBottom : '2rem',
          marginTop : '2rem',
          maxWidth: '1400px',
          flexWrap: 'wrap', 
        }}
      >
        {data.map((card, index) => (
          <div
            key={index}
            style={{
              background: '#2f3b52',
              border: '1px solid #444',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '250px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              overflow: 'hidden',
              textAlign: 'center',
              padding: '1.5rem',
              transition: 'transform 0.2s ease-in-out',
            }}
          >
            <img src={card.image} alt={card.title} style={{ width: 'auto', height: '80px', marginBottom: '1rem' }} />
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{card.title}</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem' }}>{card.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
