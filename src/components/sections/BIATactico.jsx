function BIATactico() {
  const procesos = [
    { nombre: 'Evaluación de riesgos y vulnerabilidades', rto: '24 horas', rpo: '12 horas' },
    { nombre: 'Gestión de identidades y accesos (IAM)', rto: '12 horas', rpo: '6 horas' },
    { nombre: 'Cifrado de Datos Sensibles', rto: '5 minutos', rpo: '1 hora' }
  ];

  return (
    <div className="card">
      <h2 className="card-title">Análisis de Impacto al Negocio (BIA) - Nivel Táctico</h2>
      <div className="card-content">
        <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
          Análisis del impacto que tendría la interrupción de los procesos críticos del servicio a nivel táctico.
        </p>
        
        <h3 style={{ color: 'var(--deep-navy)', fontFamily: 'Sora', marginBottom: '1rem' }}>
          Procesos Críticos Analizados:
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {procesos.map((proceso, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '2px solid var(--electric-blue)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <h4 style={{
                color: 'var(--electric-blue)',
                fontFamily: 'Sora',
                marginBottom: '1rem',
                fontSize: '1rem'
              }}>
                {proceso.nombre}
              </h4>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <p><strong>RTO:</strong> {proceso.rto}</p>
                <p><strong>RPO:</strong> {proceso.rpo}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '8px' }}>
          <p><strong>Nota:</strong></p>
          <p>• RTO (Recovery Time Objective): Tiempo máximo tolerable de inactividad</p>
          <p>• RPO (Recovery Point Objective): Cantidad máxima de datos que se pueden perder</p>
        </div>
      </div>
    </div>
  );
}

export default BIATactico;