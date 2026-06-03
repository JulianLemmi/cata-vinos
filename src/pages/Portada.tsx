import '../doc.css'

export function Portada() {
  return (
    <div className="doc-wrap">
      <div className="portada">
        <div className="portada-bg" />
        <div className="portada-content">
          <div className="portada-logo">L'ECOLE</div>
          <div className="portada-inst">Instituto de Educación Superior Gastronómica</div>
          <div className="portada-tp">Trabajo Práctico</div>
          <div className="portada-materia">Organización de Eventos</div>
          <div className="portada-divider" />
          <div className="portada-label">Evento Seleccionado</div>
          <div className="portada-evento">CATA DE<br />VINOS <span className="portada-icon">🍷</span></div>
          <div className="portada-grid">
            <div>
              <div className="portada-field-label">Alumno</div>
              <div className="portada-field-value">Julian Lemmi</div>
            </div>
            <div>
              <div className="portada-field-label">Carrera</div>
              <div className="portada-field-value">Técnico Gastronómico</div>
            </div>
            <div>
              <div className="portada-field-label">Año</div>
              <div className="portada-field-value">Segundo Año</div>
            </div>
            <div>
              <div className="portada-field-label">Profesora</div>
              <div className="portada-field-value">Tatiana Belén</div>
            </div>
            <div>
              <div className="portada-field-label">Año Lectivo</div>
              <div className="portada-field-value">2026</div>
            </div>
          </div>
          <div className="portada-ciudad">Mar del Plata &nbsp;–&nbsp; Buenos Aires &nbsp;–&nbsp; Argentina</div>
        </div>
      </div>
    </div>
  )
}
