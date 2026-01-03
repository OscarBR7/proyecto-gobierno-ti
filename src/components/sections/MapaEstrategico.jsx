import PDFViewer from '../PDFViewer';

function MapaEstrategico() {
  return (
    <div className="fade-in">
      <div className="card">
        <h2 className="card-title">Mapa Estratégico</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Representación visual de la estrategia organizacional, mostrando las relaciones causa-efecto entre las diferentes perspectivas
            del Balanced Scorecard.
          </p>

          {/* Visual representation/placeholder of the map structure */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            padding: '2rem',
            background: 'var(--bg-dark)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            alignItems: 'center'
          }}>
            <div className="map-level" style={{ textAlign: 'center', width: '100%' }}>
              <div className="badge badge-success" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Financiera</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="card" style={{ padding: '1rem', width: '200px', fontSize: '0.9rem', marginBottom: 0 }}>Optimizar Costos</div>
                <div className="card" style={{ padding: '1rem', width: '200px', fontSize: '0.9rem', marginBottom: 0 }}>Incrementar Ingresos</div>
              </div>
            </div>

            <div style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>⬆️</div>

            <div className="map-level" style={{ textAlign: 'center', width: '100%' }}>
              <div className="badge badge-warning" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Clientes</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="card" style={{ padding: '1rem', width: '200px', fontSize: '0.9rem', marginBottom: 0 }}>Satisfacción Cliente</div>
                <div className="card" style={{ padding: '1rem', width: '200px', fontSize: '0.9rem', marginBottom: 0 }}>Nuevos Mercados</div>
              </div>
            </div>

            <div style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>⬆️</div>

            <div className="map-level" style={{ textAlign: 'center', width: '100%' }}>
              <div className="badge" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Procesos Internos</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="card" style={{ padding: '1rem', width: '200px', fontSize: '0.9rem', marginBottom: 0 }}>Excelencia Operativa</div>
                <div className="card" style={{ padding: '1rem', width: '200px', fontSize: '0.9rem', marginBottom: 0 }}>Gestión de Innovación</div>
              </div>
            </div>

            <div style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>⬆️</div>

            <div className="map-level" style={{ textAlign: 'center', width: '100%' }}>
              <div className="badge badge-danger" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Aprendizaje</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="card" style={{ padding: '1rem', width: '200px', fontSize: '0.9rem', marginBottom: 0 }}>Capital Humano</div>
                <div className="card" style={{ padding: '1rem', width: '200px', fontSize: '0.9rem', marginBottom: 0 }}>Capital de Información</div>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '2rem' }}>
            <PDFViewer
              src="/pdfs/Balanced_ScoreCard.pdf"
              title="Ver Mapa Estratégico Detallado (PDF)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapaEstrategico;