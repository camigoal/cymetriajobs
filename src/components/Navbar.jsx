import React from 'react';

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: '#1e212b',
        color: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '6rem' }}> 
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>

      <ul style={{ 
        display: 'flex', 
        gap: '4rem', 
        listStyle: 'none', 
        marginRight: '6rem' 
      }}>
        <li>
          <a href="#" style={{ 
            color: '#FF8427', 
            textDecoration: 'none' 
          }}>
            Inicio
          </a>
        </li>
        <li>
          <a 
            href="#" 
            style={{ 
              color: '#fff', 
              textDecoration: 'none', 
              transition: 'color 0.3s ease' 
            }}
            className="hover-effect"
          >
            Trabaja con nosotros
          </a>
        </li>
        <li>
          <a 
            href="#" 
            style={{ 
              color: '#fff', 
              textDecoration: 'none', 
              transition: 'color 0.3s ease' 
            }}
            className="hover-effect"
          >
            Ofertas
          </a>
        </li>
      </ul>

      <style>
        {`
          .hover-effect:hover {
            color: #FF8427 !important;
          }
        `}
      </style>
    </nav>
  );
}
