import { useState } from 'react';

const icons = {
  portada: "🏠",
  indice: "📑",
  introduccion: "📖",
  objetivo: "🎯",
  descripcion: "📋",
  "mision-vision-valores": "💎",
  "metas-corporativas": "🏢",
  "metas-ti": "💻",
  "cascada-metas": "📊",
  "mapa-estrategico": "🗺️",
  "caso-negocio": "💼",
  "cedula-servicio": "📄",
  arquitectura: "🏗️",
  inventario: "📦",
  "matriz-riesgos": "⚠️",
  "bia-tactico": "⏱️",
  "bia-operacional": "🔄",
  "plan-continuidad": "🛡️"
};

function Navigation({ sections, currentSection, setCurrentSection, isMobileOpen, setIsMobileOpen }) {
  return (
    <>
      {/* Mobile Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 40,
          display: isMobileOpen ? 'block' : 'none',
          backdropFilter: 'blur(4px)'
        }}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Sidebar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: 'var(--sidebar-width)',
        background: 'var(--bg-card)',
        borderRight: '1px solid var(--border-color)',
        zIndex: 50,
        transform: isMobileOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
      }}
        className={`sidebar ${isMobileOpen ? 'open' : ''}`}
      >
        {/* Logo Area */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid var(--border-color)',
          background: 'var(--primary-light)'
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            margin: 0,
            background: 'linear-gradient(135deg, var(--secondary), var(--highlight))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            EmpresIA
          </h2>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Gobierno de TI
          </p>
        </div>

        {/* Scrollable List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem 0'
        }}>
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => {
                setCurrentSection(section.id);
                setIsMobileOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '0.75rem 1.5rem',
                background: currentSection === section.id ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                border: 'none',
                borderLeft: `3px solid ${currentSection === section.id ? 'var(--secondary)' : 'transparent'}`,
                color: currentSection === section.id ? 'var(--secondary)' : 'var(--text-muted)',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.9rem',
                fontWeight: currentSection === section.id ? 600 : 400,
                transition: 'all 0.2s'
              }}
            >
              <span style={{ marginRight: '0.75rem', fontSize: '1.1rem' }}>
                {icons[section.id] || "📄"}
              </span>
              {section.title}
            </button>
          ))}
        </div>

        {/* Footer info */}
        <div style={{
          padding: '1rem',
          borderTop: '1px solid var(--border-color)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          background: 'var(--bg-dark)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)' }}></div>
            <span>IPN ESCOM</span>
          </div>
        </div>
      </nav>

      <style>{`
        @media (min-width: 1025px) {
          .sidebar {
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navigation;