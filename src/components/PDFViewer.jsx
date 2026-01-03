function PDFViewer({ src, title }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      margin: '2rem 0'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, var(--deep-navy), #1E3A5F)',
        color: 'white',
        padding: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: '600', fontSize: '1.1rem' }}>
          {title}
        </div>
        <a 
          href={src} 
          download 
          style={{
            background: 'var(--electric-blue)',
            color: 'white',
            border: 'none',
            padding: '0.6rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: '600',
            fontSize: '0.9rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          Descargar PDF
        </a>
      </div>
      <iframe 
        src={src} 
        style={{ width: '100%', height: '800px', border: 'none' }}
        title={title}
      />
    </div>
  );
}

export default PDFViewer;