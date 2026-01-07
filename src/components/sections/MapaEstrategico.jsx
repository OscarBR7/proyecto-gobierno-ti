import ImageViewer from '../ImageViewer';

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
          <br />
          {/* Visual representation/placeholder of the map structure */}
          <h4 className="card-title">Mapa Estratégico de Metas Corporativas</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <ImageViewer
                src="/pdfs/mapa_metas_corporativas.jpg"
                title="Mapa Estrategico de Metas Corporativas"
              />
            </div>
          </div>
          <br />
          <h4 className="card-title">Mapa Estratégico de Metas de TI</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <ImageViewer
                src="/pdfs/mapa_metas_corporativas2.jpeg"
                title="Mapa Estrategico de Metas Corporativas"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapaEstrategico;