import { useState } from 'react'
import { Wine, FileText, CheckCircle2, Receipt, Network, Map, CalendarDays, Palette, ChevronRight, Menu, X } from 'lucide-react'
import { Portada }       from './pages/Portada'
import { Brief }         from './pages/Brief'
import { Factibilidad }  from './pages/Factibilidad'
import { Presupuesto }   from './pages/Presupuesto'
import { Organigrama }   from './pages/Organigrama'
import { Plano }         from './pages/Plano'
import { Cronograma }    from './pages/Cronograma'
import { Estetica }      from './pages/Estetica'

type PageId = 'portada' | 'brief' | 'factibilidad' | 'presupuesto' | 'organigrama' | 'plano' | 'estetica' | 'cronograma'

const NAV = [
  { id: 'portada',      label: 'Portada',           icon: Wine,        sub: 'Carátura del trabajo' },
  { id: 'brief',        label: 'Brief del Evento',  icon: FileText,    sub: 'Concepto · Programa · Datos' },
  { id: 'factibilidad', label: 'Factibilidad',       icon: CheckCircle2,sub: 'Análisis y conclusión' },
  { id: 'presupuesto',  label: 'Presupuesto',        icon: Receipt,     sub: 'Costos · Resumen económico' },
  { id: 'organigrama',  label: 'Organigrama',        icon: Network,     sub: 'Estructura del equipo' },
  { id: 'plano',        label: 'Plano del Evento',   icon: Map,         sub: 'Distribución del espacio' },
  { id: 'estetica',     label: 'Estética',           icon: Palette,     sub: 'Concepto · Luz · Vestuario' },
  { id: 'cronograma',   label: 'Cronograma Gantt',   icon: CalendarDays,sub: 'Diagrama de planificación' },
] as const

const PAGE_MAP: Record<PageId, JSX.Element> = {
  portada:      <Portada />,
  brief:        <Brief />,
  factibilidad: <Factibilidad />,
  presupuesto:  <Presupuesto />,
  organigrama:  <Organigrama />,
  plano:        <Plano />,
  estetica:     <Estetica />,
  cronograma:   <Cronograma />,
}

function App() {
  const [active, setActive] = useState<PageId>('portada')
  const [menuOpen, setMenuOpen] = useState(false)
  const current = NAV.find(n => n.id === active)!

  const go = (id: PageId) => {
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <div className="flex h-[100dvh] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── MOBILE BACKDROP ── */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          style={{ background: 'rgba(0,0,0,0.55)' }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── SIDEBAR / DRAWER ── */}
      <aside
        className={`flex flex-col shrink-0 overflow-y-auto fixed lg:static inset-y-0 left-0 z-50 w-[280px] lg:w-[252px] max-w-[85vw] transform transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
        style={{ background: '#1e0608', borderRight: '1px solid #3a1020' }}
      >

        {/* Logo */}
        <div className="px-5 pt-7 pb-5 relative" style={{ borderBottom: '1px solid #3a1020' }}>
          {/* Close (mobile) */}
          <button
            onClick={() => setMenuOpen(false)}
            className="lg:hidden absolute top-4 right-4 p-1.5 rounded-md"
            style={{ background: '#3a1020', color: '#f4b8c8' }}
            aria-label="Cerrar menú"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center rounded-lg w-9 h-9" style={{ background: '#7a1c2e' }}>
              <Wine className="w-5 h-5 text-white" />
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", color: '#c9a84c', fontWeight: 700, fontSize: 15, letterSpacing: 2 }}>L'ECOLE</div>
              <div style={{ color: '#7a5060', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase' }}>Org. de Eventos</div>
            </div>
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>
            Cata de Vinos
          </div>
          <div style={{ color: '#7a5060', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', marginTop: 2 }}>
            Mar del Plata · 2026
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map(({ id, label, icon: Icon, sub }) => {
            const isActive = active === id
            return (
              <button
                key={id}
                onClick={() => go(id as PageId)}
                className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all"
                style={{
                  background: isActive ? '#7a1c2e' : 'transparent',
                  border: isActive ? '1px solid #a0304a' : '1px solid transparent',
                }}
              >
                <Icon
                  className="w-4 h-4 shrink-0"
                  style={{ color: isActive ? '#f4b8c8' : '#6a4050' }}
                />
                <div className="flex-1 min-w-0">
                  <div style={{ color: isActive ? '#fff' : '#c0909a', fontSize: 12, fontWeight: isActive ? 600 : 400, lineHeight: 1.3 }}>
                    {label}
                  </div>
                  <div style={{ color: isActive ? 'rgba(255,255,255,0.55)' : '#503040', fontSize: 9, marginTop: 1 }}>
                    {sub}
                  </div>
                </div>
                {isActive && <ChevronRight className="w-3 h-3 shrink-0" style={{ color: '#f4b8c8' }} />}
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4" style={{ borderTop: '1px solid #3a1020' }}>
          <div style={{ color: '#6a4050', fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 4 }}>Alumno</div>
          <div style={{ color: '#c9a84c', fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 700 }}>Julian Lemmi</div>
          <div style={{ color: '#503040', fontSize: 9, marginTop: 2 }}>Técnico Gastronómico · 2026</div>
          <div style={{ color: '#503040', fontSize: 9 }}>Prof. Tatiana Belén</div>
        </div>
      </aside>

      {/* ── CONTENT ── */}
      <main className="flex-1 overflow-auto min-w-0" style={{ background: active === 'cronograma' ? '#f8fafc' : '#f5f5f0' }}>

        {/* Mobile top bar */}
        <div
          className="lg:hidden sticky top-0 z-30 flex items-center gap-3 px-4 py-3"
          style={{ background: active === 'cronograma' ? '#f8fafc' : '#f5f5f0', borderBottom: '1px solid rgba(122,28,46,0.12)' }}
        >
          <button
            data-menu-toggle
            onClick={() => setMenuOpen(true)}
            className="p-2 -ml-2 rounded-lg"
            style={{ color: '#7a1c2e' }}
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5" />
          </button>
          <current.icon className="w-4 h-4 shrink-0" style={{ color: '#7a1c2e' }} />
          <span className="truncate" style={{ fontFamily: "'Playfair Display', serif", color: '#7a1c2e', fontWeight: 700, fontSize: 15 }}>
            {current.label}
          </span>
        </div>

        {/* Desktop top bar */}
        <div
          className="hidden lg:flex sticky top-0 z-20 items-center gap-3 px-6 py-3"
          style={{ background: active === 'cronograma' ? '#f8fafc' : '#f5f5f0', borderBottom: '1px solid rgba(122,28,46,0.12)' }}
        >
          <current.icon className="w-4 h-4" style={{ color: '#7a1c2e' }} />
          <span style={{ fontFamily: "'Playfair Display', serif", color: '#7a1c2e', fontWeight: 700, fontSize: 15 }}>
            {current.label}
          </span>
          <span style={{ color: '#bbb', fontSize: 12, marginLeft: 4 }}>— {current.sub}</span>
        </div>

        {/* Page content */}
        <div className={active === 'cronograma' ? 'p-3 sm:p-6' : ''}>
          {PAGE_MAP[active]}
        </div>
      </main>
    </div>
  )
}

export { App }
