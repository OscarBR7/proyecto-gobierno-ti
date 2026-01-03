import PDFViewer from '../PDFViewer';

function CasoNegocio() {
  return (
    <>
      <div className="card">
        <h2 className="card-title">Caso de Negocio</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
            Documento que justifica la inversión en el proyecto de TI, incluyendo análisis de costos, beneficios, riesgos y cronograma.
          </p>
          
          <h3 style={{ color: 'var(--deep-navy)', fontFamily: 'Sora', marginBottom: '1rem' }}>
            Información General
          </h3>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 'bold', width: '30%' }}>Nombre del Servicio</td>
                  <td>Consultoría e Implementación de Soluciones de IA para Optimización de Procesos</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Clave</td>
                  <td>ID 1234</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Fecha de Inicio</td>
                  <td>25 agosto 2025</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Fecha de Fin</td>
                  <td>7 enero 2026</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Administrador del Proyecto</td>
                  <td>Christian Acosta</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ color: 'var(--deep-navy)', fontFamily: 'Sora', marginTop: '2rem', marginBottom: '1rem' }}>
            Factibilidad Económica
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1))',
              padding: '1.5rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Factibilidad Operativa</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--electric-blue)' }}>$539,000</div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1))',
              padding: '1.5rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Factibilidad Tecnológica</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--electric-blue)' }}>$780,000</div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(251, 146, 60, 0.2))',
              padding: '1.5rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Total</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--amber)' }}>$1,319,000</div>
            </div>
          </div>
        </div>
      </div>

      <PDFViewer 
        src="/pdfs/Estudiofactibilidad.pdf"
        title="Estudio de Factibilidad Completo"
      />
    </>
  );
}

export default CasoNegocio;