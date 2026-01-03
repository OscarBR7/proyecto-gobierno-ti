function PlanContinuidad() {
  const estrategias = [
    { titulo: 'Respaldo de Datos', desc: 'Backups automáticos diarios con retención de 90 días en la nube' },
    { titulo: 'Redundancia', desc: 'Servidores y sistemas críticos con configuración redundante' },
    { titulo: 'Sitio Alterno', desc: 'Infraestructura alternativa en cloud para continuidad de servicios' },
    { titulo: 'Equipo de Respuesta', desc: 'Personal capacitado 24/7 para activación del plan' }
  ];

  return (
    <div className="card">
      <h2 className="card-title">Plan de Continuidad del Servicio</h2>
      <div className="card-content">
        <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
          Estrategias y procedimientos para garantizar la continuidad operativa del servicio de consultoría e implementación de 
          soluciones de IA ante situaciones de emergencia o interrupción.
        </p>
        
        <h3 style={{ color: 'var(--deep-navy)', fontFamily: 'Sora', marginBottom: '1rem' }}>
          Objetivos del Plan:
        </h3>
        <ul style={{ marginBottom: '2rem', lineHeight: '2' }}>
          <li>Minimizar el impacto de interrupciones en los servicios críticos</li>
          <li>Garantizar la recuperación de procesos esenciales dentro de los tiempos establecidos (RTO/RPO)</li>
          <li>Proteger los activos de información y mantener la confianza de los clientes</li>
          <li>Asegurar el cumplimiento de obligaciones contractuales y regulatorias</li>
        </ul>

        <h3 style={{ color: 'var(--deep-navy)', fontFamily: 'Sora', marginBottom: '1rem' }}>
          Estrategias de Recuperación:
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {estrategias.map((estrategia, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '2px solid var(--cyan)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <h4 style={{
                color: 'var(--cyan)',
                fontFamily: 'Sora',
                marginBottom: '0.75rem',
                fontSize: '1.1rem'
              }}>
                {estrategia.titulo}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {estrategia.desc}
              </p>
            </div>
          ))}
        </div>

        <h3 style={{ color: 'var(--deep-navy)', fontFamily: 'Sora', marginBottom: '1rem' }}>
          Tiempo de Recuperación:
        </h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Proceso</th>
                <th>Prioridad</th>
                <th>RTO</th>
                <th>RPO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Servicios de IA en producción</td>
                <td style={{ color: 'var(--amber)', fontWeight: 'bold' }}>Crítica</td>
                <td>4 horas</td>
                <td>1 hora</td>
              </tr>
              <tr>
                <td>Desarrollo de modelos ML</td>
                <td style={{ color: 'var(--electric-blue)', fontWeight: 'bold' }}>Alta</td>
                <td>24 horas</td>
                <td>12 horas</td>
              </tr>
              <tr>
                <td>Consultoría y análisis</td>
                <td style={{ color: 'var(--slate)' }}>Media</td>
                <td>48 horas</td>
                <td>24 horas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlanContinuidad;