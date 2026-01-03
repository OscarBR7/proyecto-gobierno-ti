import PDFViewer from '../PDFViewer';

function CedulaServicio() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Cédula de Servicio (ITIL)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Definición formal del servicio TI, estableciendo alcances, responsabilidades y niveles de servicio acordados.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div className="table-container">
              <table>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 'bold', width: '30%', background: 'var(--bg-dark)' }}>ID Servicio</td>
                    <td>1234</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold', background: 'var(--bg-dark)' }}>Nombre</td>
                    <td>Consultoría IA</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold', background: 'var(--bg-dark)' }}>Propietario</td>
                    <td>Dirección de TI</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold', background: 'var(--bg-dark)' }}>Criticidad</td>
                    <td><span className="badge badge-danger">Alta</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Alcance del Servicio</h3>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Análisis de procesos empresariales actuales.</li>
                <li style={{ marginBottom: '0.5rem' }}>Diseño de modelos de IA predictivos.</li>
                <li style={{ marginBottom: '0.5rem' }}>Implementación de infraestructura en Azure.</li>
                <li style={{ marginBottom: '0.5rem' }}>Capacitación y soporte post-implementación.</li>
              </ul>
            </div>
          </div>

          <h3 className="card-title" style={{ fontSize: '1.4rem' }}>Niveles de Servicio (SLA)</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Métrica</th>
                  <th>Objetivo</th>
                  <th>Penalización</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Disponibilidad del Sistema</td>
                  <td style={{ fontWeight: 'bold', color: 'var(--success)' }}>99.9%</td>
                  <td>Descuento 5% mensual</td>
                </tr>
                <tr>
                  <td>Tiempo de Respuesta (Soporte)</td>
                  <td style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>&lt; 4 horas</td>
                  <td>Revisión de contrato</td>
                </tr>
                <tr>
                  <td>Resolución de Incidentes Críticos</td>
                  <td style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>&lt; 8 horas</td>
                  <td>Auditoría de servicio</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <div className="card" style={{ padding: '1rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Documento Completo</h3>
        <PDFViewer
          src="/pdfs/CEDULA_DE_SERVICIO.pdf"
          title="Ver Cédula de Servicio"
        />
      </div>
    </div>
  );
}

export default CedulaServicio;