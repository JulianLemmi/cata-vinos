import '../doc.css'

const html = `
<!-- Página 5 – Presupuesto detallado -->
<div class="doc-page">
  <div class="page-header">
    <div class="page-header-title">Presupuesto General</div>
    <div class="page-header-sub">Cata de Vinos 2026 – Mar del Plata</div>
  </div>
  <div class="table-scroll">
  <table class="presup">
    <thead><tr><th>Concepto</th><th>Tipo</th><th>Costo</th><th>Descripción</th></tr></thead>
    <tbody>
      <tr><td><strong>Salón</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$2.800.000</td><td>Alquiler del espacio para el evento, incluye uso de instalaciones, baños, estacionamiento y limpieza básica.</td></tr>
      <tr><td><strong>Sueldos fijos / Producción</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$600.000</td><td>Equipo de planificación previa y coordinación general.</td></tr>
      <tr><td><strong>Ambulancia</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$280.000</td><td>Servicio médico con unidad de emergencia y paramédico durante el evento.</td></tr>
      <tr><td><strong>Banda</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$450.000</td><td>Musicalización del evento, incluye equipo de sonido básico y operador.</td></tr>
      <tr><td><strong>Catering</strong></td><td><span class="tipo-cv">CV</span></td><td class="monto">$1.000.000</td><td>Pizzas, empanadas, sanguches calientes, tablas de quesos, fiambres y picadas. Incluye personal.</td></tr>
      <tr><td><strong>Stands de cata</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$1.900.000</td><td>Contratación de 8 bodegas (Terrazas de los Andes, Nieto Senetiner, Durigutti Family Winemakers, Bodega Colomé, Bodega Chacra, Bodega Noemía, Finca Las Moras, Norton).</td></tr>
      <tr><td><strong>Seguros</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$90.000</td><td>Seguro de responsabilidad civil para cubrir posibles incidentes.</td></tr>
      <tr><td><strong>Permisos</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$80.000</td><td>Habilitaciones municipales y autorizaciones necesarias.</td></tr>
      <tr><td><strong>Promoción / Marketing</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$300.000</td><td>Publicidad en redes sociales, diseño gráfico y difusión.</td></tr>
      <tr><td><strong>Alquiler mobiliario</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$250.000</td><td>Mesas, sillas, barras y elementos adicionales al salón.</td></tr>
      <tr><td><strong>Seguridad</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$180.000</td><td>Personal de seguridad durante todo el evento.</td></tr>
      <tr><td><strong>Limpieza</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$200.000</td><td>Servicio de limpieza antes y después del evento.</td></tr>
      <tr><td><strong>Transporte</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$120.000</td><td>Traslado de insumos, bebidas y equipamiento.</td></tr>
      <tr><td><strong>Electricidad</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$150.000</td><td>Consumo eléctrico y posible refuerzo con generador.</td></tr>
      <tr><td><strong>Sommelier</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$450.000</td><td>Profesional encargado de guiar la cata en los stands que no incluyen sommelier propio.</td></tr>
      <tr><td><strong>Personal de servicio</strong></td><td><span class="tipo-cv">CV</span></td><td class="monto">$500.000</td><td>Mozos y asistentes (cantidad variable según asistentes).</td></tr>
      <tr><td><strong>Vinos</strong></td><td><span class="tipo-cv">CV</span></td><td class="monto">$1.000.000</td><td>Selección de etiquetas para degustación (4–5 vinos por bodega).</td></tr>
      <tr><td><strong>Cristalería</strong></td><td><span class="tipo-cv">CV</span></td><td class="monto">$240.000</td><td>Alquiler o reposición de copas de vino.</td></tr>
      <tr><td><strong>Papelería</strong></td><td><span class="tipo-cf">CF</span></td><td class="monto">$20.000</td><td>Tarjetas de cata, señalética y material impreso.</td></tr>
      <tr><td><strong>Hielo</strong></td><td><span class="tipo-cv">CV</span></td><td class="monto">$100.000</td><td>Conservación de vinos y bebidas.</td></tr>
      <tr><td><strong>Stand de hidratación</strong></td><td><span class="tipo-cv">CV</span></td><td class="monto">$300.000</td><td>Agua mineral para limpieza de paladar.</td></tr>
      <tr><td><strong>Stand de bebidas</strong></td><td><span class="tipo-cv">CV</span></td><td class="monto">$500.000</td><td>Diversas bebidas y tragos para quienes no consuman vino.</td></tr>
    </tbody>
  </table>
  </div>
  <div style="margin-top:6px;font-size:8pt;color:#888">
    <span style="margin-right:16px"><span class="tipo-cf">CF</span> Costo Fijo</span>
    <span><span class="tipo-cv">CV</span> Costo Variable</span>
  </div>
</div>

<!-- Página 6 – Resumen económico -->
<div class="doc-page">
  <div class="page-header">
    <div class="page-header-title">Resumen Económico</div>
    <div class="page-header-sub">Cata de Vinos 2026</div>
  </div>
  <div class="section">
    <p style="font-weight:600;color:#7a1c2e;margin-bottom:8px">Sponsors y aportes comerciales</p>
    <table class="presup" style="width:50%">
      <thead><tr><th>Concepto</th><th>Monto</th></tr></thead>
      <tbody><tr><td>Aportes de sponsors y bodegas participantes</td><td class="monto-neg">–$1.200.000</td></tr></tbody>
    </table>
    <p style="margin-top:8px;font-size:8.5pt;color:#666">Sponsors: Catena Zapata, Trapiche, Rutini Wines, Luigi Bosca, Salentein, Zuccardi, Valle de Uco, El Enemigo Wines, Lopez.</p>
  </div>
  <hr class="divider">
  <div class="section">
    <p style="font-weight:600;color:#7a1c2e;margin-bottom:14px">Cuadro de totales</p>
    <div class="totales-grid">
      <div class="total-card"><div class="tc-label">Subtotal operativo</div><div class="tc-value">$11.510.000</div></div>
      <div class="total-card"><div class="tc-label">Total operativo final<br><small style="font-weight:400">(con descuento sponsors)</small></div><div class="tc-value">$10.310.000</div></div>
      <div class="total-card"><div class="tc-label">Honorarios profesionales (35%)</div><div class="tc-value">$3.608.500</div></div>
    </div>
    <div class="total-card main" style="text-align:center;padding:22px">
      <div class="tc-label" style="font-size:9pt;letter-spacing:2px">TOTAL GENERAL DEL EVENTO</div>
      <div class="tc-value" style="font-size:28pt;margin-top:8px">$13.918.500</div>
    </div>
  </div>
  <hr class="divider">
  <div class="section">
    <p style="font-weight:600;color:#7a1c2e;margin-bottom:10px">Servicios incluidos en los honorarios profesionales</p>
    <div class="data-grid">
      <ul class="lista">
        <li>Producción integral del evento.</li>
        <li>Coordinación general y supervisión operativa.</li>
        <li>Gestión de proveedores.</li>
        <li>Contratación de servicios externos.</li>
      </ul>
      <ul class="lista">
        <li>Coordinación de stands y bodegas.</li>
        <li>Gestión logística.</li>
        <li>Supervisión de montaje y desmontaje.</li>
        <li>Coordinación de personal.</li>
        <li>Organización de cronograma operativo.</li>
        <li>Atención y seguimiento al cliente.</li>
      </ul>
    </div>
  </div>
  <hr class="divider">
  <div class="section">
    <p style="font-weight:600;color:#7a1c2e;margin-bottom:10px">Observaciones</p>
    <div class="obs-box">
      <ul>
        <li>Presupuesto sujeto a modificaciones según disponibilidad de proveedores y variaciones de mercado.</li>
        <li>Valores expresados en pesos argentinos.</li>
        <li>El presupuesto contempla un evento estimado para 100 asistentes (base de cálculo).</li>
        <li>La confirmación de fecha y contratación de servicios requiere reserva anticipada.</li>
        <li>Para dar inicio a la planificación, el cliente deberá abonar un anticipo del <strong>50% del valor total del evento</strong>.</li>
      </ul>
    </div>
  </div>
  <hr class="divider">
  <div class="section">
    <p style="font-weight:600;color:#7a1c2e;margin-bottom:16px">Conformidad del cliente</p>
    <div class="data-grid" style="gap:24px">
      <div><div style="border-bottom:1px solid #ccc;margin-bottom:6px;height:30px"></div><div style="font-size:8.5pt;color:#888">Firma del cliente</div></div>
      <div><div style="border-bottom:1px solid #ccc;margin-bottom:6px;height:30px"></div><div style="font-size:8.5pt;color:#888">Aclaración</div></div>
      <div><div style="border-bottom:1px solid #ccc;margin-bottom:6px;height:30px"></div><div style="font-size:8.5pt;color:#888">DNI</div></div>
      <div><div style="border-bottom:1px solid #ccc;margin-bottom:6px;height:30px"></div><div style="font-size:8.5pt;color:#888">Fecha</div></div>
    </div>
  </div>
</div>
`

export function Presupuesto() {
  return <div className="doc-wrap" dangerouslySetInnerHTML={{ __html: html }} />
}
