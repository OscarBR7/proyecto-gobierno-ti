function Inventario() {
  return (
    <div className="card">
      <h2 className="card-title">Inventario de Activos</h2>
      <div className="card-content">
        <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
          Listado completo de los activos tecnológicos, humanos y de información necesarios para la operación del servicio.
        </p>
        
        <div style={{
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05), rgba(6, 182, 212, 0.05))',
          padding: '2rem',
          borderRadius: '12px',
          marginBottom: '2rem'
        }}>
          <p style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
            <strong>Área:</strong> Cómputo / Ciberseguridad
          </p>
          <p style={{ fontSize: '1.05rem' }}>
            <strong>Servicio:</strong> Consultoría e Implementación de Soluciones de IA para Optimización de Procesos Empresariales
          </p>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '2rem' }}>
          El inventario completo de activos se encuentra disponible en el documento de Estudio de Factibilidad, 
          incluyendo hardware, software y recursos humanos necesarios.
        </p>
      </div>
    </div>
  );
}

export default Inventario;