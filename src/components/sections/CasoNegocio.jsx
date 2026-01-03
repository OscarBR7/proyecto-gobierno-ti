import PDFViewer from '../PDFViewer';

function CasoNegocio() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Caso de Negocio</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Justificación de la inversión en el proyecto de TI, incluyendo análisis de costos, beneficios, riesgos y cronograma.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Datos del Proyecto</h3>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Clave</span>
                  <span style={{ fontWeight: '600' }}>ID 1234</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Inicio</span>
                  <span style={{ fontWeight: '600' }}>25/08/2025</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Fin</span>
                  <span style={{ fontWeight: '600' }}>07/01/2026</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Duración</span>
                  <span style={{ fontWeight: '600' }}>136 días</span>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Resumen Financiero</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                  <span>Factibilidad Operativa</span>
                  <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>$539,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                  <span>Factibilidad Tecnológica</span>
                  <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>$780,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', fontSize: '1.2rem' }}>
                  <span style={{ fontWeight: '600' }}>Total</span>
                  <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>$1,319,000</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="card-title" style={{ fontSize: '1.4rem' }}>Factibilidad Económica Detallada</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Monto</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Recursos Humanos (Nómina)</td>
                  <td>$539,000</td>
                  <td><span className="badge badge-warning">Operativo</span></td>
                </tr>
                <tr>
                  <td>Hardware (Servidores, PCs)</td>
                  <td>$547,000</td>
                  <td><span className="badge">Tecnológico</span></td>
                </tr>
                <tr>
                  <td>Software (Licencias)</td>
                  <td>$233,000</td>
                  <td><span className="badge">Tecnológico</span></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <div className="card" style={{ padding: '1rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Documento Completo</h3>
        <PDFViewer
          src="/pdfs/Estudiofactibilidad.pdf"
          title="Ver Estudio de Factibilidad"
        />
      </div>
    </div>
  );
}

export default CasoNegocio;