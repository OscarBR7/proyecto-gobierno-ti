import PDFViewer from '../PDFViewer';

function BIAOperacional() {
  // Datos basados en las tablas de recursos críticos de BIA_Operacional.pdf
  const recursos = [
    { categoria: 'Personal', icon: '👥', desc: 'Roles técnicos y de gestión (4 de Alta Prioridad)' },
    { categoria: 'Tecnología', icon: '💻', desc: 'Entornos de IA, Red y Servicios Básicos' },
    { categoria: 'Infraestructura', icon: '🏢', desc: 'Oficinas y Equipamiento de Desarrollo' },
    { categoria: 'Información', icon: '📊', desc: 'Modelos, Código y Bases de Datos' }
  ];

  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Análisis de Impacto (BIA Operacional)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Evaluación de recursos críticos (Gente, Datos, TIC e Infraestructura) necesarios para mantener el desarrollo e implementación de soluciones de IA.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {recursos.map((recurso, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{recurso.icon}</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--secondary)' }}>{recurso.count}</div>
                <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>{recurso.categoria}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{recurso.desc}</div>
              </div>
            ))}
          </div>

          <div className="card" style={{ background: 'var(--bg-dark)', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Personal Crítico y Prioridades</h3>
            <div style={{ columns: '2', columnGap: '2rem' }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>⭐ <strong>Líder de proyecto de IA</strong> </li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>⭐ <strong>Científico de datos</strong> </li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>⭐ <strong>Ingeniero de IA</strong> </li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>⭐ <strong>Especialista en seguridad</strong></li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>🔹 Analista de procesos </li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>🔹 Ingeniero de software </li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>🔹 Especialista QA </li>
                <li style={{ padding: '0.5rem 0' }}>🔹 Soporte técnico</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div className="card" style={{ margin: 0, padding: '1rem' }}>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Datos e Información (Prio 1)</h4>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <li>Modelos de IA entrenados (Electrónico)</li>
                <li>Código fuente (Electrónico)</li>
                <li>Bases de datos de entrenamiento (Electrónico)</li>
              </ul>
            </div>
            <div className="card" style={{ margin: 0, padding: '1rem' }}>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Sistemas y Servicios (Prio 1)</h4>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <li>Entornos de desarrollo IA (Local/Plataformas)</li>
                <li>Servicio de Internet (1GB Mensual)</li>
                <li>Servicio de Electricidad (CFE)</li>
              </ul>
            </div>
          </div>

          <div className="card" style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Documento BIA Operacional Maestro</h3>
            <PDFViewer
              src="/pdfs/BIA_Operacional.pdf"
              title="Ver BIA Operacional"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BIAOperacional;