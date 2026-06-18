import '../doc.css'

const html = `
<!-- PÁGINA 1 -->
<div class="doc-page">
  <div class="page-header">
    <div class="page-header-title">Brief del Evento<br><small style="font-size:11pt;color:#aaa;font-weight:400;">Cata "Vinos Argentinos"</small></div>
    <div class="page-header-sub">10 de octubre de 2026<br>Mar del Plata, Buenos Aires</div>
  </div>
  <div class="section">
    <div class="section-title"><div class="section-num">1</div><h2>Asignación</h2></div>
    <p>Organización de un evento gastronómico y social centrado en la degustación de vinos argentinos. La propuesta consiste en una cata de vinos con participación de bodegas boutique de distintas regiones del país, acompañada por una oferta gastronómica y un cierre musical en vivo.</p>
  </div>
  <div class="section">
    <div class="section-title"><div class="section-num">2</div><h2>Acción requerida</h2></div>
    <p>Diseñar y organizar un evento de cata de vinos en la ciudad de Mar del Plata que permita promocionar bodegas boutique, ofrecer degustación libre de distintas etiquetas y generar una experiencia gastronómica y social para el público asistente.</p>
  </div>
  <div class="section">
    <div class="section-title"><div class="section-num">3</div><h2>Estrategia</h2></div>
    <p>Se realizará un evento con aproximadamente <strong>16 stands de bodegas</strong> donde cada una presentará entre 5 y 6 etiquetas diferentes. Los asistentes podrán recorrer libremente los stands y degustar vinos con la copa del evento.</p>
    <p>El espacio contará además con sector gastronómico, puestos de hidratación, un stand de tragos alternativos y un escenario para el cierre musical.</p>
  </div>
  <hr class="divider">
  <div class="section">
    <div class="section-title"><div class="section-num">4</div><h2>Finalidad y objetivos</h2></div>
    <ul class="lista">
      <li>Promocionar bodegas boutique de distintas regiones de Argentina.</li>
      <li>Generar una experiencia gastronómica y social vinculada al vino.</li>
      <li>Difundir la cultura del vino.</li>
      <li>Generar ingresos mediante la venta de entradas.</li>
    </ul>
  </div>
  <div class="section">
    <div class="section-title"><div class="section-num">5</div><h2>Público objetivo</h2></div>
    <div class="highlight-box">
      <p><strong>Edad estimada:</strong> entre 19 y 60 años</p>
      <p style="margin-top:8px"><strong>Perfil del público:</strong></p>
      <ul class="lista" style="margin-top:6px">
        <li>Amantes del vino</li>
        <li>Personas curiosas por aprender sobre vinos</li>
        <li>Estudiantes</li>
        <li>Turistas</li>
        <li>Público que busca una experiencia gastronómica y social</li>
      </ul>
      <p style="margin-top:10px"><strong>Capacidad estimada del evento:</strong> 200 personas</p>
    </div>
  </div>
</div>

<!-- PÁGINA 2 -->
<div class="doc-page">
  <div class="page-header">
    <div class="page-header-title">Brief del Evento</div>
    <div class="page-header-sub">Cata "Vinos Argentinos"</div>
  </div>
  <div class="section">
    <div class="section-title"><div class="section-num">6</div><h2>Fecha, lugar y sede</h2></div>
    <div class="data-grid">
      <div><div class="data-cell-label">Fecha</div><div class="data-cell-value">10 de octubre de 2026</div></div>
      <div><div class="data-cell-label">Horario</div><div class="data-cell-value">Inicio: 19:30 hs — Cierre: 01:00 hs</div></div>
      <div style="grid-column:1/-1"><div class="data-cell-label">Lugar</div><div class="data-cell-value">Barrio privado ARAS — Ciudad de Mar del Plata, Pcia. de Buenos Aires</div></div>
    </div>
  </div>
  <div class="section">
    <div class="section-title"><div class="section-num">7</div><h2>Promesa básica del evento</h2></div>
    <div class="quote">"Ofrecer una experiencia completa alrededor del vino argentino, permitiendo a los asistentes descubrir diferentes bodegas, estilos y regiones del país en un ambiente social, gastronómico y cultural."</div>
  </div>
  <div class="section">
    <div class="section-title"><div class="section-num">8</div><h2>Restricciones</h2></div>
    <ul class="lista">
      <li>Capacidad máxima estimada: <strong>250 personas</strong>.</li>
      <li>Horario límite del evento: <strong>01:00 hs</strong>.</li>
      <li>Cierre del servicio de degustación de vinos: <strong>22:30 hs</strong>.</li>
    </ul>
  </div>
  <hr class="divider">
  <div class="section">
    <div class="section-title"><div class="section-num">9</div><h2>Presupuesto / Ingresos estimados</h2></div>
    <div class="ingresos-grid">
      <div class="ingreso-card"><div class="ic-label">Límite presupuestario</div><div class="ic-value">$17.000.000</div></div>
      <div class="ingreso-card"><div class="ic-label">Entrada general</div><div class="ic-value">$80.000</div></div>
      <div class="ingreso-card"><div class="ic-label">Depósito por copa</div><div class="ic-value">$15.000</div><div class="ic-note">Reintegrable al devolver la copa</div></div>
    </div>
    <div class="highlight-box"><p><strong>La entrada incluye:</strong> Acceso al evento · Copa de degustación · Degustación libre en todos los stands de bodegas</p></div>
  </div>
  <div class="section">
    <div class="section-title"><div class="section-num">10</div><h2>Contenido y programa del evento</h2></div>
    <div class="timeline">
      <div class="tl-item"><div class="tl-dot"></div><div class="tl-time">19:30 hs</div><div class="tl-label">Apertura del evento</div><div class="tl-desc">Recepción de invitados, acreditación y entrega de copas.</div></div>
      <div class="tl-item"><div class="tl-dot light"></div><div class="tl-time">19:30 — 22:30 hs</div><div class="tl-label">Degustación libre</div><div class="tl-desc">Recorrido por stands de bodegas y funcionamiento del sector gastronómico.</div></div>
      <div class="tl-item"><div class="tl-dot"></div><div class="tl-time">22:30 hs</div><div class="tl-label">Cierre de servicio de degustación</div><div class="tl-desc">Finaliza el servicio en los stands de vino.</div></div>
      <div class="tl-item"><div class="tl-dot light"></div><div class="tl-time">23:00 hs</div><div class="tl-label">Presentación de banda</div><div class="tl-desc">Inicio del show musical en vivo.</div></div>
      <div class="tl-item"><div class="tl-dot"></div><div class="tl-time">01:00 hs</div><div class="tl-label">Finalización del evento</div></div>
    </div>
  </div>
</div>

<!-- PÁGINA 3 -->
<div class="doc-page">
  <div class="page-header">
    <div class="page-header-title">Brief del Evento</div>
    <div class="page-header-sub">Datos de organización</div>
  </div>
  <div class="section">
    <div class="section-title"><div class="section-num">11</div><h2>Actividades posteriores</h2></div>
    <ul class="lista">
      <li>Cierre del evento.</li>
      <li>Recolección de copas y devolución de depósitos.</li>
      <li>Desmontaje de stands.</li>
      <li>Evaluación general del evento.</li>
    </ul>
  </div>
  <hr class="divider">
  <div class="section">
    <div class="section-title"><div class="section-num">12</div><h2>Datos de organización e información adicional</h2></div>
    <p><strong>Organizador del evento:</strong> Proyecto académico para la materia Organización de Eventos, Carrera de Gastronomía.</p>
    <br>
    <p style="font-weight:600;color:#7a1c2e;margin-bottom:8px">Distribución del espacio</p>
    <hr class="divider" style="margin:0 0 10px">
    <ul class="lista">
      <li>16 stands de bodegas ubicados alrededor del salón.</li>
      <li>Sector central para circulación y degustación del público.</li>
      <li>Escenario en el fondo del salón para el show musical.</li>
      <li>Sector gastronómico: empanadas, pizzas y sándwiches de carne.</li>
      <li>Mesas con tablas de quesos y fiambres.</li>
      <li>2 puestos de hidratación con agua.</li>
      <li>1 stand de tragos alternativos.</li>
    </ul>
    <br>
    <p style="font-weight:600;color:#7a1c2e;margin-bottom:8px">Personal estimado</p>
    <hr class="divider" style="margin:0 0 14px">
    <div class="personal-grid">
      <div class="personal-card"><div class="pc-num">16</div><div class="pc-role">Representantes de bodegas</div></div>
      <div class="personal-card"><div class="pc-num">10</div><div class="pc-role">Personas en cocina</div></div>
      <div class="personal-card"><div class="pc-num">3–4</div><div class="pc-role">Recepción / Acreditación</div></div>
      <div class="personal-card"><div class="pc-num">5</div><div class="pc-role">Mozos</div></div>
      <div class="personal-card"><div class="pc-num">2</div><div class="pc-role">Organización del estacionamiento</div></div>
    </div>
  </div>
  <hr class="divider">
  <div class="section">
    <p style="font-weight:600;color:#7a1c2e;margin-bottom:8px">Bodegas participantes (stands de cata)</p>
    <hr class="divider" style="margin:0 0 10px">
    <div class="logo-wall">
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/terrazas.png" alt="Terrazas de los Andes" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">TA</span></div>
        <div class="logo-name">Terrazas de los Andes</div><div class="logo-meta">con sommelier</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/nieto.png" alt="Nieto Senetiner" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">NS</span></div>
        <div class="logo-name">Nieto Senetiner</div><div class="logo-meta">con sommelier</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/durigutti.png" alt="Durigutti Family Winemakers" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">D</span></div>
        <div class="logo-name">Durigutti</div><div class="logo-meta">con sommelier</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/colome.png" alt="Bodega Colomé" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">C</span></div>
        <div class="logo-name">Bodega Colomé</div><div class="logo-meta">con sommelier</div>
      </div>
      <div class="logo-card no-logo">
        <div class="logo-frame"><span class="logo-fallback">CH</span></div>
        <div class="logo-name">Bodega Chacra</div><div class="logo-meta">sommelier externo</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/noemia.png" alt="Bodega Noemía" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">N</span></div>
        <div class="logo-name">Bodega Noemía</div><div class="logo-meta">sommelier externo</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/lasmoras.png" alt="Finca Las Moras" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">LM</span></div>
        <div class="logo-name">Finca Las Moras</div><div class="logo-meta">sommelier externo</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/norton.png" alt="Norton" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">N</span></div>
        <div class="logo-name">Norton</div>
      </div>
    </div>
    <p style="font-weight:600;color:#7a1c2e;margin:18px 0 8px">Sponsors / Bodegas que nos acompañan</p>
    <hr class="divider" style="margin:0 0 10px">
    <div class="logo-wall">
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/catena.png" alt="Catena Zapata" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">CZ</span></div>
        <div class="logo-name">Catena Zapata</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/trapiche.png" alt="Trapiche" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">T</span></div>
        <div class="logo-name">Trapiche</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/rutini.png" alt="Rutini Wines" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">R</span></div>
        <div class="logo-name">Rutini Wines</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/luigibosca.png" alt="Luigi Bosca" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">LB</span></div>
        <div class="logo-name">Luigi Bosca</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/salentein.png" alt="Salentein" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">S</span></div>
        <div class="logo-name">Salentein</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/zuccardi.png" alt="Zuccardi" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">Z</span></div>
        <div class="logo-name">Zuccardi</div>
      </div>
      <div class="logo-card no-logo">
        <div class="logo-frame"><span class="logo-fallback">VU</span></div>
        <div class="logo-name">Valle de Uco</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/elenemigo.png" alt="El Enemigo Wines" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">EE</span></div>
        <div class="logo-name">El Enemigo Wines</div>
      </div>
      <div class="logo-card">
        <div class="logo-frame"><img src="/logos/lopez.png" alt="Bodegas López" loading="lazy" onerror="this.closest('.logo-card').classList.add('no-logo');this.remove()"><span class="logo-fallback">L</span></div>
        <div class="logo-name">Bodegas López</div>
      </div>
    </div>
  </div>
</div>
`

export function Brief() {
  return (
    <div className="doc-wrap" dangerouslySetInnerHTML={{ __html: html }} />
  )
}
