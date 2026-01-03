function Objetivo() {
  return (
    <div className="card">
      <h2 className="card-title">Objetivo del Servicio de TI</h2>
      <div className="card-content">
        <div style={{
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1))',
          padding: '2rem',
          borderRadius: '12px',
          borderLeft: '4px solid var(--electric-blue)'
        }}>
          <p style={{
            fontSize: '1.15rem',
            lineHeight: '1.8',
            color: 'var(--text-primary)',
            fontWeight: '500'
          }}>
            Implementar soluciones de inteligencia artificial que optimicen los procesos empresariales mediante automatización, 
            análisis predictivo y toma de decisiones basada en datos, impulsando la eficiencia operativa y la competitividad organizacional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Objetivo;