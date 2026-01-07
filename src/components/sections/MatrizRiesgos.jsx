import PDFViewer from '../PDFViewer';

function MatrizRiesgos() {
  // Datos extraídos directamente de la matriz de riesgos del PDF
  const riesgosData = [
    {
      activo: "Servidores de procesamiento",
      vulnerabilidad: "Acceso físico no controlado, fallas eléctricas",
      evento: "Daño físico o indisponibilidad",
      criticidad: "V", // Grado V según 
      controles: "Redundancia, UPS, controles físicos",
      clase: "danger"
    },
    {
      activo: "Red interna corporativa",
      vulnerabilidad: "Configuración insegura",
      evento: "Interrupción de red / Ciberataque",
      criticidad: "V", // Grado V según [cite: 7, 9]
      controles: "Firewall, segmentación, cifrado",
      clase: "danger"
    },
    {
      activo: "Bases de datos (Entrenamiento/Resultados)",
      vulnerabilidad: "Falta de segmentación, accesos excesivos",
      evento: "Exposición o corrupción de datos",
      criticidad: "V", // Grado V según 
      controles: "Cifrado, respaldos, roles y privilegios",
      clase: "danger"
    },
    {
      activo: "Modelos de IA productivos",
      vulnerabilidad: "Falta de cifrado, control de versiones deficiente",
      evento: "Pérdida o manipulación de modelos",
      criticidad: "IV", // Grado IV según [cite: 7, 9]
      controles: "Control de versiones, cifrado de modelos",
      clase: "warning"
    },
    {
      activo: "Código fuente",
      vulnerabilidad: "Repositorios inseguros",
      evento: "Pérdida de propiedad intelectual",
      criticidad: "IV", // Grado IV según [cite: 7, 8]
      controles: "Repositorios privados, control de cambios",
      clase: "warning"
    },
    {
      activo: "Registros de eventos y auditoría",
      vulnerabilidad: "Falta de integridad",
      evento: "Ocultamiento de incidentes",
      criticidad: "IV", // Grado IV según [cite: 9]
      controles: "Integridad de logs, almacenamiento seguro",
      clase: "warning"
    }
  ];

  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Matriz de Riesgos e Infraestructura Crítica</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Evaluación de riesgos basada en activos de información, vulnerabilidades y amenazas identificadas 
            para el servicio de procesamiento e IA.
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Activo de Información</th>
                  <th style={{ width: '25%' }}>Riesgo / Amenaza</th>
                  <th>Criticidad</th>
                  <th>Estrategia de Control </th>
                </tr>
              </thead>
              <tbody>
                {riesgosData.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.activo}</strong></td>
                    <td>
                      <span style={{ fontSize: '0.85rem' }}>{item.evento}</span>
                      <br />
                      <small style={{ color: 'gray' }}>Vuln: {item.vulnerabilidad}</small>
                    </td>
                    <td>
                      <span className={`badge badge-${item.clase}`}>Grado {item.criticidad}</span>
                    </td>
                    <td>{item.controles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card" style={{ padding: '1rem', marginTop: '2rem', backgroundColor: 'var(--bg-secondary)' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Documento Maestro de Riesgos</h3>
            <PDFViewer
              src="/pdfs/Matriz_de_Riesgos.pdf"
              title="Ver Matriz Completa"
            />
          </div>

          <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', borderLeft: '4px solid var(--danger)' }}>
              <strong style={{ color: 'var(--danger)', display: 'block' }}>Grado V (Crítico)</strong>
              <span style={{ fontSize: '0.9rem' }}>
                Infraestructura esencial como Servidores, Red y BD.
              </span>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '8px', borderLeft: '4px solid var(--warning)' }}>
              <strong style={{ color: 'var(--warning)', display: 'block' }}>Grado IV (Alto)</strong>
              <span style={{ fontSize: '0.9rem' }}>
                Modelos de IA, Código y Documentación. Requieren cifrado y control de versiones estricto.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatrizRiesgos;