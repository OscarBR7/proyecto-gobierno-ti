function Header() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--deep-navy) 0%, #1E3A5F 100%)',
      color: 'white',
      padding: '2rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          fontFamily: 'Sora, sans-serif',
          fontSize: '2.5rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, var(--electric-blue), var(--cyan))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '0.5rem',
          display: 'inline-block'
        }}>
          EmpresIA
        </div>
        <div style={{ fontSize: '1.1rem', color: 'var(--cyan)', opacity: 0.9, fontWeight: '500' }}>
          Consultoría e Implementación de Soluciones de IA
        </div>
        <div style={{ marginTop: '1.5rem', fontSize: '0.95rem', opacity: 0.8 }}>
          <div><strong>Proyecto Final:</strong> Gobierno de TI</div>
          <div><strong>Alumnos:</strong> Acosta Osorio Christian, Briones Rayo Oscar, Nava Villar Eric</div>
          <div><strong>Grupo:</strong> 7CV2 | <strong>Profesora:</strong> Rocío Palacios Solano</div>
          <div><strong>IPN - ESCOM</strong></div>
        </div>
      </div>
    </div>
  );
}

export default Header;