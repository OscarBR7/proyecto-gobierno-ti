function MatrizRiesgos() {
  return (
    <div className="card">
      <h2 className="card-title">Matriz de Riesgos (ISO 27000)</h2>
      <div className="card-content">
        <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
          Análisis de riesgos basado en la norma ISO 27000, identificando amenazas, vulnerabilidades y controles a implementar.
        </p>
        
        <h3 style={{ color: 'var(--deep-navy)', fontFamily: 'Sora', marginBottom: '1rem' }}>
          Principales Riesgos Identificados:
        </h3>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Riesgo</th>
                <th>Impacto</th>
                <th>Probabilidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calidad de los datos</td>
                <td style={{ color: 'var(--amber)', fontWeight: 'bold' }}>Alto</td>
                <td style={{ color: 'var(--amber)', fontWeight: 'bold' }}>Alta</td>
              </tr>
              <tr>
                <td>Resistencia al cambio</td>
                <td style={{ color: 'var(--amber)', fontWeight: 'bold' }}>Alto</td>
                <td style={{ color: 'var(--slate)' }}>Moderada</td>
              </tr>
              <tr>
                <td>Fallas en la integración</td>
                <td style={{ color: 'var(--amber)', fontWeight: 'bold' }}>Muy Alto</td>
                <td style={{ color: 'var(--amber)', fontWeight: 'bold' }}>Alta</td>
              </tr>
              <tr>
                <td>Cumplimiento normativo y ético</td>
                <td style={{ color: 'var(--amber)', fontWeight: 'bold' }}>Alto</td>
                <td style={{ color: 'var(--amber)', fontWeight: 'bold' }}>Alta</td>
              </tr>
              <tr>
                <td>Dependencia tecnológica</td>
                <td style={{ color: 'var(--amber)', fontWeight: 'bold' }}>Muy Alto</td>
                <td style={{ color: 'var(--slate)' }}>Moderada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MatrizRiesgos;