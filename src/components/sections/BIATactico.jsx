function BIATactico() {
  const procesos = [
    { nombre: 'Evaluación de riesgos y vulnerabilidades', rto: '24 horas', rpo: '12 horas', impact: 'Alto' },
    { nombre: 'Gestión de identidades y accesos (IAM)', rto: '12 horas', rpo: '6 horas', impact: 'Medio' },
    { nombre: 'Cifrado de Datos Sensibles', rto: '5 minutos', rpo: '1 hora', impact: 'Crítico' }
  ];

  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Análisis de Impacto (BIA Táctico)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Evaluación de tiempos de recuperación (RTO) y puntos de recuperación (RPO) para procesos tácticos críticos.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {procesos.map((proceso, index) => (
              <div key={index} style={{
                background: 'var(--bg-dark)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                borderTop: `4px solid ${proceso.impact === 'Crítico' ? 'var(--danger)' : proceso.impact === 'Alto' ? 'var(--warning)' : 'var(--secondary)'}`
              }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                  {proceso.nombre}
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>RTO (Tiempo)</div>
                    <div style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{proceso.rto}</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>RPO (Datos)</div>
                    <div style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{proceso.rpo}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default BIATactico;