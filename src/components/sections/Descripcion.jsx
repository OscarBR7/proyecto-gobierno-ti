function Descripcion() {
  const tecnologias = ['TensorFlow', 'Power BI', 'Azure Machine Learning', 'Python', 'RPA Tools', 'APIs REST'];

  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Descripción del Servicio</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Dirigido a empresas de distintos sectores que buscan mejorar la eficiencia y competitividad de sus procesos mediante el uso de
            inteligencia artificial. El servicio abarca desde el diagnóstico y análisis hasta la implementación de soluciones automatizadas.
          </p>

          <h3 style={{ color: 'var(--text-main)', fontFamily: 'Poppins', marginTop: '2rem', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
            Servicios Incluidos
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              "Diagnóstico de procesos y detección de automatización",
              "Desarrollo de modelos ML (Predicción, Clasificación)",
              "Implementación de RPA para tareas repetitivas",
              "Integración con ERP/CRM y bases de datos",
              "Monitoreo y mantenimiento de modelos",
              "Consultoría estratégica para transformación digital"
            ].map((item, i) => (
              <div key={i} style={{
                padding: '1rem',
                background: 'var(--bg-dark)',
                borderRadius: 'var(--radius-sm)',
                borderLeft: '2px solid var(--secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: 'var(--secondary)' }}>•</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item}</span>
              </div>
            ))}
          </div>

          <h3 style={{ color: 'var(--text-main)', fontFamily: 'Poppins', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.2rem' }}>
            Stack Tecnológico
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {tecnologias.map(tech => (
              <span key={tech} className="badge" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Descripcion;