import React, { useEffect, useState } from 'react';
import { getOffersJobs } from '../services/jobs.service';

export default function Vacantes() {
  const [vacantesData, setVacantesData] = useState([]);
  const [expandedIds, setExpandedIds] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState('');
  

  useEffect(() => {
    getOffersJobs( search, page, limit )
      .then((data) => {
        console.log('Respuesta de la API:', data);
        if (data?.vacantes) {
          setVacantesData(data.vacantes);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [page, limit, search]);

  const toggleDescription = (id) => {
    setExpandedIds((prev) => ({ ...prev, [id]: true }));
    console.log("Estado de expandedIds después de clic:", expandedIds);
  };

  return (
    <div style={{ maxWidth: '1096px', margin: '2rem auto', padding: '1rem', width: '100%' }}>
      {vacantesData.length === 0 ? (
        Array.from({ length: 3 }).map((_, index) => (
          <div key={index} style={{
            display: 'flex',
            gap: '2rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            padding: '1rem',
            backgroundColor: '#fff',
            alignItems: 'center',
            marginBottom: '1rem',
          }}>
            <div style={{ 
              minWidth: '100px',
              height: '100px',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              animation: 'pulse 1.5s infinite'
            }} />

            <div style={{ flex: 1 }}>
              <div style={{ 
                height: '24px',
                width: '60%',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                marginBottom: '0.5rem',
                animation: 'pulse 1.5s infinite'
              }} />
              
              <div style={{ 
                height: '20px',
                width: '40%',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                marginBottom: '1rem',
                animation: 'pulse 1.5s infinite'
              }} />

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ 
                  width: '120px',
                  height: '40px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '4px',
                  animation: 'pulse 1.5s infinite'
                }} />
                <div style={{ 
                  width: '120px',
                  height: '40px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '4px',
                  animation: 'pulse 1.5s infinite'
                }} />
              </div>
            </div>
          </div>
        ))
      ) : (
        vacantesData.map((vacante) => (
          <div key={vacante.id} style={{
            display: 'flex',
            gap: '2rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            padding: '1rem',
            backgroundColor: '#fff',
            alignItems: 'center',
            width: '100%',
            marginBottom: '1rem',
          }}>
            <div style={{ minWidth: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/isologo-cymetria.png" alt="Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
            </div>

            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '1.1rem', margin: 0, color: '#008374', fontWeight: 'bold' }}>
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
                <button style={{ backgroundColor: '#000', color: '#fff', borderRadius: '4px', padding: '0.6rem 1rem' }}>
                  Solicitar ahora
                </button>
                <button
                  style={{
                    backgroundColor: '#0094FF',
                    color: '#000',
                    border: '1px solid #000',
                    borderRadius: '4px',
                    padding: '0.6rem 1rem',
                    cursor: 'pointer',
                  }}
                  onClick={() => toggleDescription(vacante.id)}
                >
                  Más información
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
        `}
      </style>
    </div>
  );
}
