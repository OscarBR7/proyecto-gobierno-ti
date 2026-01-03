function MisionVisionValores() {
  const valores = [
    { title: 'Innovación', desc: 'Fomentamos la creación de soluciones disruptivas basadas en IA para transformar los procesos empresariales.', icon: '💡' },
    { title: 'Ética y Transparencia', desc: 'Aplicamos la inteligencia artificial con responsabilidad, garantizando el uso ético de los datos y algoritmos.', icon: '⚖️' },
    { title: 'Compromiso', desc: 'Trabajamos en alianza con cada organización para ofrecer soluciones a la medida de sus necesidades.', icon: '🤝' },
    { title: 'Excelencia Técnica', desc: 'Nos mantenemos en actualización constante en tecnologías de IA para garantizar la calidad y eficiencia.', icon: '⚙️' },
    { title: 'Colaboración', desc: 'Promovemos el trabajo en equipo y la co-creación con nuestros clientes para alcanzar resultados de alto impacto.', icon: '👥' },
    { title: 'Sostenibilidad', desc: 'Buscamos que nuestras soluciones contribuyan al crecimiento de las empresas sin descuidar el impacto social.', icon: '🌱' }
  ];

  return (
    <div className="fade-in">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {/* Misión */}
        <div className="card" style={{ marginBottom: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🚀</span>
            <h2 className="card-title" style={{ marginBottom: 0 }}>Misión</h2>
          </div>
          <div className="card-content">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Ofrecer soluciones de <strong style={{ color: 'var(--secondary)' }}>inteligencia artificial innovadoras</strong> y confiables que optimicen los procesos empresariales, impulsen la
              eficiencia operativa y faciliten la toma de decisiones estratégicas, generando valor sostenible para nuestros clientes.
            </p>
          </div>
        </div>

        {/* Visión */}
        <div className="card" style={{ marginBottom: 0, borderTop: '4px solid var(--accent)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>👁️</span>
            <h2 className="card-title" style={{ marginBottom: 0 }}>Visión</h2>
          </div>
          <div className="card-content">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Ser la empresa <strong style={{ color: 'var(--accent)' }}>líder en servicios de IA en América Latina</strong>, reconocida por transformar los procesos de negocio
              mediante tecnologías inteligentes que promuevan la competitividad, la innovación y el crecimiento digital.
            </p>
          </div>
        </div>
      </div>

      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }} className="text-gradient">Nuestros Valores</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }} className="slide-up">
        {valores.map((valor, index) => (
          <div key={index} className="card" style={{
            marginBottom: 0,
            padding: '2rem',
            borderLeft: `4px solid ${index % 2 === 0 ? 'var(--secondary)' : 'var(--accent)'}`
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{valor.icon}</div>
            <h3 style={{
              color: 'var(--text-main)',
              fontFamily: 'Poppins',
              marginBottom: '1rem',
              fontSize: '1.25rem'
            }}>
              {valor.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
              {valor.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MisionVisionValores;