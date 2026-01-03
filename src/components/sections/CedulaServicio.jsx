import PDFViewer from '../PDFViewer';

function CedulaServicio() {
  return (
    <>
      <div className="card">
        <h2 className="card-title">Cédula de Servicio (ITIL)</h2>
        <div className="card-content">
          <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
            Documentación detallada del servicio de TI siguiendo las mejores prácticas de ITIL (Information Technology Infrastructure Library).
          </p>
        </div>
      </div>

      <PDFViewer 
        src="/pdfs/CEDULA_DE_SERVICIO.pdf"
        title="Cédula de Servicio Completa"
      />
    </>
  );
}

export default CedulaServicio;