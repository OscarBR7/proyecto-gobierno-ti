import ImageViewer from '../ImageViewer';

function Arquitectura() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Arquitectura del Servicio</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Diagrama lógico que muestra los componentes de infraestructura necesaria para el servicio de consultoría e implementación de soluciones de IA.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--secondary)', marginBottom: '1.5rem', borderLeft: '3px solid var(--secondary)', paddingLeft: '1rem' }}>
                Componentes Principales
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                {[
                  { title: "Portal de Carga", desc: "Interfaz segura para subida de datasets por clientes." },
                  { title: "Motor de Preprocesamiento", desc: "Pipeline ETL para limpieza y normalización." },
                  { title: "Cluster de Entrenamiento", desc: "Infraestructura híbrida (Local + Nube) para training." },
                  { title: "Repositorio de Modelos", desc: "Control de versiones y registro de modelos ML." },
                  { title: "API de Despliegue", desc: "Endpoints para inferencia en tiempo real." },
                  { title: "Sistema de Monitoreo", desc: "Dashboards de drift y performance." }
                ].map((item, i) => (
                  <li key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', borderLeft: '2px solid var(--border-color)' }}>
                    <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.25rem' }}>{item.title}</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ImageViewer
                src="/pdfs/Arquitectura_del_servicio.png"
                title="Diagrama de Arquitectura Técnica"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arquitectura;