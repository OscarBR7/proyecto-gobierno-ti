function Navigation({ sections, currentSection, setCurrentSection }) {
  return (
    <div style={{
      background: 'white',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '3px solid var(--electric-blue)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        gap: 0,
        overflowX: 'auto'
      }}>
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => setCurrentSection(section.id)}
            style={{
              padding: '1rem 1.5rem',
              border: 'none',
              background: currentSection === section.id ? 'rgba(14, 165, 233, 0.05)' : 'transparent',
              color: currentSection === section.id ? 'var(--electric-blue)' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              fontWeight: currentSection === section.id ? '700' : '500',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
              borderBottom: currentSection === section.id ? '3px solid var(--electric-blue)' : '3px solid transparent'
            }}
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navigation;