function ImageViewer({ src, title }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      margin: '2rem 0',
      textAlign: 'center'
    }}>
      <h3 style={{
        marginBottom: '1.5rem',
        color: 'var(--deep-navy)',
        fontFamily: 'Sora'
      }}>
        {title}
      </h3>
      <img src={src} alt={title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
    </div>
  );
}

export default ImageViewer;