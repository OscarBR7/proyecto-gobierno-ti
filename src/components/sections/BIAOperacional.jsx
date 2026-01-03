function BIAOperacional() {
  const recursos = [
    { categoria: 'Personal', count: '13', icon: '👥' },
    { categoria: 'Tecnología', count: '8', icon: '💻' },
    { categoria: 'Infraestructura', count: '5', icon: '🏢' },
    { categoria: 'Información', count: '7', icon: '📊' }
  ];

  return (
    <div className="card">
      <h2 className="card-title">Análisis de Impacto al Negocio (BIA) - Nivel Operacional</h2>
      <div className="card-content">
        <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
          Análisis detallado del impacto operativo que generaría una interrupción en los servicios de consultoría e implementación 
          de IA que ofrece EmpresIA.
        </p>
        
        <h3 style={{ color: 'var(--deep-navy)', fontFamily: 'Sora', marginBottom: '1rem' }}>
          Recursos Críticos Identificados:
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {recursos.map((recurso, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1))',
              padding: '1.5rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{recurso.icon}</div>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--electric-blue)',
                marginBottom: '0.25rem'
              }}>
                {recurso.count}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{recurso.categoria}</div>
            </div>
          ))}
        </div>

        <h3 style={{ color: 'var(--deep-navy)', fontFamily: 'Sora', marginTop: '2rem', marginBottom: '1rem' }}>
          Personal Clave:
        </h3>
        <ul style={{ lineHeight: '2', marginBottom: '2rem' }}>
          <li>Director de proyectos de IA</li>
          <li>Consultor en inteligencia artificial</li>
          <li>Científico de datos (Data Scientist) - 2 personas</li>
          <li>Ingeniero de datos (Data Engineer) - 2 personas</li>
          <li>Desarrollador de modelos de Machine Learning - 2 personas</li>
          <li>Especialista en automatización (RPA Developer)</li>
          <li>Analista de procesos de negocio</li>
          <li>Especialista en integración de sistemas</li>
          <li>Técnico de soporte e implementación - 2 personas</li>
        </ul>
      </div>
    </div>
  );
}

export default BIAOperacional;