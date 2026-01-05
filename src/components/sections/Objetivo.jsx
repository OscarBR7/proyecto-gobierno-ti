function Objetivo() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Objetivo del Servicio de TI</h2>
        <div className="card-content">
          <div style={{
            background: 'var(--bg-dark)',
            padding: '2rem',
            borderRadius: 'var(--radius-md)',
            borderLeft: '4px solid var(--secondary)',
            border: '1px solid var(--border-color)'
          }}>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: 'var(--text-main)',
              fontWeight: '500',
              fontStyle: 'italic'
            }}>
              "Implementar soluciones de inteligencia artificial que optimicen los procesos empresariales mediante automatización, análisis
              predictivo y toma de decisiones basada en datos, impulsando la eficiencia operativa y la competitividad organizacional.
              "
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objetivo;