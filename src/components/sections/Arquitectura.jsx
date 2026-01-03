import ImageViewer from '../ImageViewer';

function Arquitectura() {
  return (
    <>
      <div className="card">
        <h2 className="card-title">Arquitectura del Servicio</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
            Diagrama lógico que muestra los componentes de infraestructura solicitada para el servicio de consultoría e implementación 
            de soluciones de IA.
          </p>
          
          <h3 style={{ color: 'var(--deep-navy)', fontFamily: 'Sora', marginBottom: '1rem' }}>
            Componentes Principales:
          </h3>
          <ul style={{ marginBottom: '2rem', lineHeight: '2' }}>
            <li><strong>Portal / API de carga de datos:</strong> Interfaz para que los clientes suban datasets</li>
            <li><strong>Motor de Preprocesamiento:</strong> Limpieza, normalización y transformación de datos</li>
            <li><strong>Cluster de Entrenamiento de IA:</strong> Servidores locales o nube (Azure ML, AWS SageMaker, Google Vertex AI)</li>
            <li><strong>Repositorio de Modelos:</strong> Model Registry con versiones, métricas y modelos aprobados</li>
            <li><strong>API de Despliegue / Microservicio de IA:</strong> Dashboards con rendimiento del modelo, logs y alertas</li>
            <li><strong>Soporte y Monitoreo:</strong> Retraining, actualización y optimización de incidentes</li>
          </ul>
        </div>
      </div>

      <ImageViewer 
        src="/pdfs/Arquitectura_del_servicio.png"
        title="Diagrama de Arquitectura del Servicio"
      />
    </>
  );
}

export default Arquitectura;