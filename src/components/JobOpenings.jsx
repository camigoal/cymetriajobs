import React, { useEffect, useState } from 'react';
import { getOffersJobs } from '../services/jobs.service';

export default function Vacantes() {
  const [vacantesData, setVacantesData] = useState([]);

  const [expandedIds, setExpandedIds] = useState({});

  useEffect(() => {
    getOffersJobs()
      .then((data) => {
        console.log('Respuesta de la API:', data);
        if (data?.vacantes) {
          setVacantesData(data.vacantes);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // fetch('https://s9vqq5bl-3001.use2.devtunnels.ms/api/v1/vacantes/vacantes')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Respuesta de la API:', data);
    //     if (data?.vacantes) {
    //       setVacantesData(data.vacantes);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  }, []);

  const toggleDescription = (id) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (vacantesData.length === 0) {
    return (
      <div style={{ maxWidth: '1064px', margin: '2rem auto', padding: '1rem' }}>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            padding: '1rem 1rem',
            marginBottom: '1rem',
            backgroundColor: '#fff',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              minWidth: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/cymetria.png"
              alt="Logo"
              style={{ width: '120px', height: '120px', objectFit: 'contain' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: '1.1rem',
                margin: 0,
                color: '#008374',
                fontWeight: 'bold',
              }}
            >
              Desarrollador en integración Azure .NET Bilingüe
            </h2>
            <p style={{ margin: '0.5rem 0', color: '#444' }}>
              Híbrido · Bogotá, Colombia · Quality Assurance
            </p>

            {expandedIds['placeholder-1'] && (
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', lineHeight: '1.5' }}>
                Aquí iría la descripción de la vacante de ejemplo.
              </p>
            )}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.6rem 1rem',
                  cursor: 'pointer',
                }}
              >
                Solicitar ahora
              </button>
              <button
                style={{
                  backgroundColor: '#fff',
                  color: '#000',
                  border: '1px solid #000',
                  borderRadius: '4px',
                  padding: '0.6rem 1rem',
                  cursor: 'pointer',
                }}
                onClick={() => toggleDescription('placeholder-1')}
              >
                {expandedIds['placeholder-1'] ? 'Ocultar info' : 'Más información'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '2rem auto', padding: '1rem', width: '100%' }}>
      {vacantesData.map((vacante) => (
        <div
          key={vacante.id}
          style={{
            display: 'flex',
            gap: '2rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            padding: '1rem 1rem',
            marginBottom: '1rem',
            backgroundColor: '#fff',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              minWidth: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://via.placeholder.com/80"
              alt="Logo"
              style={{ width: '120px', height: '120px', objectFit: 'contain' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: '1.1rem',
                margin: 0,
                color: '#008374',
                fontWeight: 'bold',
              }}
            >
              {vacante.titulo}
            </h2>
            <p style={{ margin: '0.5rem 0', color: '#444' }}>
              {vacante.modalidad} · {vacante.ubicacion || 'N/A'} · {vacante.departamento || 'N/A'}
            </p>

            {expandedIds[vacante.id] && (
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', lineHeight: '1.5' }}>
                {vacante.descripcion}
              </p>
            )}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.6rem 1rem',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  if (vacante.enlace_solicitud) {
                    window.open(vacante.enlace_solicitud, '_blank');
                  }
                }}
              >
                Solicitar ahora
              </button>
              <button
                style={{
                  backgroundColor: '#fff',
                  color: '#000',
                  border: '1px solid #000',
                  borderRadius: '4px',
                  padding: '0.6rem 1rem',
                  cursor: 'pointer',
                }}
                onClick={() => toggleDescription(vacante.id)}
              >
                {expandedIds[vacante.id] ? 'Ocultar info' : 'Más información'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
