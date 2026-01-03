function PDFViewer({ src, title }) {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden', border: 'none' }}>
      <div style={{
        background: 'var(--primary-light)',
        borderBottom: '1px solid var(--border-color)',
        padding: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '1rem', color: 'var(--text-main)' }}>
          📄 {title}
        </div>
        <a
          href={src}
          download
          style={{
            background: 'var(--secondary)',
            color: 'white',
            border: 'none',
            padding: '0.6rem 1.5rem',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '600',
            fontSize: '0.9rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.background = 'var(--accent)'}
          onMouseOut={(e) => e.target.style.background = 'var(--secondary)'}
        >
          <span>Descargar</span>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '800px', background: '#333' }}>
        <iframe
          src={src}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title={title}
        />
        {/* Fallback msg if iframe doesn't support PDF viewing in some mobile contexts could go here, but default text is native */}
      </div>
    </div>
  );
}

export default PDFViewer;