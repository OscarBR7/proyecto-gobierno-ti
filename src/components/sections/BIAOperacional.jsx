function BIAOperacional() {
  const recursos = [
    { categoria: 'Personal', count: '13', icon: '👥', desc: 'Equipo técnico y líderes' },
    { categoria: 'Tecnología', count: '8', icon: '💻', desc: 'Servidores y Software' },
    { categoria: 'Infraestructura', count: '5', icon: '🏢', desc: 'Oficinas y Cloud' },
    { categoria: 'Información', count: '7', icon: '📊', desc: 'Bases de datos y Docs' }
  ];

  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Análisis de Impacto (BIA Operacional)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Identificación de recursos operativos esenciales para la continuidad del servicio.
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

          <div className="card" style={{ background: 'var(--bg-dark)', marginBottom: 0 }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Personal Clave</h3>
            <div style={{ columns: '2', columnGap: '2rem' }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>👑 Director de proyectos de IA</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>🧠 Consultor en IA</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>🔬 Científico de datos (2)</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>⚙️ Ingeniero de datos (2)</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>🤖 Desarrollador ML (2)</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>🔄 Especialista RPA</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>📊 Analista de procesos</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>🔗 Especialista integración</li>
                <li style={{ padding: '0.5rem 0' }}>🛠️ Soporte técnico (2)</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BIAOperacional;