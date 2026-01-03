function Header({ toggleSidebar }) {
  return (
    <header style={{
      height: 'var(--header-height)',
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1.5rem',
      position: 'sticky',
      top: 0,
      zIndex: 30,
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={toggleSidebar}
          style={{
            background: 'transparent',
            border: '1px solid var(--border-color)',
            color: 'var(--text-main)',
            padding: '0.5rem',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // Hide on desktop
          }}
          className="mobile-toggle"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <span style={{ color: 'var(--secondary)' }}>Gobierno de TI</span> /
          <span style={{ marginLeft: '0.5rem', color: 'var(--text-main)' }}>Presentación Final</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }} className="header-info">
          <span>7CV2</span>
          <span style={{ width: '1px', height: '12px', background: 'var(--border-color)' }}></span>
          <span>Equipo 1</span>
        </div>

        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'var(--gradient-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          color: 'white'
        }}>
          IPN
        </div>
      </div>

      <style>{`
        @media (min-width: 1025px) {
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .header-info {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;