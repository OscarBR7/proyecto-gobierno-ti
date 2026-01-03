function MapaEstrategico() {
  return (
    <div className="card">
      <h2 className="card-title">Mapa Estratégico</h2>
      <div className="card-content">
        <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
          Representación visual de la estrategia organizacional, mostrando las relaciones causa-efecto entre las diferentes perspectivas 
          del Balanced Scorecard.
        </p>
        
        <div style={{
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05), rgba(6, 182, 212, 0.05))',
          padding: '2rem',
          borderRadius: '12px',
          marginTop: '2rem'
        }}>
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>📊</p>
            <p>El mapa estratégico completo se encuentra disponible en el documento de Balanced Scorecard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapaEstrategico;