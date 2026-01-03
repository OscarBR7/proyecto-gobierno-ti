import PDFViewer from '../PDFViewer';

function MetasCorporativas() {
  return (
    <>
      <div className="card">
        <h2 className="card-title">Metas Corporativas (Balanced Scorecard)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
            Metas estratégicas definidas utilizando COBIT y el framework de Balanced Scorecard para alinear las actividades operativas 
            con la visión y objetivos estratégicos de EmpresIA.
          </p>
          
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Perspectiva</th>
                  <th>Meta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Financiera</strong></td>
                  <td>Optimizar costos operativos en un 10% mediante automatización</td>
                </tr>
                <tr>
                  <td><strong>Clientes / Usuarios</strong></td>
                  <td>Ampliar la cartera de clientes en un 15% en el mercado PYME</td>
                </tr>
                <tr>
                  <td><strong>Procesos Internos</strong></td>
                  <td>Implementar un sistema centralizado de monitoreo y gestión de incidentes</td>
                </tr>
                <tr>
                  <td><strong>Aprendizaje y Crecimiento</strong></td>
                  <td>Crear un programa interno de innovación tecnológica con al menos 3 propuestas de mejora anuales</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <PDFViewer 
        src="/pdfs/Balanced_ScoreCard.pdf"
        title="Balanced Scorecard Completo"
      />
    </>
  );
}

export default MetasCorporativas;