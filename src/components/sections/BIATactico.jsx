import PDFViewer from '../PDFViewer';

function BIATactico() {
  // Datos extraídos del documento BIA_Tactico.pdf
  const procesos = [
    { 
      nombre: 'Desarrollo y Entrenamiento de Modelos de IA', 
      rto: '< 5 horas', 
      mtpod: '< 12 horas', 
      impact: 'Crítico',
      descripcion: 'Asegura la continuidad del equipo de ciencia de datos usando entornos locales y respaldos.' 
    },
    { 
      nombre: 'Integración y Despliegue de Soluciones de IA', 
      rto: '< 12 horas', 
      mtpod: '< 12 horas', 
      impact: 'Alto',
      descripcion: 'Mantiene la implementación básica en entornos del cliente y validaciones funcionales.' 
    },
    { 
      nombre: 'Diagnóstico y Análisis de Procesos Empresariales', 
      rto: '< 12 horas', 
      mtpod: '< 12 horas', 
      impact: 'Alto',
      descripcion: 'Garantiza el levantamiento de información y reportes de diagnóstico de forma manual o local.' 
    }
  ];

  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Análisis de Impacto al Negocio (BIA Táctico)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Determinación de los tiempos críticos de recuperación y niveles de servicio mínimos aceptables (MBCO) 
            según la norma ISO 22301:2012 para los procesos de consultoría e IA.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {procesos.map((proceso, index) => (
              <div key={index} style={{
                background: 'var(--bg-dark)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                borderTop: `4px solid ${proceso.impact === 'Crítico' ? 'var(--danger)' : 'var(--warning)'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginRight: '10px' }}>
                    {proceso.nombre}
                  </h4>
                  <span className={`badge badge-${proceso.impact === 'Crítico' ? 'danger' : 'warning'}`} style={{ fontSize: '0.7rem' }}>
                    {proceso.impact}
                  </span>
                </div>
                
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '3rem' }}>
                  {proceso.descripcion}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.7rem', borderRadius: '4px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>RTO</div>
                    <div style={{ fontWeight: 'bold', color: 'var(--text-main)', fontSize: '1.1rem' }}>{proceso.rto}</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.7rem', borderRadius: '4px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>MTPOD</div>
                    <div style={{ fontWeight: 'bold', color: 'var(--text-main)', fontSize: '1.1rem' }}>{proceso.mtpod}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: '1rem', marginTop: '2rem', backgroundColor: 'var(--bg-secondary)' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Documento BIA Táctico Completo</h3>
            <PDFViewer
              src="/pdfs/BIA_Tactico.pdf"
              title="Ver BIA Táctico"
            />
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Estrategias de Continuidad</h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '1.2rem' }}>
              <li>Uso de equipos locales con capacidad de procesamiento y herramientas instaladas localmente.</li>
              <li>Respaldos periódicos en dispositivos externos y almacenamiento redundante local.</li>
              <li>Comunicación vía llamadas telefónicas y reuniones presenciales ante fallos digitales.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BIATactico;