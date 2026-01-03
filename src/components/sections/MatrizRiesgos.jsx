function MatrizRiesgos() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Matriz de Riesgos (ISO 27000)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Identificación y valoración de riesgos críticos para el servicio de consultoría de IA.
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>Riesgo Identificado</th>
                  <th>Probabilidad</th>
                  <th>Impacto</th>
                  <th>Nivel Riesgo</th>
                  <th>Estrategia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Calidad de Datos deficiente</strong></td>
                  <td>Alta</td>
                  <td>Alto</td>
                  <td><span className="badge badge-danger">Extremo</span></td>
                  <td>Validación ETL estricta</td>
                </tr>
                <tr>
                  <td><strong>Fallas en integración SW</strong></td>
                  <td>Alta</td>
                  <td>Muy Alto</td>
                  <td><span className="badge badge-danger">Crítico</span></td>
                  <td>Testing automatizado</td>
                </tr>
                <tr>
                  <td><strong>Dependencia Tecnológica</strong></td>
                  <td>Media</td>
                  <td>Alto</td>
                  <td><span className="badge badge-warning">Alto</span></td>
                  <td>Diversificación de vendors</td>
                </tr>
                <tr>
                  <td><strong>Resistencia al cambio</strong></td>
                  <td>Media</td>
                  <td>Medio</td>
                  <td><span className="badge badge-warning">Medio</span></td>
                  <td>Capacitación / Change Mgmt</td>
                </tr>
                <tr>
                  <td><strong>Fugas de Información</strong></td>
                  <td>Baja</td>
                  <td>Muy Alto</td>
                  <td><span className="badge badge-danger">Alto</span></td>
                  <td>DLP + Encriptación</td>
                </tr>
                <tr>
                  <td><strong>Incumplimiento Normativo</strong></td>
                  <td>Baja</td>
                  <td>Alto</td>
                  <td><span className="badge badge-warning">Medio</span></td>
                  <td>Auditorías legales</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
              <strong style={{ color: 'var(--danger)', display: 'block' }}>Riesgos Críticos</strong>
              <span style={{ fontSize: '0.9rem' }}>Requieren acción inmediata y plan de contingencia detallado.</span>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
              <strong style={{ color: 'var(--warning)', display: 'block' }}>Riesgos Altos/Medios</strong>
              <span style={{ fontSize: '0.9rem' }}>Monitoreo constante y controles mitigantes.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatrizRiesgos;