import PDFViewer from '../PDFViewer';

function MetasCorporativas() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Metas Corporativas (BSC)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Metas estratégicas definidas utilizando COBIT y el framework de Balanced Scorecard para alinear las actividades operativas
            con la visión y objetivos estratégicos de EmpresIA.
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Perspectiva</th>
                  <th>Meta Estratégica</th>
                  <th style={{ width: '15%' }}>KPI Objetivo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="badge badge-success">Financiera</span></td>
                  <td>Optimizar costos operativos mediante automatización</td>
                  <td style={{ fontWeight: 'bold' }}>10% 📉</td>
                </tr>
                <tr>
                  <td><span className="badge badge-warning">Clientes</span></td>
                  <td>Ampliar la cartera de clientes en mercado PYME</td>
                  <td style={{ fontWeight: 'bold' }}>15% 📈</td>
                </tr>
                <tr>
                  <td><span className="badge">Procesos</span></td>
                  <td>Sistema centralizado de monitoreo y gestión de incidentes</td>
                  <td style={{ fontWeight: 'bold' }}>100% ✅</td>
                </tr>
                <tr>
                  <td><span className="badge badge-danger">Aprendizaje</span></td>
                  <td>Programa interno de innovación tecnológica (propuestas/año)</td>
                  <td style={{ fontWeight: 'bold' }}>3 💡</td>
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