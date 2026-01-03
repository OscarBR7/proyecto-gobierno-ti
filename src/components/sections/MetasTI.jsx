function MetasTI() {
  return (
    <div className="card">
      <h2 className="card-title">Metas de TI (Balanced Scorecard)</h2>
      <div className="card-content">
        <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
          Metas específicas del área de Tecnologías de la Información para respaldar las metas corporativas y asegurar el cumplimiento 
          de la estrategia organizacional.
        </p>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Perspectiva</th>
                <th>Meta de TI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Financiera</strong></td>
                <td>Reducir costos de infraestructura en un 15% mediante cloud computing y virtualización</td>
              </tr>
              <tr>
                <td><strong>Clientes / Usuarios</strong></td>
                <td>Lograr un 95% de satisfacción del cliente en servicios de TI</td>
              </tr>
              <tr>
                <td><strong>Procesos Internos</strong></td>
                <td>Automatizar el 80% de los procesos de deployment y testing</td>
              </tr>
              <tr>
                <td><strong>Aprendizaje y Crecimiento</strong></td>
                <td>Certificar al 100% del equipo técnico en tecnologías de IA y ML</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MetasTI;