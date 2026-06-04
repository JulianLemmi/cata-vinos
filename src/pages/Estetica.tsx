import '../doc.css'

const html = `
<!-- PÁGINA 1 — Concepto, paleta y clima de luz -->
<div class="doc-page">
  <div class="page-header">
    <div class="page-header-title">Estética del Evento</div>
    <div class="page-header-sub">Concepto · Iluminación · Vestuario · Ambientación<br>Cata de Vinos — Mar del Plata 2026</div>
  </div>

  <!-- Concepto general -->
  <div class="section">
    <div class="section-title"><div class="section-num">1</div><h2>Concepto general</h2></div>
    <div class="est-hero">
      <div class="est-hero-label">Dirección de arte del evento</div>
      <div class="est-hero-title">Bodega <small>rústica-elegante</small></div>
      <div class="est-hero-desc">Una cata íntima y premium que evoca el interior de una bodega: madera, hierro y calidez de vela, pero con una capa de sofisticación nocturna en negro y dorado. El protagonista es el vino —botellas, copas y luz—; todo lo demás acompaña sin competir.</div>
      <div class="est-hero-tags">
        <span class="est-hero-tag">Negro · Dorado · Blanco</span>
        <span class="est-hero-tag">Luz cálida ámbar 2700 K</span>
        <span class="est-hero-tag">Dress code: formal / cocktail</span>
        <span class="est-hero-tag">Atardecer → noche (19:30–01:00)</span>
      </div>
    </div>
    <div class="highlight-box">
      <p><strong>Idea fuerza:</strong> "Como entrar a una bodega de noche". Materiales nobles y luz tenue de filamento, con detalles dorados que elevan la percepción a un evento de categoría. La estética es deliberadamente <strong>minimal en objeto</strong> para que el público y las etiquetas sean el centro de la escena.</p>
    </div>
  </div>

  <hr class="divider">

  <!-- Paleta cromática -->
  <div class="section">
    <div class="section-title"><div class="section-num">2</div><h2>Paleta cromática</h2></div>
    <p>Construye toda la ambientación, la señalética y los textiles. Alto contraste, nocturna y muy fotogénica bajo luz puntual.</p>
    <div class="est-swatches">
      <div class="est-swatch">
        <div class="est-swatch-color" style="background:#161616"></div>
        <div class="est-swatch-info"><div class="est-swatch-name">Negro carbón</div><div class="est-swatch-hex">#161616 · base</div></div>
      </div>
      <div class="est-swatch">
        <div class="est-swatch-color" style="background:#c9a84c"></div>
        <div class="est-swatch-info"><div class="est-swatch-name">Dorado</div><div class="est-swatch-hex">#c9a84c · acento</div></div>
      </div>
      <div class="est-swatch">
        <div class="est-swatch-color" style="background:#ffffff;border-bottom:1px solid #eee"></div>
        <div class="est-swatch-info"><div class="est-swatch-name">Blanco</div><div class="est-swatch-hex">#ffffff · respiro</div></div>
      </div>
      <div class="est-swatch">
        <div class="est-swatch-color" style="background:#7a1c2e"></div>
        <div class="est-swatch-info"><div class="est-swatch-name">Borravino</div><div class="est-swatch-hex">#7a1c2e · marca</div></div>
      </div>
    </div>
    <p style="font-size:8.5pt;color:#888">El borravino se mantiene como guiño de marca (coherente con la identidad del proyecto), pero la dupla protagonista es <strong>negro + dorado</strong> sobre respiros de blanco.</p>
  </div>

  <hr class="divider">

  <!-- Clima de luz base -->
  <div class="section">
    <div class="section-title"><div class="section-num">3</div><h2>Clima de luz base</h2></div>
    <p>Todo el evento parte de una temperatura de color <strong>cálida ámbar (≈2700 K)</strong>, tono vela / filamento. Es la luz que mejor favorece la piel y, sobre todo, <strong>realza el color del vino tinto</strong> en la copa. Sobre esa base, cada escenario sube o baja intensidad según su función.</p>
    <div class="est-signature">
      <div class="est-signature-icon">💡</div>
      <div>
        <div class="est-signature-title">Firma transversal: guirnaldas Edison</div>
        <div class="est-signature-desc">Lámparas de filamento colgantes (Edison) como motivo repetido en salón y patio: el hilo conductor que unifica todas las zonas y sostiene el concepto bodega rústica-elegante de punta a punta.</div>
      </div>
    </div>
  </div>
</div>

<!-- PÁGINA 2 — Iluminación por escenario -->
<div class="doc-page">
  <div class="page-header">
    <div class="page-header-title">Iluminación por escenario</div>
    <div class="page-header-sub">Plan de luz zona por zona</div>
  </div>

  <div class="section">
    <div class="section-title"><div class="section-num">4</div><h2>Escenarios</h2></div>
    <div class="est-grid">

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🚪</span><span class="est-card-zone">Entrada · Recepción · Copas</span></div>
        <div class="est-card-title">Arco de bienvenida iluminado</div>
        <div class="est-card-desc">Arco con guirnalda cálida y logo del evento retroiluminado en dorado. Spot puntual sobre el mostrador de acreditación y entrega de copas. Es el primer impacto: marca el tono premium desde el ingreso.</div>
        <span class="est-card-tag est-tag-amber">Cálida ámbar · efecto "wow"</span>
      </div>

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🍷</span><span class="est-card-zone">16 stands de bodegas</span></div>
        <div class="est-card-title">Spot vitrina sobre las botellas</div>
        <div class="est-card-desc">Cada stand con un foco dirigido a las etiquetas y botellas (efecto vitrina), con el fondo más tenue. Realza el producto, mantiene las fichas de cata legibles y genera un ritmo visual a lo largo del salón.</div>
        <span class="est-card-tag est-tag-amber">Cálida dirigida · producto</span>
      </div>

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🎶</span><span class="est-card-zone">Escenario · Banda (23 hs)</span></div>
        <div class="est-card-title">Show con luces de color</div>
        <div class="est-card-desc">Durante la cata, base cálida. Al arrancar la banda a las 23:00, el escenario sube de energía con par LED de color, contraluces y efectos tipo recital: el evento pasa de degustación a fiesta.</div>
        <span class="est-card-tag est-tag-night">Dinámico nocturno</span>
      </div>

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🍕</span><span class="est-card-zone">Sector gastronómico</span></div>
        <div class="est-card-title">Guirnaldas tipo feria</div>
        <div class="est-card-desc">String lights cálidas sobre los stands de comida y tragos: clima distendido, festivo y muy fotogénico, sobre todo en el exterior. En la cocina/back, luz funcional aparte por higiene y seguridad.</div>
        <span class="est-card-tag est-tag-amber">Cálida · festiva</span>
      </div>

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🛋️</span><span class="est-card-zone">Lounge · Salón secundario</span></div>
        <div class="est-card-title">Detalle de marca luminoso</div>
        <div class="est-card-desc">Zona de descanso con una pieza de luz statement: colgante grande o letras / neón con el nombre del evento. Funciona como punto de foto (instagrameable) y refuerza la marca mientras el público charla y descansa del recorrido.</div>
        <span class="est-card-tag est-tag-amber">Cálida media · branding</span>
      </div>

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🌿</span><span class="est-card-zone">Exterior · Patio</span></div>
        <div class="est-card-title">Faroles y antorchas</div>
        <div class="est-card-desc">Faroles de pie y antorchas / calefactores con llama en el patio que une Exterior Este y Sur. Cálido y rústico-bodega, y además abriga la noche fresca de octubre en Mar del Plata.</div>
        <span class="est-card-tag est-tag-amber">Cálida · abriga</span>
      </div>

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🚗</span><span class="est-card-zone">Estacionamiento · Circulación</span></div>
        <div class="est-card-title">Seguridad + balizas cálidas</div>
        <div class="est-card-desc">Estacionamiento bien iluminado y salidas de emergencia perfectamente visibles, pero con balizas y señalización en tono cálido para no romper el clima del evento. La seguridad nunca compite con la estética.</div>
        <span class="est-card-tag est-tag-amber">Segura · cálida</span>
      </div>

      <div class="est-card" style="display:flex;flex-direction:column;justify-content:center;background:#faf5f6;border-style:dashed">
        <div class="est-card-desc" style="color:#7a1c2e"><strong>Criterio general:</strong> capas de luz cálida (ambiente + foco de producto) y un único punto frío permitido: la cocina, por motivos de higiene. Todo lo visible para el público respira ámbar.</div>
      </div>

    </div>
  </div>
</div>

<!-- PÁGINA 3 — Vestuario y ambientación -->
<div class="doc-page">
  <div class="page-header">
    <div class="page-header-title">Vestuario y ambientación</div>
    <div class="page-header-sub">Imagen del personal · Objeto · Sensorial</div>
  </div>

  <!-- Vestuario del personal -->
  <div class="section">
    <div class="section-title"><div class="section-num">5</div><h2>Vestuario del personal</h2></div>
    <p>Una <strong>línea negra unificada</strong> para todo el staff, con distintivos según el rol. Imagen coherente, sobria y premium, alineada con la paleta negro + dorado.</p>
    <div class="est-grid">

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🎩</span><span class="est-card-zone">Recepción · Acreditación (3–4)</span></div>
        <div class="est-card-title">Total black + detalle dorado</div>
        <div class="est-card-desc">La primera cara del evento: camisa o vestido negro formal, con un accesorio dorado (pin, cinto o pañuelo) y credencial visible. Elegante, on-brand y fácil de reconocer en la puerta.</div>
      </div>

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🍽️</span><span class="est-card-zone">Mozos · Servicio (5 + asist.)</span></div>
        <div class="est-card-title">Negro con delantal bistró</div>
        <div class="est-card-desc">Camisa y pantalón negros con delantal tipo bistró (negro o de cuero). Práctico para circular y servir, elegante y muy "bodega-restaurante".</div>
      </div>

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🍇</span><span class="est-card-zone">Sommeliers (en stands)</span></div>
        <div class="est-card-title">Registro elegante + cinta "Sommelier"</div>
        <div class="est-card-desc">Mismo código sobrio del staff, diferenciados con una cinta o credencial destacada "Sommelier". Simple y económico de implementar, y los hace reconocibles como referentes técnicos en cada stand.</div>
      </div>

      <div class="est-card" style="display:flex;flex-direction:column;justify-content:center;background:#faf5f6;border-style:dashed">
        <div class="est-card-desc" style="color:#7a1c2e"><strong>Invitados:</strong> dress code <strong>formal / cocktail</strong> (traje, vestido de cóctel). Eleva la percepción premium y acompaña la estética nocturna del evento.</div>
      </div>

    </div>
  </div>

  <hr class="divider">

  <!-- Ambientación y objeto -->
  <div class="section">
    <div class="section-title"><div class="section-num">6</div><h2>Ambientación y objeto</h2></div>
    <div class="est-grid">

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🍾</span><span class="est-card-zone">Decoración</span></div>
        <div class="est-card-title">Minimal: botellas + cristalería + luz</div>
        <div class="est-card-desc">Decoración austera y premium: el protagonismo es de las botellas, las copas y la iluminación. Menos producción de objeto, más limpieza visual.</div>
      </div>

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🪧</span><span class="est-card-zone">Señalética · Branding</span></div>
        <div class="est-card-title">Dorado sobre negro</div>
        <div class="est-card-desc">Cartelería negra con tipografía dorada (Playfair Display): nombres de stands, direcciones y menús. Premium, legible y coherente con la identidad del proyecto.</div>
      </div>

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🥂</span><span class="est-card-zone">Copa del evento · Cristalería</span></div>
        <div class="est-card-title">Copa de cata clásica, sin logo</div>
        <div class="est-card-desc">Copa de cristal lisa, neutra y elegante, sin marca propia: con tantas bodegas presentes, la copa se mantiene universal para no competir con ninguna etiqueta. Es parte de la entrada y reintegrable por depósito.</div>
      </div>

      <div class="est-card">
        <div class="est-card-head"><span class="est-card-icon">🖤</span><span class="est-card-zone">Textiles</span></div>
        <div class="est-card-title">Mantel negro + runner dorado</div>
        <div class="est-card-desc">Mantelería negra con camino de mesa dorado en mesas altas, lounge y stands. Dramático, premium y 100% alineado con la paleta.</div>
      </div>

    </div>
  </div>

  <hr class="divider">

  <!-- Experiencia sensorial -->
  <div class="section">
    <div class="section-title"><div class="section-num">7</div><h2>Experiencia sensorial</h2></div>
    <div class="highlight-box">
      <p><strong>Sonido y aroma — perfil neutro.</strong> Durante la degustación, música ambiente baja y sin protagonismo, y <strong>sin aroma agregado</strong>: el foco está 100% en conversar y degustar, sin nada que interfiera con la nariz del vino. El único gran momento sensorial planificado es el <strong>show en vivo desde las 23:00</strong>, que cambia el clima de cata a fiesta.</p>
    </div>
  </div>
</div>

<!-- PÁGINA 4 — Moodboard visual -->
<div class="doc-page">
  <div class="page-header">
    <div class="page-header-title">Moodboard visual</div>
    <div class="page-header-sub">Collage de referencia estética<br>Imágenes orientativas, no del evento real</div>
  </div>

  <div class="section">
    <div class="section-title"><div class="section-num">8</div><h2>Referencias de atmósfera</h2></div>
    <p>Una imagen de la dirección de arte completa: bodega rústica-elegante, negro + dorado, luz cálida de filamento y vino como protagonista.</p>

    <div class="est-collage">
      <div class="est-tile span2c span2r" style="background-image:url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800')">
        <div class="est-tile-cap"><div class="s">Concepto</div><div class="t">Vino bajo luz cálida ámbar</div></div>
      </div>
      <div class="est-tile" style="background-image:url('https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=500')">
        <div class="est-tile-cap"><div class="s">Bodega</div><div class="t">Barricas de roble</div></div>
      </div>
      <div class="est-tile" style="background-image:url('https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500')">
        <div class="est-tile-cap"><div class="s">Copa</div><div class="t">Cristal limpio, sin logo</div></div>
      </div>
      <div class="est-tile span2c" style="background-image:url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=700')">
        <div class="est-tile-cap"><div class="s">Clima de luz</div><div class="t">Calidez ámbar 2700 K</div></div>
      </div>
      <div class="est-tile" style="background-image:url('https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=500')">
        <div class="est-tile-cap"><div class="s">Escenario</div><div class="t">Luces de color (23 hs)</div></div>
      </div>
      <div class="est-tile span2c" style="background-image:url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=700')">
        <div class="est-tile-cap"><div class="s">Firma de luz</div><div class="t">Guirnaldas Edison sobre la barra</div></div>
      </div>
      <div class="est-tile" style="background-image:url('https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?w=500')">
        <div class="est-tile-cap"><div class="s">Patio</div><div class="t">Faroles y luz cálida</div></div>
      </div>
      <div class="est-tile span2c" style="background-image:url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700')">
        <div class="est-tile-cap"><div class="s">Montaje</div><div class="t">Mesas del salón, elegante</div></div>
      </div>
      <div class="est-tile span2c" style="background-image:url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=700')">
        <div class="est-tile-cap"><div class="s">Experiencia</div><div class="t">Cata social entre copas</div></div>
      </div>
    </div>

    <p style="font-size:8pt;color:#999;margin-top:10px">Imágenes de referencia (Unsplash) a modo de paleta visual. La ambientación final se ajusta a proveedores y al espacio del Barrio ARAS.</p>
  </div>
</div>
`

export function Estetica() {
  return <div className="doc-wrap" dangerouslySetInnerHTML={{ __html: html }} />
}
