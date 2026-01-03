function PlanContinuidad() {
  const fases = [
    { title: "Respuesta Inmediata", desc: "Activación de equipo de emergencia y evaluación inicial.", time: "0-2 hrs" },
    { title: "Recuperación Temporal", desc: "Activación de sitio alterno y restauración de backups críticos.", time: "2-24 hrs" },
    { title: "Restauración Normal", desc: "Retorno a operaciones en sitio primario y validación de integridad.", time: "24-48 hrs" }
  ];

  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Plan de Continuidad del Negocio (BCP)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '3rem', color: 'var(--text-muted)' }}>
            Estrategias y cronograma de recuperación para garantizar la resiliencia operativa.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem', position: 'relative' }}>
            {/* Line connector */}
            <div style={{ position: 'absolute', left: '20px', top: '20px', bottom: '20px', width: '2px', background: 'var(--border-color)', zIndex: 0 }}></div>

            {fases.map((fase, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}>
                <div style={{
                  minWidth: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--bg-dark)',
                  boxShadow: '0 0 0 4px var(--bg-card)'
                }}>
                  {i + 1}
                </div>
                <div style={{ background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: 'var(--radius-md)', flex: 1, border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-main)' }}>{fase.title}</h3>
                    <span className="badge">{fase.time}</span>
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>{fase.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
            Métricas de Recuperación (Target)
          </h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Servicio Crítico</th>
                  <th>Prioridad</th>
                  <th>RTO (Tiempo)</th>
                  <th>RPO (Datos)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Producción IA</td>
                  <td><span className="badge badge-danger">Crítica</span></td>
                  <td><span style={{ color: 'var(--success)', fontWeight: 'bold' }}>4 hrs</span></td>
                  <td>1 hr</td>
                </tr>
                <tr>
                  <td>Desarrollo ML</td>
                  <td><span className="badge badge-warning">Alta</span></td>
                  <td>24 hrs</td>
                  <td>12 hrs</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PlanContinuidad;