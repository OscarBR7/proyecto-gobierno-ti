function Portada() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
      position: 'relative',
      overflow: 'hidden'
    }} className="fade-in">

      {/* Decorative blurred text */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '10rem',
        fontWeight: '900',
        opacity: 0.03,
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: 0
      }}>
        EMPRESIA
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
        <div style={{
          display: 'inline-block',
          padding: '0.5rem 1.5rem',
          borderRadius: '50px',
          background: 'rgba(99, 102, 241, 0.1)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          color: 'var(--accent)',
          fontWeight: '600',
          marginBottom: '2rem',
          fontSize: '0.9rem',
          letterSpacing: '1px'
        }} className="slide-up">
          PROYECTO FINAL • GOBIERNO DE TI
        </div>

        <h1 style={{
          fontSize: '4.5rem',
          fontWeight: '800',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, white 0%, var(--secondary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-1px'
        }} className="slide-up">
          EmpresIA
        </h1>

        <p style={{
          fontSize: '1.5rem',
          color: 'var(--text-muted)',
          maxWidth: '700px',
          margin: '0 auto 4rem auto',
          lineHeight: 1.6
        }} className="slide-up">
          Consultoría e Implementación de Soluciones de <span style={{ color: 'var(--secondary)' }}>Inteligencia Artificial</span> para Optimización de Procesos Empresariales
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          textAlign: 'left'
        }} className="slide-up">

          <div className="card" style={{ padding: '2rem', background: 'rgba(30, 41, 59, 0.4)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Equipo de Desarrollo
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>AO</div>
                <div>
                  <div style={{ fontWeight: '600' }}>Acosta Osorio Christian</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Desarrollador Full Stack</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--highlight) 0%, var(--success) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--bg-dark)' }}>BR</div>
                <div>
                  <div style={{ fontWeight: '600' }}>Briones Rayo Oscar</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Arquitecto de Soluciones</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--warning) 0%, var(--danger) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>NV</div>
                <div>
                  <div style={{ fontWeight: '600' }}>Nava Villar Eric</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Analista de Datos</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '2rem', background: 'rgba(30, 41, 59, 0.4)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Detalles Académicos
            </h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Institución</div>
                <div style={{ fontWeight: '600' }}>IPN - ESCOM</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Grupo</div>
                <div style={{ fontWeight: '600' }}>7CV2</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Profesora</div>
                <div style={{ fontWeight: '600' }}>Rocío Palacios Solano</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Estado</div>
                <div style={{ fontWeight: '600', color: 'var(--success)' }}>Entregado • Enero 2026</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Portada;