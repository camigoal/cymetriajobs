import React from 'react';

export default function JobSearchBar() {
  return (
    <div style={styles.container}>
      <h2 style={styles.mainTitle}>Búsqueda de empleo</h2>
      <div style={styles.formRow}>
        <div style={styles.formGroup}>
          <h3 style={styles.subTitle}>Título del trabajo:</h3>
          <input
            type="text"
            placeholder="Añade el nombre de la posición"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <h3 style={styles.subTitle}>País:</h3>
          <select id="country" style={styles.select}>
            <option value="">Todos</option>
            <option value="es">España</option>
            <option value="mx">México</option>
            <option value="co">Colombia</option>
            <option value="ar">Argentina</option>
            <option value="cl">Chile</option>
          </select>
        </div>
        <button style={styles.button}>
          Buscar
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1000px',
    width: '100%',
    margin: '0 auto',
    marginTop: '4rem',
    marginBottom: '4rem',
  },
  mainTitle: {
    margin: '0',
    fontSize: '2rem',
    color: '#333',
  },
  formRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: '2rem', 
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  subTitle: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.2rem',
    color: '#333',
    fontWeight: 'normal',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  select: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    alignSelf: 'flex-end',
    background: '#ff5a5f',
    color: '#fff',
    border: 'none',
    padding: '0.7rem 1.2rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.3s ease',
  },
  buttonHover: {
    background: '#e04e4e',
  },
};