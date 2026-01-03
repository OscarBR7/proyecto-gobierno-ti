import { useState } from 'react';

function ImageViewer({ src, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="card"
        style={{
          margin: '2rem 0',
          textAlign: 'center',
          cursor: 'pointer',
          padding: '1rem',
          transition: 'transform 0.2s'
        }}
        onClick={() => setIsOpen(true)}
      >
        <h3 style={{
          marginBottom: '1rem',
          color: 'var(--text-main)',
          fontFamily: 'Poppins',
          fontSize: '1.2rem'
        }}>
          {title} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>(Click para ampliar)</span>
        </h3>
        <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}>
          <img
            src={src}
            alt={title}
            style={{
              maxWidth: '100%',
              height: 'auto',
              transition: 'transform 0.5s ease',
              display: 'block'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      </div>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            backdropFilter: 'blur(5px)'
          }}
          onClick={() => setIsOpen(false)}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <img
              src={src}
              alt={title}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 0 50px rgba(0,0,0,0.5)'
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              style={{
                position: 'absolute',
                top: '-40px',
                right: 0,
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
            <div style={{ textAlign: 'center', color: 'white', marginTop: '1rem', fontFamily: 'Poppins' }}>
              {title}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageViewer;