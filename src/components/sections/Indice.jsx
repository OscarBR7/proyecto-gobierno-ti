function Indice() {
  const sections = [
    'Portada',
    'Índice',
    'Introducción',
    'Objetivo',
    'Descripción del Servicio',
    'Misión, Visión y Valores',
    'Metas Corporativas',
    'Metas de TI',
    'Cascada de Metas',
    'Mapa Estratégico',
    'Caso de Negocio',
    'Cédula de Servicio',
    'Arquitectura del Servicio',
    'Inventario de Activos',
    'Matriz de Riesgos',
    'BIA Táctico',
    'BIA Operacional',
    'Plan de Continuidad'
  ];

  return (
    <div className="card">
      <h2 className="card-title">Índice</h2>
      <div className="card-content">
        <ol style={{ lineHeight: '2.5', fontSize: '1.05rem' }}>
          {sections.map((section, index) => (
            <li key={index}>
              <span style={{ color: 'var(--electric-blue)', fontWeight: '500' }}>
                {section}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Indice;