import PDFViewer from '../PDFViewer';

function Inventario() {
  // Datos extraídos del Inventario de Activos de Información (IPN/EmpresIA)
  const activos = [
    {
      id: "EMP_HW_01",
      nombre: "Servidores de procesamiento",
      descripcion: "Infraestructura para análisis y procesamiento de datos",
      clasificacion: "Crítico",
      responsable: "Área de Cómputo",
      proceso: "EMP_IA_PROC_01",
      clase: "danger"
    },
    {
      id: "EMP_SW_01",
      nombre: "Modelos de IA",
      descripcion: "Modelos entrenados y validados para clientes",
      clasificacion: "Crítico",
      responsable: "Especialista IA/ML",
      proceso: "EMP_IA_PROC_02",
      clase: "danger"
    },
    {
      id: "EMP_DB_01",
      nombre: "Bases de datos",
      descripcion: "Almacenamiento de datasets y resultados",
      clasificacion: "Crítico",
      responsable: "Analista de Datos",
      proceso: "EMP_IA_PROC_02",
      clase: "danger"
    },
    {
      id: "EMP_MON_01",
      nombre: "Sistema de monitoreo",
      descripcion: "Dashboards y alertas de rendimiento",
      clasificacion: "No crítico",
      responsable: "Soporte Técnico",
      proceso: "EMP_IA_PROC_03",
      clase: "secondary"
    }
  ];

  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Inventario de Activos de Información (EmpresIA)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Registro formal de activos de hardware, software y datos bajo la normativa del IPN 
            para la optimización de procesos empresariales.
          </p>

          <div className="table-container" style={{ marginBottom: '2rem' }}>
            <table>
              <thead>
                <tr>
                  <th>ID Activo</th>
                  <th>Activo de Información</th>
                  <th>Clasificación</th>
                  <th>Responsable</th>
                </tr>
              </thead>
              <tbody>
                {activos.map((activo, index) => (
                  <tr key={index}>
                    <td><code>{activo.id}</code></td>
                    <td>
                      <strong>{activo.nombre}</strong><br />
                      <small style={{ color: 'var(--text-muted)' }}>{activo.descripcion}</small>
                    </td>
                    <td>
                      <span className={`badge badge-${activo.clase}`}>
                        {activo.clasificacion}
                      </span>
                    </td>
                    <td>{activo.responsable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div className="card" style={{ margin: 0, padding: '1.2rem', borderLeft: '4px solid var(--secondary)' }}>
              <h4 style={{ marginBottom: '0.8rem' }}>Procesos Relacionados</h4>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '1.2rem' }}>
                <li><strong>PROC 01:</strong> Diagnóstico y análisis.</li>
                <li><strong>PROC 02:</strong> Desarrollo y entrenamiento IA.</li>
                <li><strong>PROC 03:</strong> Monitoreo y soporte continuo.</li>
              </ul>
            </div>
            <div className="card" style={{ margin: 0, padding: '1.2rem', borderLeft: '4px solid var(--success)' }}>
              <h4 style={{ marginBottom: '0.8rem' }}>Factores de Éxito</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Calidad de datos, infraestructura adecuada y monitoreo constante de métricas.
              </p>
            </div>
          </div>

          <div className="card" style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Documento Oficial IPN</h3>
            <PDFViewer
              src="/pdfs/Inventario_de_Activos.pdf"
              title="Ver Inventario Completo"
            />
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            background: 'var(--bg-dark)',
            borderRadius: 'var(--radius-sm)',
            textAlign: 'right',
            border: '1px solid var(--border-color)'
          }}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventario;