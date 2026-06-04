import '../doc.css'

const svgAndLegend = `
<div class="doc-page">
  <div class="page-header">
    <div class="page-header-title">Plano del Evento</div>
    <div class="page-header-sub">Distribución, circulación y evacuación — Barrio ARAS, Mar del Plata</div>
  </div>

  <svg viewBox="0 0 880 555" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;border-radius:6px;">
    <rect width="880" height="555" fill="#f0ece8" rx="6"/>
    <rect x="8" y="8" width="426" height="292" fill="#c8a0a8" stroke="#7a5060" stroke-width="2" rx="4"/>
    <text x="220" y="185" text-anchor="middle" fill="#4a2030" font-size="15" font-weight="bold" font-family="Georgia,serif">Salón Principal</text>
    <rect x="96" y="14" width="238" height="50" fill="#8a5060" rx="4"/>
    <text x="215" y="44" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Arial,sans-serif">Escenario</text>
    <rect x="360" y="13" width="68" height="84" fill="#a8c8d8" rx="4"/>
    <circle cx="394" cy="33" r="9" fill="#4a88b0"/>
    <circle cx="376" cy="58" r="7" fill="#6aaac8" stroke="white" stroke-width="1.5"/>
    <circle cx="394" cy="68" r="7" fill="#6aaac8" stroke="white" stroke-width="1.5"/>
    <circle cx="412" cy="58" r="7" fill="#6aaac8" stroke="white" stroke-width="1.5"/>
    <text x="394" y="92" text-anchor="middle" fill="#2a6080" font-size="7.5" font-family="Arial,sans-serif" font-weight="600">Hidratación</text>
    <rect x="10" y="80"  width="23" height="22" fill="#7a4050" rx="2"/><text x="21" y="95"  text-anchor="middle" fill="white" font-size="7" font-family="Arial,sans-serif">M1</text>
    <rect x="10" y="106" width="23" height="22" fill="#7a4050" rx="2"/><text x="21" y="121" text-anchor="middle" fill="white" font-size="7" font-family="Arial,sans-serif">M2</text>
    <rect x="10" y="132" width="23" height="22" fill="#7a4050" rx="2"/><text x="21" y="147" text-anchor="middle" fill="white" font-size="7" font-family="Arial,sans-serif">M3</text>
    <rect x="10" y="158" width="23" height="22" fill="#7a4050" rx="2"/><text x="21" y="173" text-anchor="middle" fill="white" font-size="7" font-family="Arial,sans-serif">M4</text>
    <rect x="10" y="184" width="23" height="22" fill="#7a4050" rx="2"/><text x="21" y="199" text-anchor="middle" fill="white" font-size="7" font-family="Arial,sans-serif">M5</text>
    <rect x="10" y="210" width="23" height="22" fill="#7a4050" rx="2"/><text x="21" y="225" text-anchor="middle" fill="white" font-size="7" font-family="Arial,sans-serif">M6</text>
    <rect x="10" y="236" width="23" height="22" fill="#7a4050" rx="2"/><text x="21" y="251" text-anchor="middle" fill="white" font-size="7" font-family="Arial,sans-serif">M7</text>
    <rect x="10" y="262" width="23" height="22" fill="#7a4050" rx="2"/><text x="21" y="277" text-anchor="middle" fill="white" font-size="7" font-family="Arial,sans-serif">M8</text>
    <rect x="10" y="278" width="23" height="20" fill="#7a4050" rx="2"/><text x="21" y="292" text-anchor="middle" fill="white" font-size="7" font-family="Arial,sans-serif">M9</text>
    <rect x="402" y="100" width="23" height="22" fill="#7a4050" rx="2"/><text x="413" y="115" text-anchor="middle" fill="white" font-size="6.5" font-family="Arial,sans-serif">M10</text>
    <rect x="402" y="126" width="23" height="22" fill="#7a4050" rx="2"/><text x="413" y="141" text-anchor="middle" fill="white" font-size="6.5" font-family="Arial,sans-serif">M11</text>
    <rect x="402" y="152" width="23" height="22" fill="#7a4050" rx="2"/><text x="413" y="167" text-anchor="middle" fill="white" font-size="6.5" font-family="Arial,sans-serif">M12</text>
    <rect x="402" y="178" width="23" height="22" fill="#7a4050" rx="2"/><text x="413" y="193" text-anchor="middle" fill="white" font-size="6.5" font-family="Arial,sans-serif">M13</text>
    <rect x="402" y="204" width="23" height="22" fill="#7a4050" rx="2"/><text x="413" y="219" text-anchor="middle" fill="white" font-size="6.5" font-family="Arial,sans-serif">M14</text>
    <rect x="402" y="230" width="23" height="22" fill="#7a4050" rx="2"/><text x="413" y="245" text-anchor="middle" fill="white" font-size="6.5" font-family="Arial,sans-serif">M15</text>
    <rect x="402" y="256" width="23" height="22" fill="#7a4050" rx="2"/><text x="413" y="271" text-anchor="middle" fill="white" font-size="6.5" font-family="Arial,sans-serif">M16</text>
    <circle cx="175" cy="220" r="22" fill="#d4b8c0" stroke="#7a4050" stroke-width="2"/>
    <text x="175" y="217" text-anchor="middle" fill="#4a2030" font-size="8" font-family="Arial,sans-serif" font-weight="600">Alta</text>
    <text x="175" y="229" text-anchor="middle" fill="#4a2030" font-size="8" font-family="Arial,sans-serif" font-weight="600">1</text>
    <circle cx="285" cy="220" r="22" fill="#d4b8c0" stroke="#7a4050" stroke-width="2"/>
    <text x="285" y="217" text-anchor="middle" fill="#4a2030" font-size="8" font-family="Arial,sans-serif" font-weight="600">Alta</text>
    <text x="285" y="229" text-anchor="middle" fill="#4a2030" font-size="8" font-family="Arial,sans-serif" font-weight="600">2</text>
    <rect x="434" y="8" width="72" height="292" fill="#e8dce0" stroke="#c0a8b0" stroke-width="1.5" rx="2"/>
    <text x="470" y="90" text-anchor="middle" fill="#a08496" font-size="8" font-family="Arial,sans-serif" font-weight="600">Hall</text>
    <!-- Pasillo central: conecta Salón Principal y Secundario -->
    <rect x="437" y="159" width="64" height="41" fill="#d8c4cf" stroke="#b89aaa" stroke-width="1" rx="3"/>
    <text x="469" y="175" text-anchor="middle" fill="#5a3a48" font-size="6.8" font-family="Arial,sans-serif" font-weight="700">BAÑO</text>
    <text x="469" y="184" text-anchor="middle" fill="#5a3a48" font-size="6.8" font-family="Arial,sans-serif" font-weight="700">MUJERES ♀</text>
    <rect x="437" y="203" width="64" height="42" fill="#eef1f6"/>
    <text x="469" y="214" text-anchor="middle" fill="#2563eb" font-size="6.5" font-family="Arial,sans-serif" font-weight="700" opacity="0.85">PASAJE</text>
    <rect x="437" y="248" width="64" height="22" fill="#c6cfd8" stroke="#9aaab8" stroke-width="1" rx="3"/>
    <text x="469" y="262" text-anchor="middle" fill="#33424f" font-size="6.3" font-family="Arial,sans-serif" font-weight="700">BAÑO HOMBRES ♂</text>
    <rect x="437" y="273" width="64" height="24" fill="#e6ddc4" stroke="#bcae88" stroke-width="1" rx="3"/>
    <text x="469" y="288" text-anchor="middle" fill="#5a4a20" font-size="7" font-family="Arial,sans-serif" font-weight="700">OFICINA</text>
    <rect x="506" y="8" width="140" height="148" fill="#d8bcc4" stroke="#b89aaa" stroke-width="1.5" rx="3"/>
    <text x="576" y="50" text-anchor="middle" fill="#4a2030" font-size="10" font-family="Arial,sans-serif" font-weight="600">Sofás / Lounge</text>
    <rect x="518" y="70" width="48" height="32" fill="#b89898" rx="8"/>
    <rect x="576" y="70" width="48" height="32" fill="#b89898" rx="8"/>
    <rect x="522" y="66" width="11" height="40" fill="#a08080" rx="4"/>
    <rect x="580" y="66" width="11" height="40" fill="#a08080" rx="4"/>
    <!-- (baños reubicados al pasillo central: ver Baño Mujeres / Hombres) -->
    <rect x="646" y="8" width="108" height="148" fill="#d4c4a0" stroke="#b09870" stroke-width="1.5" rx="3"/>
    <text x="700" y="46" text-anchor="middle" fill="#5a4820" font-size="11" font-family="Arial,sans-serif" font-weight="600">Cocina</text>
    <rect x="658" y="58" width="34" height="28" fill="#baa878" rx="3"/>
    <rect x="700" y="58" width="34" height="28" fill="#baa878" rx="3"/>
    <circle cx="663" cy="108" r="8" fill="#c8b880"/>
    <circle cx="680" cy="108" r="8" fill="#c8b880"/>
    <circle cx="697" cy="108" r="8" fill="#c8b880"/>
    <circle cx="714" cy="108" r="8" fill="#c8b880"/>
    <rect x="722" y="97" width="18" height="30" fill="#baa878" rx="2"/>
    <rect x="506" y="156" width="248" height="144" fill="#c8a0a8" stroke="#7a5060" stroke-width="1.5" rx="3"/>
    <text x="630" y="205" text-anchor="middle" fill="#4a2030" font-size="11" font-family="Arial,sans-serif" font-weight="600">Salón Secundario</text>
    <circle cx="548" cy="242" r="14" fill="#d4b8c0" stroke="#7a4050" stroke-width="1.5"/>
    <circle cx="590" cy="252" r="14" fill="#d4b8c0" stroke="#7a4050" stroke-width="1.5"/>
    <circle cx="632" cy="252" r="14" fill="#d4b8c0" stroke="#7a4050" stroke-width="1.5"/>
    <circle cx="674" cy="242" r="14" fill="#d4b8c0" stroke="#7a4050" stroke-width="1.5"/>
    <circle cx="548" cy="280" r="14" fill="#d4b8c0" stroke="#7a4050" stroke-width="1.5"/>
    <circle cx="706" cy="280" r="14" fill="#d4b8c0" stroke="#7a4050" stroke-width="1.5"/>
    <rect x="754" y="8" width="118" height="292" fill="#c8d8c0" stroke="#88b080" stroke-width="1.5" rx="3"/>
    <text x="813" y="155" text-anchor="middle" fill="#2a5828" font-size="9.5" font-family="Arial,sans-serif" font-weight="600" transform="rotate(-90,813,155)">Exterior Este</text>
    <rect x="764" y="65" width="92" height="50" fill="#c8b888" stroke="#9a8850" stroke-width="1.5" rx="3"/>
    <text x="810" y="87" text-anchor="middle" fill="#5a4020" font-size="9" font-family="Arial,sans-serif" font-weight="600">Stand</text>
    <text x="810" y="103" text-anchor="middle" fill="#5a4020" font-size="9" font-family="Arial,sans-serif" font-weight="600">Comida</text>
    <rect x="8" y="300" width="456" height="247" fill="#9ba8b5" stroke="#6a7888" stroke-width="2" rx="4"/>
    <text x="115" y="340" text-anchor="middle" fill="#1a2838" font-size="14" font-family="Arial,sans-serif" font-weight="bold">Estacionamiento</text>
    <rect x="20"  y="386" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="62"  y="386" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="104" y="386" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="146" y="386" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="188" y="386" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="230" y="386" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="272" y="386" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="20"  y="416" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="62"  y="416" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="104" y="416" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="150" y="410" width="40" height="36" fill="#fff" stroke="#e53935" stroke-width="2" rx="4"/>
    <line x1="170" y1="415" x2="170" y2="441" stroke="#e53935" stroke-width="3"/>
    <line x1="157" y1="428" x2="183" y2="428" stroke="#e53935" stroke-width="3"/>
    <text x="170" y="452" text-anchor="middle" fill="#e53935" font-size="6.5" font-family="Arial,sans-serif" font-weight="700">EMERG</text>
    <rect x="196" y="416" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="238" y="416" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="20"  y="462" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="62"  y="462" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="104" y="462" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="146" y="462" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="188" y="462" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="20"  y="500" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="104" y="500" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="146" y="500" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="188" y="500" width="38" height="22" fill="#8090a0" rx="2"/>
    <rect x="464" y="300" width="408" height="247" fill="#c8d8c0" stroke="#88b080" stroke-width="1.5" rx="3"/>
    <text x="540" y="332" text-anchor="middle" fill="#2a5828" font-size="11" font-family="Arial,sans-serif" font-weight="600">Exterior Sur</text>
    <rect x="474" y="360" width="112" height="52" fill="#c8b888" stroke="#9a8850" stroke-width="1.5" rx="3"/>
    <text x="530" y="382" text-anchor="middle" fill="#5a4020" font-size="9.5" font-family="Arial,sans-serif" font-weight="600">Stand</text>
    <text x="530" y="398" text-anchor="middle" fill="#5a4020" font-size="9.5" font-family="Arial,sans-serif" font-weight="600">Tragos</text>
    <rect x="644" y="360" width="112" height="52" fill="#c8b888" stroke="#9a8850" stroke-width="1.5" rx="3"/>
    <text x="700" y="382" text-anchor="middle" fill="#5a4020" font-size="9.5" font-family="Arial,sans-serif" font-weight="600">Stand</text>
    <text x="700" y="398" text-anchor="middle" fill="#5a4020" font-size="9.5" font-family="Arial,sans-serif" font-weight="600">Comida</text>
    <circle cx="856" cy="24" r="16" fill="white" stroke="#aaa" stroke-width="1.5"/>
    <text x="856" y="20" text-anchor="middle" fill="#222" font-size="8.5" font-family="Arial,sans-serif" font-weight="700">N</text>
    <polygon points="856,25 851,33 856,31 861,33" fill="#222"/>

    <!-- ── PASILLOS, FLUJO Y ACCESOS ─────────────────────── -->
    <!-- Pasillos de circulación (carriles) -->
    <g>
      <rect x="50"  y="66"  width="30"  height="226" fill="#2563eb" opacity="0.08" rx="6"/>
      <rect x="78"  y="66"  width="272" height="28"  fill="#2563eb" opacity="0.08" rx="6"/>
      <rect x="372" y="100" width="30"  height="192" fill="#2563eb" opacity="0.08" rx="6"/>
      <rect x="78"  y="278" width="324" height="22"  fill="#2563eb" opacity="0.08" rx="6"/>
    </g>

    <!-- Flechas de circulación (sentido horario) -->
    <g stroke="#2563eb" stroke-width="3.5" stroke-linecap="round">
      <line x1="65" y1="270" x2="65" y2="100"/>
      <line x1="92" y1="80" x2="342" y2="80"/>
      <line x1="387" y1="104" x2="387" y2="268"/>
      <line x1="388" y1="289" x2="296" y2="289"/>
      <line x1="196" y1="289" x2="96" y2="289"/>
    </g>
    <g fill="#2563eb">
      <polygon points="59,104 71,104 65,92"/>
      <polygon points="346,74 346,86 358,80"/>
      <polygon points="381,264 393,264 387,276"/>
      <polygon points="300,283 300,295 288,289"/>
      <polygon points="100,283 100,295 88,289"/>
    </g>
    <text x="245" y="160" text-anchor="middle" fill="#2563eb" font-size="9" font-family="Arial,sans-serif" font-weight="700" opacity="0.85">↻ Circulación (sentido horario)</text>

    <!-- Recepción / Acreditación / Copas -->
    <rect x="150" y="258" width="190" height="24" fill="#6a2738" rx="4"/>
    <text x="245" y="274" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial,sans-serif" font-weight="600">RECEPCIÓN · ACREDITACIÓN · COPAS</text>

    <!-- Entrada principal (sur, desde el estacionamiento) -->
    <rect x="205" y="296" width="80" height="9" fill="#efeae6"/>
    <line x1="245" y1="356" x2="245" y2="312" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
    <polygon points="238,316 252,316 245,304" fill="#334155"/>
    <text x="245" y="372" text-anchor="middle" fill="#1a2838" font-size="9" font-family="Arial,sans-serif" font-weight="700">ENTRADA PRINCIPAL</text>

    <!-- Salida de emergencia 1 (oeste) -->
    <rect x="5" y="28" width="8" height="46" fill="#1b7f3b"/>
    <line x1="44" y1="52" x2="16" y2="52" stroke="#1b7f3b" stroke-width="3" stroke-linecap="round"/>
    <polygon points="20,46 20,58 8,52" fill="#1b7f3b"/>
    <text x="70" y="66" text-anchor="middle" fill="#1b7f3b" font-size="7.5" font-family="Arial,sans-serif" font-weight="700">SALIDA EMERG.</text>

    <!-- Salida de emergencia 2 (este) -->
    <rect x="750" y="214" width="8" height="48" fill="#1b7f3b"/>
    <line x1="724" y1="238" x2="752" y2="238" stroke="#1b7f3b" stroke-width="3" stroke-linecap="round"/>
    <polygon points="748,232 748,244 760,238" fill="#1b7f3b"/>
    <text x="702" y="178" text-anchor="middle" fill="#1b7f3b" font-size="7.5" font-family="Arial,sans-serif" font-weight="700">SALIDA EMERG.</text>

    <!-- ── PUERTAS, ACCESOS Y FLUJO SECUNDARIO ────────────── -->
    <!-- Mesas altas reubicadas en el Salón Secundario -->
    <rect x="516" y="165" width="34" height="15" fill="#c0a8b4" stroke="#9a8090" stroke-width="0.8" rx="4"/>
    <text x="533" y="176" text-anchor="middle" fill="#fff" font-size="6.3" font-family="Arial,sans-serif">Alta 1</text>
    <rect x="556" y="165" width="34" height="15" fill="#c0a8b4" stroke="#9a8090" stroke-width="0.8" rx="4"/>
    <text x="573" y="176" text-anchor="middle" fill="#fff" font-size="6.3" font-family="Arial,sans-serif">Alta 2</text>

    <!-- Acceso a la cocina desde el sur (SOLO PERSONAL) -->
    <rect x="686" y="152" width="32" height="8" fill="#efeae6"/>
    <line x1="702" y1="182" x2="702" y2="162" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3"/>
    <polygon points="697,166 707,166 702,157" fill="#64748b"/>
    <text x="676" y="150" text-anchor="middle" fill="#475569" font-size="6" font-family="Arial,sans-serif" font-weight="700">PERSONAL</text>

    <!-- Acceso este: cocina → stand del exterior (servicio) -->
    <rect x="750" y="78" width="8" height="32" fill="#efeae6"/>
    <line x1="744" y1="94" x2="772" y2="94" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3"/>
    <polygon points="768,89 768,99 779,94" fill="#64748b"/>
    <text x="731" y="150" text-anchor="middle" fill="#475569" font-size="6" font-family="Arial,sans-serif" font-weight="700">→ STAND</text>

    <!-- Puerta de salida sur del Salón Secundario al exterior -->
    <rect x="595" y="296" width="42" height="9" fill="#efeae6"/>
    <line x1="616" y1="305" x2="616" y2="343" stroke="#334155" stroke-width="3.5" stroke-linecap="round"/>
    <polygon points="609,339 623,339 616,351" fill="#334155"/>
    <text x="616" y="366" text-anchor="middle" fill="#1a2838" font-size="8" font-family="Arial,sans-serif" font-weight="700">SALIDA SUR</text>

    <!-- Aperturas del pasaje (oeste→Principal, este→Secundario) -->
    <rect x="430" y="212" width="9"  height="26" fill="#eef1f6"/>
    <rect x="499" y="212" width="10" height="26" fill="#eef1f6"/>

    <!-- Flujo de público (circulación secundaria) -->
    <g stroke="#2563eb" stroke-width="3" stroke-linecap="round" opacity="0.9">
      <line x1="440" y1="224" x2="498" y2="224"/>   <!-- pasaje hacia el este -->
      <line x1="514" y1="224" x2="584" y2="224"/>   <!-- dentro del Salón Secundario -->
      <line x1="616" y1="252" x2="616" y2="290"/>   <!-- hacia la salida sur -->
      <line x1="600" y1="356" x2="562" y2="374"/>   <!-- exterior: hacia Stand Tragos -->
      <line x1="632" y1="356" x2="684" y2="374"/>   <!-- exterior: hacia Stand Comida -->
    </g>
    <g fill="#2563eb" opacity="0.9">
      <polygon points="494,218 494,230 506,224"/>
      <polygon points="580,218 580,230 592,224"/>
      <polygon points="610,286 622,286 616,298"/>
      <polygon points="566,366 558,378 572,378"/>
      <polygon points="680,366 688,378 674,378"/>
    </g>

    <!-- Unión Exterior Este ↔ Exterior Sur (patio continuo) -->
    <rect x="755" y="295" width="116" height="11" fill="#c8d8c0"/>
    <text x="815" y="512" text-anchor="middle" fill="#2a5828" font-size="10" font-family="Arial,sans-serif" font-weight="600">Patio exterior</text>
    <g stroke="#2563eb" stroke-width="3" stroke-linecap="round" opacity="0.85">
      <line x1="826" y1="285" x2="826" y2="418"/>   <!-- Exterior Este → patio -->
      <line x1="812" y1="458" x2="710" y2="458"/>   <!-- patio → Exterior Sur -->
    </g>
    <g fill="#2563eb" opacity="0.85">
      <polygon points="820,414 832,414 826,426"/>
      <polygon points="714,452 714,464 702,458"/>
    </g>
  </svg>

  <div class="fp-legend">
    <div class="fp-litem"><div class="fp-lbox" style="background:#c8a0a8;border:1px solid #7a5060"></div> Salón principal / secundario</div>
    <div class="fp-litem"><div class="fp-lbox" style="background:#7a4050"></div> Stands de bodegas (M1–M16)</div>
    <div class="fp-litem"><div class="fp-lbox" style="background:#a8c8d8"></div> Hidratación</div>
    <div class="fp-litem"><div class="fp-lbox" style="background:#d4c4a0;border:1px solid #b09870"></div> Cocina</div>
    <div class="fp-litem"><div class="fp-lbox" style="background:#d8bcc4;border:1px solid #b89aaa"></div> Sofás / Lounge</div>
    <div class="fp-litem"><div class="fp-lbox" style="background:#c8d8c0;border:1px solid #88b080"></div> Exteriores</div>
    <div class="fp-litem"><div class="fp-lbox" style="background:#9ba8b5;border:1px solid #6a7888"></div> Estacionamiento</div>
    <div class="fp-litem"><div class="fp-lbox" style="background:#c8b888;border:1px solid #9a8850"></div> Stands gastronomía / tragos</div>
    <div class="fp-litem"><div class="fp-lbox" style="background:#334155"></div> Entrada principal / Recepción</div>
    <div class="fp-litem"><div class="fp-lbox" style="background:#1b7f3b"></div> Salida de emergencia</div>
    <div class="fp-litem"><div class="fp-lbox" style="background:#2563eb;opacity:.5"></div> Pasillos · circulación / flujo de público</div>
    <div class="fp-litem"><div class="fp-lbox" style="background:#d8c4cf;border:1px solid #b89aaa"></div> Baños (Mujeres / Hombres) · Oficina</div>
    <div class="fp-litem"><div class="fp-lbox" style="background:#64748b"></div> Acceso de personal / servicio</div>
  </div>
</div>
`

export function Plano() {
  return <div className="doc-wrap" dangerouslySetInnerHTML={{ __html: svgAndLegend }} />
}
