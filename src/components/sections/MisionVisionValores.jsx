function MisionVisionValores() {
  const valores = [
    { title: 'Innovación', desc: 'Fomentamos la creación de soluciones disruptivas basadas en IA para transformar los procesos empresariales.' },
    { title: 'Ética y Transparencia', desc: 'Aplicamos la inteligencia artificial con responsabilidad, garantizando el uso ético de los datos y algoritmos.' },
    { title: 'Compromiso con el Cliente', desc: 'Trabajamos en alianza con cada organización para ofrecer soluciones a la medida de sus necesidades.' },
    { title: 'Excelencia Técnica', desc: 'Nos mantenemos en actualización constante en tecnologías de IA para garantizar la calidad y eficiencia de nuestros servicios.' },
    { title: 'Colaboración', desc: 'Promovemos el trabajo en equipo y la co-creación con nuestros clientes para alcanzar resultados de alto impacto.' },
    { title: 'Sostenibilidad', desc: 'Buscamos que nuestras soluciones contribuyan al crecimiento de las empresas sin descuidar el impacto social y ambiental.' }
  ];

  return (
    <>
      <div className="card">
        <h2 className="card-title">Misión</h2>
        <div className="card-content">
          <div style={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1))',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Ofrecer soluciones de inteligencia artificial innovadoras y confiables que optimicen los procesos empresariales, impulsen la 
              eficiencia operativa y faciliten la toma de decisiones estratégicas, generando valor sostenible para nuestros clientes y sus organizaciones.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Visión</h2>
        <div className="card-content">
          <div style={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1))',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Ser la empresa líder en servicios de inteligencia artificial en América Latina, reconocida por transformar los procesos de negocio 
              mediante tecnologías inteligentes que promuevan la competitividad, la innovación y el crecimiento digital de las empresas.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Valores</h2>
        <div className="card-content">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {valores.map((valor, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '2px solid var(--electric-blue)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{
                  color: 'var(--electric-blue)',
                  fontFamily: 'Sora',
                  marginBottom: '0.75rem',
                  fontSize: '1.1rem'
                }}>
                  {valor.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {valor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MisionVisionValores;