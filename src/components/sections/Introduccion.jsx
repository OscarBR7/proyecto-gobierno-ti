function Introduccion() {
  return (
    <div className="fade-in">
      <div className="card">
        <div style={{
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '1.5rem',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ marginTop: '0.5rem', marginBottom: 0 }}>Introducción</h2>
          </div>
        </div>

        <div className="card-content" style={{ display: 'grid', gap: '2rem' }}>

          <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
              En la actualidad, las empresas enfrentan un entorno <strong style={{ color: 'var(--secondary)' }}>altamente competitivo y dinámico</strong>, impulsado por la transformación digital y
              la necesidad constante de optimizar sus operaciones. Sin embargo, muchos procesos empresariales continúan dependiendo de tareas
              manuales, decisiones basadas en la intuición y sistemas fragmentados que limitan la eficiencia y la capacidad de respuesta ante
              los cambios del mercado.
            </p>

            <div style={{
              background: 'rgba(14, 165, 233, 0.05)',
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--secondary)'
            }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--secondary)', border: 'none', marginBottom: '1rem' }}>
                El Rol de la Inteligencia Artificial
              </h3>
              <p>
                La IA se ha convertido en una herramienta estratégica para mejorar la productividad, automatizar
                procesos, analizar grandes volúmenes de datos y generar información útil para la toma de decisiones. Su aplicación abarca desde la
                automatización de tareas repetitivas hasta la predicción de comportamientos de clientes, detección de anomalías o mantenimiento
                predictivo.
              </p>
            </div>

            <p>
              Frente a este escenario, surge la necesidad de ofrecer servicios especializados que acompañen a las empresas en la adopción de
              tecnologías inteligentes. En este contexto, se propone el proyecto <strong>Consultoría e Implementación de Soluciones de Inteligencia
                Artificial para Optimización de Procesos Empresariales</strong>, cuyo objetivo es brindar asesoría técnica y estratégica para el diseño,
              desarrollo e implementación de soluciones de IA adaptadas a las necesidades específicas de cada organización.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduccion;