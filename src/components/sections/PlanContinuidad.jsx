import PDFViewer from '../PDFViewer';

function PlanContinuidad() {
  // Estrategias de recuperación por roles según el PDF
  const responsabilidades = [
    { rol: "Responsable de TI", accion: "Activación formal del plan de continuidad.", icon: "🔑" },
    { rol: "Especialista IA/ML", accion: "Recuperación de modelos y entornos de entrenamiento.", icon: "🧠" },
    { rol: "Soporte Técnico", accion: "Restauración de servicios y conectividad.", icon: "🛠️" },
    { rol: "Seguridad", accion: "Contención de incidentes y análisis de vulnerabilidades.", icon: "🛡️" }
  ];

  // Métricas reales de recuperación extraídas del PDF
  const metricasRecuperacion = [
    { proceso: "Gestión de accesos (IAM)", rto: "30 minutos", rpo: "0", prioridad: "Crítico" },
    { proceso: "Monitoreo de incidentes", rto: "1 hora", rpo: "15 minutos", prioridad: "Alto" },
    { proceso: "Cifrado y protección de datos", rto: "1 hora", rpo: "15 minutos", prioridad: "Crítico" },
    { proceso: "Plataforma de IA", rto: "4 horas", rpo: "1 hora", prioridad: "Alto" }
  ];

  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Plan de Continuidad del Negocio (BCP - EmpresIA)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
            Protocolos diseñados para garantizar la disponibilidad, integridad y confidencialidad 
            de los activos de IA ante eventos disruptivos.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
            Escenarios de Respuesta y Roles
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {responsabilidades.map((item, i) => (
              <div key={i} style={{ 
                background: 'var(--bg-dark)', 
                padding: '1.2rem', 
                borderRadius: 'var(--radius-md)', 
                border: '1px solid var(--border-color)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <strong style={{ display: 'block', color: 'var(--secondary)', marginBottom: '0.5rem' }}>{item.rol}</strong>
                <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-muted)' }}>{item.accion}</p>
              </div>
            ))}
          </div>

          <h3 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
            Métricas de Recuperación ($RTO / RPO$)
          </h3>
          <div className="table-container" style={{ marginBottom: '3rem' }}>
            <table>
              <thead>
                <tr>
                  <th>Proceso Crítico</th>
                  <th>Prioridad</th>
                  <th>RTO (Tiempo Máx.)</th>
                  <th>RPO (Pérdida Datos)</th>
                </tr>
              </thead>
              <tbody>
                {metricasRecuperacion.map((row, index) => (
                  <tr key={index}>
                    <td>{row.proceso}</td>
                    <td>
                      <span className={`badge badge-${row.prioridad === 'Crítico' ? 'danger' : 'warning'}`}>
                        {row.prioridad}
                      </span>
                    </td>
                    <td><strong style={{ color: 'var(--success)' }}>{row.rto}</strong></td>
                    <td>{row.rpo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '8px', borderLeft: '4px solid var(--primary)', marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Estrategias de Contingencia</h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 0 }}>
              <li><strong>Falla Cloud:</strong> Uso de respaldos en la nube y virtualización inmediata.</li>
              <li><strong>Seguridad:</strong> Aislamiento de sistemas y activación del plan de respuesta.</li>
              <li><strong>Datos:</strong> Restauración integral desde respaldos cifrados.</li>
            </ul>
          </div>

          <div className="card" style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Plan de Continuidad Oficial (IPN)</h3>
            <PDFViewer
              src="/pdfs/Plan_de_continuidad.pdf"
              title="Ver BCP EmpresIA"
            />
          </div>

          <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            Última actualización: Marzo 2026. Sujeto a simulacros anuales obligatorios.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanContinuidad;