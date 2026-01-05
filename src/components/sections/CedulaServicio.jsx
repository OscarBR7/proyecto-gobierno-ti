import PDFViewer from '../PDFViewer';

function CedulaServicio() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Cédula de Servicio (ITIL)</h2>
        <div className="card-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 'bold', width: '30%', background: 'var(--bg-dark)' }}>ID Servicio</td>
                    <td>1234</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold', background: 'var(--bg-dark)' }}>Nombre</td>
                    <td>EmpresIA</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold', background: 'var(--bg-dark)' }}>Departamento</td>
                    <td>Cómputo</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold', background: 'var(--bg-dark)' }}>Nombre del servicio</td>
                    <td>Consultoría e Implementación de Soluciones de Inteligencia Artificial para Optimización de Procesos Empresariales</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Alcance del Servicio</h3>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Evaluación de procesos actuales y detección de oportunidades para implementar IA.</li>
                <li style={{ marginBottom: '0.5rem' }}>Diseño y desarrollo de modelos predictivos, sistemas de automatización y análisis avanzado de datos.</li>
                <li style={{ marginBottom: '0.5rem' }}>Integración con sistemas existentes para asegurar compatibilidad y funcionamiento continuo.</li>
                <li style={{ marginBottom: '0.5rem' }}>Aseguramiento del cumplimiento con normativas de seguridad, privacidad y gestión de datos.</li>
                <li style={{ marginBottom: '0.5rem' }}>Capacitación al personal y acompañamiento en la adopción del nuevo flujo tecnológico.</li>
              </ul>
            </div>
          </div>

          <h3 className="card-title" style={{ fontSize: '1.4rem' }}>Niveles de Servicio (SLA)</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Tipo de nivel de servicio</th>
                  <th>Compromiso del nivel de servicio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Disponibilidad del Sistema</td>
                  <td>Acceso a la plataforma de IA y APIs de inferencia con una disponibilidad del 95%, salvo mantenimientos programados notificados con al menos 24 horas de anticipación.</td>
                </tr>
                <tr>
                  <td>Soporte vía remota y presencial</td>
                  <td>Respuesta a solicitudes de soporte remoto en un máximo de 30 minutos. Soporte presencial dentro de las 4 horas hábiles posteriores al reporte.</td>
                </tr>
                <tr>
                  <td>Confidencialidad</td>
                  <td>Garantizar la protección de datos utilizados para entrenamiento y uso del modelo conforme a la LFPDPPP, ISO 27001 y políticas internas de privacidad. Acceso estrictamente controlado y monitoreado.</td>
                </tr>
                <tr>
                  <td>Seguridad</td>
                  <td>Monitoreo continuo de la integridad del modelo y su infraestructura. Aplicación de actualizaciones críticas y parches de seguridad en un plazo menor a 12 horas tras ser identificados. Verificación periódica de logs y accesos.</td>
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