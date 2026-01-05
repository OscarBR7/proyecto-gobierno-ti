function CascadaMetas() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Cascada de Metas</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Mapeo de relaciones entre metas corporativas y de TI. <br />
          </p>

          <h4 className="card-title">Metas Corporativas</h4>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Meta Corporativa</th>
                  <th style={{ textAlign: 'center' }}>Obtención de Beneficios</th>
                  <th style={{ textAlign: 'center' }}>Optimizar Recursos</th>
                  <th style={{ textAlign: 'center' }}>Optimizar Riesgos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Optimizar costos operativos en un 10% mediante automatización.</td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge" style={{ width: '30px', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>S</span></td>
                </tr>
                <tr>
                  <td>Ampliar la cartera de clientes en un 15% en el mercado PYME.</td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                  <td style={{ textAlign: 'center' }}><span style={{ color: 'var(--border-color)' }}>—</span></td>
                  <td style={{ textAlign: 'center' }}><span style={{ color: 'var(--border-color)' }}>—</span></td>
                </tr>
                <tr>
                  <td>Implementar un sistema centralizado de monitoreo y gestión de incidentes que permitan detectar fallas y generar alertas automáticas al área correspondiente.</td>
                  <td style={{ textAlign: 'center' }}><span style={{ color: 'var(--border-color)' }}>—</span></td>
                  <td style={{ textAlign: 'center' }}><span style={{ color: 'var(--border-color)' }}>—</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                </tr>
                <tr>
                  <td>Crear un programa interno de innovación tecnológica dónde cada año se presenten al menos 3 propuestas de mejora en procesos o servicios por parte de los equipos de trabajo.</td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge" style={{ width: '30px', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>S</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge" style={{ width: '30px', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>S</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <h4 className="card-title">Metas de TI</h4>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Meta de TI</th>
                  <th style={{ textAlign: 'center' }}>Obtención de Beneficios</th>
                  <th style={{ textAlign: 'center' }}>Optimizar Recursos</th>
                  <th style={{ textAlign: 'center' }}>Optimizar Riesgos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reducir en un 15% los costos de infraestructura (Cloud/Virtualización).</td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge" style={{ width: '30px', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>S</span></td>
                </tr>
                <tr>
                  <td>Tener un 95% de la satisfacción del cliente en servicios de TI.</td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                  <td style={{ textAlign: 'center' }}><span style={{ color: 'var(--border-color)' }}>—</span></td>
                  <td style={{ textAlign: 'center' }}><span style={{ color: 'var(--border-color)' }}>—</span></td>
                </tr>
                <tr>
                  <td>Ejecutar al menos 3 simulacros mensuales de respuesta a incidintes con documentación formal de resultados y acciones de mejora.</td>
                  <td style={{ textAlign: 'center' }}><span style={{ color: 'var(--border-color)' }}>—</span></td>
                  <td style={{ textAlign: 'center' }}><span style={{ color: 'var(--border-color)' }}>—</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                </tr>
                <tr>
                  <td>Tener un 90% del equipo técnico con certificaciones en IA/ML.</td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge" style={{ width: '30px', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>S</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge" style={{ width: '30px', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>S</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CascadaMetas;