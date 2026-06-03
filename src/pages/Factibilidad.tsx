import '../doc.css'

const html = `
<div class="doc-page">
  <div class="page-header">
    <div class="page-header-title">Examen de Factibilidad</div>
    <div class="page-header-sub">Cata de Vinos – Mar del Plata 2026</div>
  </div>
  <div class="fact-section">
    <div class="fact-title">Factibilidad Económica</div>
    <p>El evento presenta una factibilidad económica positiva debido a que el público objetivo seleccionado corresponde a consumidores interesados en experiencias gastronómicas y enológicas de nivel medio-alto.</p>
    <p style="margin-top:8px">La participación de sponsors y bodegas colaboradoras permite reducir significativamente los costos operativos generales del evento. El valor proyectado de las entradas permite cubrir costos fijos, costos variables y honorarios profesionales, generando rentabilidad operativa para la organización.</p>
    <p style="margin-top:8px">La presencia de bodegas reconocidas incrementa el valor percibido del evento y favorece la comercialización de entradas.</p>
  </div>
  <hr class="divider">
  <div class="fact-section">
    <div class="fact-title">Factibilidad Operativa</div>
    <p>El evento es operativamente viable debido a que cuenta con:</p>
    <ul class="lista" style="margin-top:8px">
      <li>Salón apto para eventos sociales y gastronómicos.</li>
      <li>Disponibilidad de proveedores gastronómicos.</li>
      <li>Personal capacitado.</li>
      <li>Logística de transporte.</li>
      <li>Servicio médico.</li>
      <li>Seguridad.</li>
      <li>Estructura organizativa previa.</li>
    </ul>
    <p style="margin-top:10px">La distribución del espacio mediante stands de degustación facilita la circulación de asistentes y mejora la experiencia general del público. El cronograma operativo permite coordinar correctamente: montaje, recepción, degustaciones, servicio gastronómico, entretenimiento y desmontaje.</p>
  </div>
  <hr class="divider">
  <div class="fact-section">
    <div class="fact-title">Factibilidad Comercial</div>
    <p>La temática de cata de vinos presenta una creciente demanda dentro del mercado de eventos gastronómicos y experiencias premium. La presencia de bodegas reconocidas aumenta el atractivo comercial y permite generar alianzas estratégicas con marcas relacionadas al sector vitivinícola.</p>
    <p style="margin-top:8px">El evento genera beneficios comerciales para: bodegas participantes, sponsors, proveedores gastronómicos y empresas asociadas.</p>
  </div>
  <hr class="divider">
  <div class="fact-section">
    <div class="fact-title">Factibilidad Técnica</div>
    <p>El evento dispone de los recursos técnicos necesarios:</p>
    <ul class="lista" style="margin-top:8px">
      <li>Suministro eléctrico y posible refuerzo con generador.</li>
      <li>Equipamiento de sonido e iluminación.</li>
      <li>Mobiliario y cristalería.</li>
      <li>Espacios de degustación y sistema de hidratación.</li>
      <li>Personal operativo.</li>
    </ul>
    <p style="margin-top:10px">El lugar seleccionado cuenta con capacidad suficiente para albergar la cantidad estimada de asistentes respetando condiciones de comodidad y seguridad.</p>
  </div>
  <hr class="divider">
  <div class="fact-section">
    <div class="fact-title">Factibilidad Legal</div>
    <p>La realización del evento contempla: seguros de responsabilidad civil, permisos municipales, contratación formal de proveedores, cobertura médica y medidas de seguridad. Esto permite desarrollar el evento dentro del marco legal correspondiente para eventos privados y gastronómicos.</p>
  </div>
  <hr class="divider">
  <div class="fact-section">
    <div class="fact-title">Análisis de Riesgos</div>
    <div class="data-grid">
      <div>
        <p style="font-weight:600;margin-bottom:8px">Principales riesgos identificados:</p>
        <ul class="lista">
          <li>Cancelación de proveedores.</li>
          <li>Variaciones de costos.</li>
          <li>Baja asistencia.</li>
          <li>Inconvenientes climáticos.</li>
          <li>Fallas técnicas.</li>
        </ul>
      </div>
      <div>
        <p style="font-weight:600;margin-bottom:8px">Medidas de mitigación:</p>
        <ul class="lista">
          <li>Contratación anticipada de proveedores.</li>
          <li>Margen de contingencia presupuestaria.</li>
          <li>Seguros.</li>
          <li>Personal técnico.</li>
          <li>Planificación operativa previa.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="conclusion-box">
    <h3>✓ Conclusión</h3>
    <p>El análisis realizado determina que el evento presenta una <strong>factibilidad positiva</strong> en aspectos económicos, comerciales, técnicos, operativos y legales.</p>
    <p>La propuesta resulta viable para su ejecución debido a la disponibilidad de recursos, capacidad organizativa, interés del público objetivo y participación de sponsors estratégicos vinculados al sector vitivinícola.</p>
    <p>El evento posee potencial para posicionarse como una experiencia gastronómica y enológica de categoría dentro de la ciudad de Mar del Plata.</p>
  </div>
</div>
`

export function Factibilidad() {
  return <div className="doc-wrap" dangerouslySetInnerHTML={{ __html: html }} />
}
