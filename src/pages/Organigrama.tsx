import '../doc.css'

const html = `
<div class="doc-page">
  <div class="page-header">
    <div class="page-header-title">Organigrama del Evento</div>
    <div class="page-header-sub">Estructura organizativa — Cata de Vinos 2026</div>
  </div>
  <div class="org-wrap">
    <div class="org-top">
      <span style="font-size:20pt">👑</span>
      <div>
        <div class="org-top-main">Dirección General</div>
        <div class="org-top-sub">del Evento</div>
      </div>
    </div>
    <div class="org-vline"></div>
    <div class="org-hbar"></div>
    <div class="org-branches">
      <div class="org-branch">
        <div class="org-branch-vl"></div>
        <div class="com-card">
          <div class="com-hdr hdr-fin"><div class="com-hdr-l"><span class="com-hdr-icon">⚖️</span><span class="com-hdr-name">Comité de Finanzas y Legales</span></div><span class="com-badge">1</span></div>
          <div class="com-body"><div class="com-row"><span>Responsable de finanzas y legales</span><span class="com-cnt">1</span></div></div>
        </div>
      </div>
      <div class="org-branch">
        <div class="org-branch-vl"></div>
        <div class="com-card">
          <div class="com-hdr hdr-tec"><div class="com-hdr-l"><span class="com-hdr-icon">🔧</span><span class="com-hdr-name">Comité Técnico y Logístico</span></div><span class="com-badge">2</span></div>
          <div class="com-body"><div class="com-row"><span>Organización del estacionamiento</span><span class="com-cnt">2</span></div></div>
        </div>
      </div>
      <div class="org-branch">
        <div class="org-branch-vl"></div>
        <div class="com-card">
          <div class="com-hdr hdr-ali"><div class="com-hdr-l"><span class="com-hdr-icon">🍽️</span><span class="com-hdr-name">Comité de Alimentos y Bebidas</span></div><span class="com-badge">31</span></div>
          <div class="com-body">
            <div class="com-row"><span>Representantes de bodegas</span><span class="com-cnt">16</span></div>
            <div class="com-row"><span>Personal de cocina</span><span class="com-cnt">10</span></div>
            <div class="com-row"><span>Mozos</span><span class="com-cnt">5</span></div>
          </div>
        </div>
      </div>
      <div class="org-branch">
        <div class="org-branch-vl"></div>
        <div class="com-card">
          <div class="com-hdr hdr-mkt"><div class="com-hdr-l"><span class="com-hdr-icon">📣</span><span class="com-hdr-name">Comité de Marketing</span></div><span class="com-badge">2</span></div>
          <div class="com-body"><div class="com-row"><span>Personal de marketing</span><span class="com-cnt">2</span></div></div>
        </div>
      </div>
      <div class="org-branch">
        <div class="org-branch-vl"></div>
        <div class="com-card">
          <div class="com-hdr hdr-seg"><div class="com-hdr-l"><span class="com-hdr-icon">🛡️</span><span class="com-hdr-name">Comité Seguridad e Higiene</span></div><span class="com-badge">5</span></div>
          <div class="com-body">
            <div class="com-row"><span>Personal de seguridad</span><span class="com-cnt">2</span></div>
            <div class="com-row"><span>Personal de limpieza</span><span class="com-cnt">3</span></div>
          </div>
        </div>
      </div>
      <div class="org-branch">
        <div class="org-branch-vl"></div>
        <div class="com-card">
          <div class="com-hdr hdr-asi"><div class="com-hdr-l"><span class="com-hdr-icon">👥</span><span class="com-hdr-name">Comité de Asistencia / Recepción</span></div><span class="com-badge">3</span></div>
          <div class="com-body"><div class="com-row"><span>Recepción y acreditación</span><span class="com-cnt">3–4</span></div></div>
        </div>
      </div>
    </div>
    <div class="org-unassigned">
      <span style="font-size:14pt;color:#888;margin-top:2px">ℹ️</span>
      <div>
        <div class="org-u-title">Comités sin personal asignado</div>
        <div class="org-u-sub">Forman parte de la estructura organizativa pero actualmente no tienen personal asignado.</div>
        <div class="org-u-tags">
          <span class="org-u-tag">📋 Comité Organización y Planificación</span>
          <span class="org-u-tag">🎩 Comité Ceremonial y Protocolo</span>
        </div>
      </div>
    </div>
  </div>
</div>
`

export function Organigrama() {
  return <div className="doc-wrap" dangerouslySetInnerHTML={{ __html: html }} />
}
