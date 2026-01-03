function Portada() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--deep-navy) 0%, #1E3A5F 100%)',
      color: 'white',
      padding: '4rem 2rem',
      borderRadius: '16px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'Sora, sans-serif',
          fontSize: '3rem',
          fontWeight: '800',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, var(--electric-blue), var(--cyan))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          EmpresIA
        </div>
        <div style={{ fontSize: '1.3rem', marginBottom: '2rem', opacity: 0.9 }}>
          Consultoría e Implementación de Soluciones de<br/>
          Inteligencia Artificial para Optimización de Procesos Empresariales
        </div>
        <div style={{ fontSize: '1.1rem', marginTop: '3rem', lineHeight: 2 }}>
          <div><strong>INSTITUTO POLITÉCNICO NACIONAL</strong></div>
          <div><strong>ESCUELA SUPERIOR DE CÓMPUTO</strong></div>
          <div style={{ marginTop: '2rem' }}>
            <span className="badge">Gobierno de TI</span>
            <span className="badge">Proyecto Final</span>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <div><strong>Alumnos:</strong></div>
            <div>Acosta Osorio Christian</div>
            <div>Briones Rayo Oscar</div>
            <div>Nava Villar Eric</div>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <div><strong>Grupo:</strong> 7CV2</div>
            <div><strong>Profesora:</strong> Rocío Palacios Solano</div>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <div><strong>Fecha:</strong> 03-10-2025</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portada;