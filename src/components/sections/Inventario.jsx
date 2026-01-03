function Inventario() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Inventario de Activos</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Desglose de los activos tecnológicos (Hardware y Software) críticos para la operación del servicio.
          </p>

          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Hardware</h3>
          <div className="table-container" style={{ marginBottom: '2rem' }}>
            <table>
              <thead>
                <tr>
                  <th>Activo</th>
                  <th>Cantidad</th>
                  <th>Especificaciones</th>
                  <th>Costo Est.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Servidores de GPU</td>
                  <td>2</td>
                  <td>NVIDIA A100, 256GB RAM</td>
                  <td>$350,000</td>
                </tr>
                <tr>
                  <td>Workstations Dev</td>
                  <td>5</td>
                  <td>Ryzen 9, 64GB RAM, RTX 4080</td>
                  <td>$150,000</td>
                </tr>
                <tr>
                  <td>Storage NAS</td>
                  <td>1</td>
                  <td>40TB SSD NVMe Redundante</td>
                  <td>$40,000</td>
                </tr>
                <tr>
                  <td>Firewall Físico</td>
                  <td>1</td>
                  <td>Next-Gen Firewall Enterprise</td>
                  <td>$7,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Software</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Licencia</th>
                  <th>Tipo</th>
                  <th>Uso</th>
                  <th>Costo/Año</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Azure Cloud Credits</td>
                  <td><span className="badge">SaaS</span></td>
                  <td>Infraestructura Nube</td>
                  <td>$120,000</td>
                </tr>
                <tr>
                  <td>Power BI Pro</td>
                  <td><span className="badge">SaaS</span></td>
                  <td>Dashboards Analítica</td>
                  <td>$25,000</td>
                </tr>
                <tr>
                  <td>Github Enterprise</td>
                  <td><span className="badge">Serm</span></td>
                  <td>Repositorio Código</td>
                  <td>$15,000</td>
                </tr>
                <tr>
                  <td>Suite Seguridad</td>
                  <td><span className="badge badge-warning">Seguridad</span></td>
                  <td>EDR + Antivirus</td>
                  <td>$73,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            background: 'var(--primary-light)',
            borderRadius: 'var(--radius-sm)',
            textAlign: 'right',
            color: 'var(--text-muted)'
          }}>
            Total Activos Tecnológicos: <span style={{ color: 'var(--secondary)', fontWeight: 'bold', fontSize: '1.2rem', marginLeft: '0.5rem' }}>$780,000 MXN</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventario;