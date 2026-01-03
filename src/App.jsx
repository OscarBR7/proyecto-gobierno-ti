import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Portada from './components/sections/Portada';
import Indice from './components/sections/Indice';
import Introduccion from './components/sections/Introduccion';
import Objetivo from './components/sections/Objetivo';
import Descripcion from './components/sections/Descripcion';
import MisionVisionValores from './components/sections/MisionVisionValores';
import MetasCorporativas from './components/sections/MetasCorporativas';
import MetasTI from './components/sections/MetasTI';
import CascadaMetas from './components/sections/CascadaMetas';
import MapaEstrategico from './components/sections/MapaEstrategico';
import CasoNegocio from './components/sections/CasoNegocio';
import CedulaServicio from './components/sections/CedulaServicio';
import Arquitectura from './components/sections/Arquitectura';
import Inventario from './components/sections/Inventario';
import MatrizRiesgos from './components/sections/MatrizRiesgos';
import BIATactico from './components/sections/BIATactico';
import BIAOperacional from './components/sections/BIAOperacional';
import PlanContinuidad from './components/sections/PlanContinuidad';

function App() {
  const [currentSection, setCurrentSection] = useState('portada');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sections = [
    { id: 'portada', title: 'Portada', component: Portada },
    { id: 'indice', title: 'Índice', component: Indice },
    { id: 'introduccion', title: 'Introducción', component: Introduccion },
    { id: 'objetivo', title: 'Objetivo', component: Objetivo },
    { id: 'descripcion', title: 'Descripción del Servicio', component: Descripcion },
    { id: 'mision-vision-valores', title: 'Misión, Visión y Valores', component: MisionVisionValores },
    { id: 'metas-corporativas', title: 'Metas Corporativas', component: MetasCorporativas },
    { id: 'metas-ti', title: 'Metas de TI', component: MetasTI },
    { id: 'cascada-metas', title: 'Cascada de Metas', component: CascadaMetas },
    { id: 'mapa-estrategico', title: 'Mapa Estratégico', component: MapaEstrategico },
    { id: 'caso-negocio', title: 'Caso de Negocio', component: CasoNegocio },
    { id: 'cedula-servicio', title: 'Cédula de Servicio', component: CedulaServicio },
    { id: 'arquitectura', title: 'Arquitectura del Servicio', component: Arquitectura },
    { id: 'inventario', title: 'Inventario de Activos', component: Inventario },
    { id: 'matriz-riesgos', title: 'Matriz de Riesgos', component: MatrizRiesgos },
    { id: 'bia-tactico', title: 'BIA Táctico', component: BIATactico },
    { id: 'bia-operacional', title: 'BIA Operacional', component: BIAOperacional },
    { id: 'plan-continuidad', title: 'Plan de Continuidad', component: PlanContinuidad }
  ];

  const CurrentComponent = sections.find(s => s.id === currentSection)?.component;

  return (
    <div className="app-container">
      <Navigation 
        sections={sections} 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      
      <main className="main-content">
        <Header toggleSidebar={() => setIsMobileOpen(!isMobileOpen)} />
        
        <div className="content-wrapper fade-in" key={currentSection} style={{ padding: '0' }}>
          {CurrentComponent && <CurrentComponent />}
        </div>
        
        <footer style={{ 
          marginTop: '4rem', 
          padding: '2rem', 
          textAlign: 'center', 
          borderTop: '1px solid var(--border-color)',
          color: 'var(--text-muted)',
          fontSize: '0.9rem'
        }}>
          <p>© 2025 EmpresIA - Gobierno de TI | IPN ESCOM</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
