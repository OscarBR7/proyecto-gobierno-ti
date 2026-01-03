function CascadaMetas() {
  return (
    <div className="card">
      <h2 className="card-title">Cascada de Metas</h2>
      <div className="card-content">
        <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
          Mapeo de las relaciones entre metas corporativas y metas de TI, mostrando relaciones primarias (P) y secundarias (S).
        </p>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Dimensión</th>
                <th>Obtención de Beneficios</th>
                <th>Optimizar Recursos</th>
                <th>Optimizar Riesgos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Optimizar costos operativos en un 10% mediante automatización</td>
                <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--electric-blue)' }}>P</td>
                <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--electric-blue)' }}>P</td>
                <td style={{ textAlign: 'center', color: 'var(--slate)' }}>S</td>
              </tr>
              <tr>
                <td>Ampliar la cartera de clientes en un 15% en el mercado PYME</td>
                <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--electric-blue)' }}>P</td>
                <td style={{ textAlign: 'center', color: 'var(--slate)' }}>/</td>
                <td style={{ textAlign: 'center', color: 'var(--slate)' }}>/</td>
              </tr>
              <tr>
                <td>Implementar sistema centralizado de monitoreo</td>
                <td style={{ textAlign: 'center', color: 'var(--slate)' }}>/</td>
                <td style={{ textAlign: 'center', color: 'var(--slate)' }}>/</td>
                <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--electric-blue)' }}>P</td>
              </tr>
              <tr>
                <td>Crear programa interno de innovación tecnológica</td>
                <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--electric-blue)' }}>P</td>
                <td style={{ textAlign: 'center', color: 'var(--slate)' }}>S</td>
                <td style={{ textAlign: 'center', color: 'var(--slate)' }}>S</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '8px' }}>
          <p><strong>Leyenda:</strong></p>
          <p>• <strong style={{ color: 'var(--electric-blue)' }}>P</strong> = Relación Primaria</p>
          <p>• <strong style={{ color: 'var(--slate)' }}>S</strong> = Relación Secundaria</p>
          <p>• <strong style={{ color: 'var(--slate)' }}>/</strong> = Sin relación directa</p>
        </div>
      </div>
    </div>
  );
}

export default CascadaMetas;