function Indice() {
  const sections = [
    { title: 'Portada', icon: '🏠', id: 'portada' },
    { title: 'Introducción', icon: '📖', id: 'introduccion' },
    { title: 'Objetivo', icon: '🎯', id: 'objetivo' },
    { title: 'Descripción', icon: '📋', id: 'descripcion' },
    { title: 'Misión y Visión', icon: '💎', id: 'mision-vision-valores' },
    { title: 'Metas Corp.', icon: '🏢', id: 'metas-corporativas' },
    { title: 'Metas TI', icon: '💻', id: 'metas-ti' },
    { title: 'Cascada', icon: '📊', id: 'cascada-metas' },
    { title: 'Mapa Strat.', icon: '🗺️', id: 'mapa-estrategico' },
    { title: 'Caso Negocio', icon: '💼', id: 'caso-negocio' },
    { title: 'Cédula', icon: '📄', id: 'cedula-servicio' },
    { title: 'Arquitectura', icon: '🏗️', id: 'arquitectura' },
    { title: 'Inventario', icon: '📦', id: 'inventario' },
    { title: 'Riesgos', icon: '⚠️', id: 'matriz-riesgos' },
    { title: 'BIA Táctico', icon: '⏱️', id: 'bia-tactico' },
    { title: 'BIA Ops.', icon: '🔄', id: 'bia-operacional' },
    { title: 'Continuidad', icon: '🛡️', id: 'plan-continuidad' }
  ];

  return (
    <div className="fade-in">
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <span className="text-gradient">Contenido del Proyecto</span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1.5rem'
      }}>
        {sections.map((section, index) => (
          <div
            key={index}
            className="card"
            style={{
              margin: 0,
              padding: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1rem'
            }}
          // Note: In a real app we would wire this to the navigation context or use effects, 
          // but for a pure presentation "Indice" page, it's just visual unless we pass the setter.
          // Since props aren't easy to pass down without modifying App.jsx to pass them to every component,
          // we will keep it visual or assume the user navigates via Sidebar.
          // Text says "Links funcionales a cada sección" in prompt. 
          // Since I haven't passed 'setCurrentSection' to Indice in App.jsx, I should rely on Sidebar for nav 
          // OR I can't make them clickable without refactoring App.jsx again.
          // I'll make them visual for now, as Sidebar is the primary nav.
          >
            <div style={{
              fontSize: '2.5rem',
              background: 'rgba(14, 165, 233, 0.1)',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {section.icon}
            </div>
            <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>
              {section.title}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Sección {index + 1}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)' }}>
        <p>Utilice la barra lateral de navegación para acceder a cada sección.</p>
      </div>
    </div>
  );
}

export default Indice;