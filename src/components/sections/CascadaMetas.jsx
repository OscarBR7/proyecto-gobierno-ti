function CascadaMetas() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Cascada de Metas (Mapping)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Mapeo de relaciones entre metas corporativas y de TI. <br />
            <span style={{ fontSize: '0.9rem' }}>P = Primaria (Fuerte impacto) | S = Secundaria (Impacto indirecto)</span>
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Meta Corporativa</th>
                  <th style={{ textAlign: 'center' }}>Obtención de Beneficios</th>
                  <th style={{ textAlign: 'center' }}>Optimizar Recursos</th>
                  <th style={{ textAlign: 'center' }}>Optimizar Riesgos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Optimizar costos operativos (10%)</td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge" style={{ width: '30px', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>S</span></td>
                </tr>
                <tr>
                  <td>Ampliar cartera de clientes (15%)</td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                  <td style={{ textAlign: 'center' }}><span style={{ color: 'var(--border-color)' }}>—</span></td>
                  <td style={{ textAlign: 'center' }}><span style={{ color: 'var(--border-color)' }}>—</span></td>
                </tr>
                <tr>
                  <td>Sistema de monitoreo centralizado</td>
                  <td style={{ textAlign: 'center' }}><span style={{ color: 'var(--border-color)' }}>—</span></td>
                  <td style={{ textAlign: 'center' }}><span style={{ color: 'var(--border-color)' }}>—</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                </tr>
                <tr>
                  <td>Programa de innovación tecnológica</td>
                  <td style={{ textAlign: 'center' }}><span className="badge badge-success" style={{ width: '30px', justifyContent: 'center' }}>P</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge" style={{ width: '30px', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>S</span></td>
                  <td style={{ textAlign: 'center' }}><span className="badge" style={{ width: '30px', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>S</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CascadaMetas;