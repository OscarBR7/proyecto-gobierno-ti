function Descripcion() {
  const tecnologias = ['TensorFlow', 'Power BI', 'Azure Machine Learning', 'Python', 'RPA Tools', 'APIs REST'];

  return (
    <div className="card">
      <h2 className="card-title">Descripción del Servicio</h2>
      <div className="card-content">
        <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          Dirigido a empresas de distintos sectores que buscan mejorar la eficiencia y competitividad de sus procesos mediante el uso de 
          inteligencia artificial. El servicio abarca desde el diagnóstico y análisis de procesos hasta la implementación de soluciones 
          personalizadas basadas en modelos predictivos, automatización y análisis de datos.
        </p>
        
        <h3 style={{ color: 'var(--deep-navy)', fontFamily: 'Sora', marginTop: '2rem', marginBottom: '1rem' }}>
          Servicios Incluidos:
        </h3>
        <ul style={{ lineHeight: '2' }}>
          <li>Diagnóstico de procesos empresariales y detección de áreas susceptibles a automatización mediante IA</li>
          <li>Desarrollo de modelos de Machine Learning para predicción, clasificación, análisis de datos y optimización</li>
          <li>Implementación de sistemas de automatización inteligente (RPA) para tareas repetitivas</li>
          <li>Integración de soluciones de IA con plataformas existentes (ERP, CRM, bases de datos, APIs)</li>
          <li>Monitoreo, mantenimiento y mejora continua de los modelos de IA implementados</li>
          <li>Consultoría estratégica para adopción tecnológica, escalabilidad y transformación digital</li>
        </ul>

        <h3 style={{ color: 'var(--deep-navy)', fontFamily: 'Sora', marginTop: '2rem', marginBottom: '1rem' }}>
          Tecnologías Utilizadas:
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
          {tecnologias.map(tech => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Descripcion;