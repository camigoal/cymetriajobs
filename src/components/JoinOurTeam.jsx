import React from 'react';

export default function ImageWithText() {
  return (
    <div style={{ background: '#4F4AC0', width: '100%' }}>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto', 
        }}
      >
        <div style={{ flex: '1' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>
            Trabaja con nosotros
          </h2>

          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>
            Nuestra cultura
          </h3>
          <p style={{ lineHeight: '1.6', color: '#fff', marginBottom: '1rem' }}>
            “Somos Imparables” y al interior de nuestros equipos reconocemos y promovemos
            principios y valores con los cuales aprendemos, crecemos y nos ayudamos entre todos.
          </p>

          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>
            Únete al team #Unstoppables
          </h3>
          <p style={{ lineHeight: '1.6', color: '#fff', marginBottom: '1rem' }}>
            Te estamos buscando. ¿Qué esperas para potenciar tu energía y seguir 
            rompiéndola profesionalmente?
          </p>

          <button
            style={{
              background: '#ff8427',
              color: '#fff',
              border: 'none',
              padding: '0.7rem 1.2rem',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ver vacantes
          </button>
        </div>

        <div style={{ flex: '1' }}>
          <img
            src="/images/business-woman.jpg"
            alt="Business woman"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
      </section>
    </div>
  );
}