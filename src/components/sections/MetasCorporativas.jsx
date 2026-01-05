import PDFViewer from '../PDFViewer';

function MetasCorporativas() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Metas Corporativas (Balanced ScoreCard)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Las Metas estratégicas definidas utilizando COBIT para alinear las actividades operativas
            con la visión y objetivos estratégicos de EmpresIA.
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Perspectiva</th>
                  <th>Meta Estratégica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="badge badge-success">Financiera</span></td>
                  <td>Optimizar costos operativos en un 10% mediante automatización.</td>
                </tr>
                <tr>
                  <td><span className="badge badge-warning">Clientes / Usuarios</span></td>
                  <td>Ampliar la cartera de clientes en un 15% en el mercado PYME.</td>
                </tr>
                <tr>
                  <td><span className="badge">Procesos Internos</span></td>
                  <td>Implementar un sistema centralizado de monitoreo y gestión de incidentes que permitan detectar fallas y generar alertas automáticas al área correspondiente.</td>
                </tr>
                <tr>
                  <td><span className="badge badge-danger">Aprendizaje</span></td>
                  <td>Crear un programa interno de innovación tecnológica dónde cada año se presenten al menos 3 propuestas de mejora en procesos o servicios por parte de los equipos de trabajo.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: '1rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Documentación Adjunta</h3>
        <PDFViewer
          src="/pdfs/Balanced_ScoreCard.pdf"
          title="Ver Balanced Scorecard Completo"
        />
      </div>
    </div>
  );
}

export default MetasCorporativas;