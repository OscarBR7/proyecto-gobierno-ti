function MetasTI() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Metas de TI</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Metas específicas del área de Tecnologías de la Información para respaldar las metas corporativas y asegurar el cumplimiento de la estrategia organizacional.
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Perspectiva</th>
                  <th>Meta de TI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="badge badge-success">Financiera</span></td>
                  <td>Reducir en un 15% los costos de infraestructura (Cloud/Virtualización).</td>
                </tr>
                <tr>
                  <td><span className="badge badge-warning">Clientes / Usuarios</span></td>
                  <td>Tener un 95% de la satisfacción del cliente en servicios de TI.</td>
                </tr>
                <tr>
                  <td><span className="badge">Procesos Internos</span></td>
                  <td>Ejecutar al menos 3 simulacros mensuales de respuesta a incidintes con documentación formal de resultados y acciones de mejora.</td>
                </tr>
                <tr>
                  <td><span className="badge badge-danger">Aprendizaje</span></td>
                  <td>Tener un 90% del equipo técnico con certificaciones en IA/ML.</td>
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