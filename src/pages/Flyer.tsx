import { useRef } from 'react'
import { Printer, ExternalLink } from 'lucide-react'

export function Flyer() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handlePrint = () => {
    iframeRef.current?.contentWindow?.print()
  }

  return (
    <div style={{ background: '#141010', minHeight: 'calc(100dvh - 53px)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 20px 40px' }}>

      {/* Toolbar */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 24, alignSelf: 'center' }}>
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
          href="/flyer-cata-vinos.html"
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

      {/* Flyer iframe */}
      <iframe
        ref={iframeRef}
        src="/flyer-cata-vinos.html"
        title="Flyer — Cata de Vinos Argentinos 2026"
        style={{
          width: 794,
          height: 1123,
          border: 'none',
          boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
          flexShrink: 0,
          display: 'block',
        }}
      />
    </div>
  )
}
