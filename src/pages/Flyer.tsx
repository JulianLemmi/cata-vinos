import { useRef, useState, useEffect } from 'react'
import { Printer, ExternalLink } from 'lucide-react'

const FLYER_W = 794
const FLYER_H = 1123
// Versión del afiche: subir este número al editar el flyer fuerza recarga (evita caché vieja)
const FLYER_SRC = '/flyer-cata-vinos.html?v=4'

export function Flyer() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  // Escala el afiche (A4 fijo) para que entre en el ancho disponible (mobile)
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const update = () => setScale(Math.min(1, el.clientWidth / FLYER_W))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const handlePrint = () => {
    iframeRef.current?.contentWindow?.print()
  }

  return (
    <div style={{ background: '#141010', minHeight: 'calc(100dvh - 53px)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 12px 40px' }}>

      {/* Toolbar */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20, alignSelf: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={handlePrint}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: '#2a1018', border: '1px solid #4a2030', borderRadius: 6,
            color: '#c9a84c', fontSize: 12, fontWeight: 500, padding: '7px 14px',
            cursor: 'pointer', letterSpacing: '0.04em',
          }}
        >
          <Printer size={13} /> Imprimir
        </button>
        <a
          href={FLYER_SRC}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: '#7a1c2e', border: '1px solid #a0304a', borderRadius: 6,
            color: '#fff', fontSize: 12, fontWeight: 500, padding: '7px 14px',
            textDecoration: 'none', letterSpacing: '0.04em',
          }}
        >
          <ExternalLink size={13} /> Abrir en pantalla completa
        </a>
      </div>

      {/* Contenedor responsive: mide el ancho y escala el afiche */}
      <div ref={wrapRef} style={{ width: '100%', maxWidth: FLYER_W, display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: FLYER_W * scale, height: FLYER_H * scale, flexShrink: 0 }}>
          <iframe
            ref={iframeRef}
            src={FLYER_SRC}
            title="Flyer — Cata de Vinos Argentinos 2026"
            scrolling="no"
            style={{
              width: FLYER_W,
              height: FLYER_H,
              border: 'none',
              boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
              display: 'block',
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          />
        </div>
      </div>
    </div>
  )
}
