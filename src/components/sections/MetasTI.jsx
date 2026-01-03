function MetasTI() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Metas de TI</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Metas específicas del área de Tecnologías de la Información para respaldar las metas corporativas y asegurar el cumplimiento
            de la estrategia organizacional.
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Perspectiva</th>
                  <th>Meta de TI</th>
                  <th style={{ width: '10%' }}>Meta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="badge badge-success">Financiera</span></td>
                  <td>Reducir costos de infraestructura (Cloud/Virtualización)</td>
                  <td style={{ fontWeight: 'bold', color: 'var(--success)' }}>-15%</td>
                </tr>
                <tr>
                  <td><span className="badge badge-warning">Clientes</span></td>
                  <td>Satisfacción del cliente en servicios de TI</td>
                  <td style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>95%</td>
                </tr>
                <tr>
                  <td><span className="badge">Procesos</span></td>
                  <td>Automatización de despliegue y pruebas</td>
                  <td style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>80%</td>
                </tr>
                <tr>
                  <td><span className="badge badge-danger">Aprendizaje</span></td>
                  <td>Certificación del equipo técnico en IA/ML</td>
                  <td style={{ fontWeight: 'bold', color: 'var(--success)' }}>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetasTI;