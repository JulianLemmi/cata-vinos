import {
  Lightbulb,
  MapPin,
  Wine,
  UtensilsCrossed,
  ShieldAlert,
  CalendarClock,
  Megaphone,
  Users,
  Music,
  Truck,
  Sparkles,
  ShoppingCart,
  Hammer,
  Clock,
  PartyPopper,
  ClipboardCheck,
  LucideIcon,
} from 'lucide-react'

export const TIMELINE_COLUMNS = [
  'M-6', 'M-5', 'M-4', 'M-3', 'M-2', 'M-1',
  'S4', 'S3', 'S2', 'S1',
  'D-3', 'D-2', 'D-1',
  'H-2', 'H', 'H+2', 'H+4',
  'D+1', 'D+2',
]

export type ColorTheme =
  | 'indigo' | 'emerald' | 'rose' | 'amber' | 'red' | 'sky'
  | 'fuchsia' | 'teal' | 'orange' | 'slate' | 'pink' | 'cyan'
  | 'lime' | 'violet' | 'yellow' | 'stone'

export const COLOR_MAP: Record<
  ColorTheme,
  { bg: string; text: string; light: string; border: string; fill: string }
> = {
  indigo:  { bg: 'bg-indigo-500',  text: 'text-indigo-700',  light: 'bg-indigo-50',  border: 'border-indigo-200',  fill: 'fill-indigo-500'  },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-700', light: 'bg-emerald-50', border: 'border-emerald-200', fill: 'fill-emerald-500' },
  rose:    { bg: 'bg-rose-500',    text: 'text-rose-700',    light: 'bg-rose-50',    border: 'border-rose-200',    fill: 'fill-rose-500'    },
  amber:   { bg: 'bg-amber-500',   text: 'text-amber-700',   light: 'bg-amber-50',   border: 'border-amber-200',   fill: 'fill-amber-500'   },
  red:     { bg: 'bg-red-500',     text: 'text-red-700',     light: 'bg-red-50',     border: 'border-red-200',     fill: 'fill-red-500'     },
  sky:     { bg: 'bg-sky-500',     text: 'text-sky-700',     light: 'bg-sky-50',     border: 'border-sky-200',     fill: 'fill-sky-500'     },
  fuchsia: { bg: 'bg-fuchsia-500', text: 'text-fuchsia-700', light: 'bg-fuchsia-50', border: 'border-fuchsia-200', fill: 'fill-fuchsia-500' },
  teal:    { bg: 'bg-teal-500',    text: 'text-teal-700',    light: 'bg-teal-50',    border: 'border-teal-200',    fill: 'fill-teal-500'    },
  orange:  { bg: 'bg-orange-500',  text: 'text-orange-700',  light: 'bg-orange-50',  border: 'border-orange-200',  fill: 'fill-orange-500'  },
  slate:   { bg: 'bg-slate-600',   text: 'text-slate-700',   light: 'bg-slate-50',   border: 'border-slate-200',   fill: 'fill-slate-600'   },
  pink:    { bg: 'bg-pink-500',    text: 'text-pink-700',    light: 'bg-pink-50',    border: 'border-pink-200',    fill: 'fill-pink-500'    },
  cyan:    { bg: 'bg-cyan-500',    text: 'text-cyan-700',    light: 'bg-cyan-50',    border: 'border-cyan-200',    fill: 'fill-cyan-500'    },
  lime:    { bg: 'bg-lime-600',    text: 'text-lime-700',    light: 'bg-lime-50',    border: 'border-lime-200',    fill: 'fill-lime-600'    },
  violet:  { bg: 'bg-violet-500',  text: 'text-violet-700',  light: 'bg-violet-50',  border: 'border-violet-200',  fill: 'fill-violet-500'  },
  yellow:  { bg: 'bg-yellow-500',  text: 'text-yellow-700',  light: 'bg-yellow-50',  border: 'border-yellow-200',  fill: 'fill-yellow-500'  },
  stone:   { bg: 'bg-stone-600',   text: 'text-stone-700',   light: 'bg-stone-50',   border: 'border-stone-200',   fill: 'fill-stone-600'   },
}

export interface Task {
  id: string
  name: string
  fLimite: string
  activeColumns: string[]
  responsable?: string
}

export interface TaskGroup {
  id: string
  name: string
  color: ColorTheme
  icon: LucideIcon
  tasks: Task[]
}

export const GANTT_DATA: TaskGroup[] = [
  {
    id: 'g1',
    name: 'CONCEPTUALIZACIÓN',
    color: 'indigo',
    icon: Lightbulb,
    tasks: [
      { id: 't1', name: 'Definir concepto del evento', fLimite: 'M-6', activeColumns: ['M-6'] },
      { id: 't2', name: 'Definir público objetivo', fLimite: 'M-6', activeColumns: ['M-6'] },
      { id: 't3', name: 'Redactar Brief', fLimite: 'M-6', activeColumns: ['M-6'] },
      { id: 't4', name: 'Factibilidad', fLimite: 'M-6', activeColumns: ['M-6'] },
      { id: 't5', name: 'Presupuesto', fLimite: 'M-6', activeColumns: ['M-6'] },
      { id: 't6', name: 'Búsqueda Proveedor', fLimite: 'M-6', activeColumns: ['M-6'] },
      { id: 't7', name: 'Presupuesto OPE', fLimite: 'M-6', activeColumns: ['M-6'] },
      { id: 't8', name: 'Presupuesto Cliente', fLimite: 'M-6', activeColumns: ['M-6'] },
    ],
  },
  {
    id: 'g2',
    name: 'SALÓN',
    color: 'emerald',
    icon: MapPin,
    tasks: [
      { id: 't9',  name: 'Buscar salón',   fLimite: 'M-5', activeColumns: ['M-6', 'M-5'] },
      { id: 't10', name: 'Visitar salones', fLimite: 'M-5', activeColumns: ['M-5'] },
      { id: 't11', name: 'Reservar salón',  fLimite: 'M-5', activeColumns: ['M-5'] },
      { id: 't12', name: 'Armar planos',    fLimite: 'M-2', activeColumns: ['M-4', 'M-3', 'M-2'] },
    ],
  },
  {
    id: 'g3',
    name: 'BODEGAS Y VINOS',
    color: 'rose',
    icon: Wine,
    tasks: [
      { id: 't13',  name: 'Contactar bodegas',                          fLimite: 'M-4', activeColumns: ['M-5', 'M-4'] },
      { id: 't14',  name: 'Confirmar bodegas',                          fLimite: 'M-3', activeColumns: ['M-4', 'M-3'] },
      { id: 't15',  name: 'Definir vinos',                              fLimite: 'M-3', activeColumns: ['M-4', 'M-3'] },
      { id: 't15a', name: 'Determinar cantidad y tipo de copa',         fLimite: 'M-1', activeColumns: ['M-2', 'M-1'] },
      { id: 't15b', name: 'Contratar servicio de copas y coordinar entrega', fLimite: 'S4', activeColumns: ['M-1', 'S4'] },
    ],
  },
  {
    id: 'g4',
    name: 'GASTRONOMÍA',
    color: 'amber',
    icon: UtensilsCrossed,
    tasks: [
      { id: 't16', name: 'Definir propuesta gastronómica',              fLimite: 'M-3', activeColumns: ['M-5', 'M-4', 'M-3'] },
      { id: 't17', name: 'Investigación de proveedores gastronómicos',  fLimite: 'M-3', activeColumns: ['M-6', 'M-5', 'M-4'] },
      { id: 't18', name: 'Degustación de opciones',                     fLimite: 'M-2', activeColumns: ['M-3', 'M-2'] },
      { id: 't19', name: 'Contratar catering',                          fLimite: 'M-2', activeColumns: ['M-3', 'M-2'] },
    ],
  },
  {
    id: 'g5',
    name: 'SEGURIDAD Y RIESGOS',
    color: 'red',
    icon: ShieldAlert,
    tasks: [
      { id: 't20', name: 'Identificación de riesgos del evento',       fLimite: 'M-2', activeColumns: ['M-3'] },
      { id: 't21', name: 'Plan de contingencia',                        fLimite: 'M-1', activeColumns: ['M-2', 'M-1'] },
      { id: 't22', name: 'Simulación de escenarios críticos',           fLimite: 'M-1', activeColumns: ['M-2', 'M-1'] },
      { id: 't23', name: 'Contratar staff de limpieza',                 fLimite: 'M-1', activeColumns: ['M-3', 'M-2', 'M-1'] },
      { id: 't24', name: 'Contratar ambulancia',                        fLimite: 'M-1', activeColumns: ['M-3', 'M-2', 'M-1'] },
      { id: 't25', name: 'Coordinación y definición del servicio médico', fLimite: 'M-1', activeColumns: ['M-2', 'M-1'] },
    ],
  },
  {
    id: 'g6',
    name: 'CRONOGRAMA',
    color: 'sky',
    icon: CalendarClock,
    tasks: [
      { id: 't26', name: 'Definir horarios de evento',                      fLimite: 'M-3', activeColumns: ['M-4', 'M-3'] },
      { id: 't27', name: 'Elaboración de cronograma técnico',               fLimite: 'M-2', activeColumns: ['M-4', 'M-3', 'M-2'] },
      { id: 't28', name: 'Validar cronograma con sponsor y proveedores',    fLimite: 'M-1', activeColumns: ['M-3', 'M-2', 'M-1'] },
    ],
  },
  {
    id: 'g7',
    name: 'SPONSORS',
    color: 'fuchsia',
    icon: Megaphone,
    tasks: [
      { id: 't29', name: 'Buscar sponsors',    fLimite: 'M-2', activeColumns: ['M-5', 'M-4', 'M-3', 'M-2'] },
      { id: 't30', name: 'Confirmar sponsors', fLimite: 'M-1', activeColumns: ['M-5', 'M-4', 'M-3', 'M-2', 'M-1'] },
    ],
  },
  {
    id: 'g8',
    name: 'PROFESIONALES',
    color: 'teal',
    icon: Users,
    tasks: [
      { id: 't31', name: 'Investigar profesionales',         fLimite: 'M-2', activeColumns: ['M-3', 'M-2'] },
      { id: 't32', name: 'Contactar y evaluar candidatos',  fLimite: 'M-2', activeColumns: ['M-3', 'M-2'] },
      { id: 't33', name: 'Contratar sommelier',             fLimite: 'M-2', activeColumns: ['M-3', 'M-2'] },
      { id: 't34', name: 'Coordinar ensayos y horarios',    fLimite: 'M-2', activeColumns: ['M-3', 'M-2'] },
    ],
  },
  {
    id: 'g9',
    name: 'MÚSICA',
    color: 'orange',
    icon: Music,
    tasks: [
      { id: 't35', name: 'Buscar banda musical',                       fLimite: 'M-3', activeColumns: ['M-3'] },
      { id: 't36', name: 'Contratar banda musical',                    fLimite: 'M-2', activeColumns: ['M-3', 'M-2'] },
      { id: 't37', name: 'Verificación necesidades técnicas de la banda', fLimite: 'M-1', activeColumns: ['M-2', 'M-1'] },
    ],
  },
  {
    id: 'g10',
    name: 'LOGÍSTICA Y SERVICIOS',
    color: 'slate',
    icon: Truck,
    tasks: [
      { id: 't38', name: 'Contratar staff estacionamiento', fLimite: 'M-1', activeColumns: ['M-3', 'M-2', 'M-1'] },
      { id: 't39', name: 'Contratar seguridad',             fLimite: 'M-1', activeColumns: ['M-3', 'M-2', 'M-1'] },
      { id: 't40', name: 'Analizar y buscar transporte',    fLimite: 'M-2', activeColumns: ['M-4', 'M-3'] },
      { id: 't41', name: 'Contratar mobiliario',            fLimite: 'M-2', activeColumns: ['M-3', 'M-2'] },
      { id: 't42', name: 'Coordinar horarios y rutas',      fLimite: 'S4',  activeColumns: ['M-3', 'M-2', 'M-1', 'S4'] },
      { id: 't43', name: 'Contratar sonido',                fLimite: 'M-2', activeColumns: ['M-3', 'M-2'] },
      { id: 't44', name: 'Contratar seguros',               fLimite: 'M-2', activeColumns: ['M-3', 'M-2'] },
      { id: 't45', name: 'Gestionar permisos',              fLimite: 'M-1', activeColumns: ['M-3', 'M-2', 'M-1'] },
    ],
  },
  {
    id: 'g11',
    name: 'MARKETING Y COMUNICACIÓN',
    color: 'pink',
    icon: Sparkles,
    tasks: [
      { id: 't46', name: 'Diseño visual',         fLimite: 'M-1', activeColumns: ['M-3', 'M-2', 'M-1'] },
      { id: 't47', name: 'Lanzamiento entradas',  fLimite: 'S1',  activeColumns: ['M-1', 'S4', 'S3', 'S2', 'S1'] },
      { id: 't48', name: 'Campaña marketing',     fLimite: 'S1',  activeColumns: ['S4', 'S3', 'S2', 'S1', 'D-3'] },
      { id: 't49', name: 'Imprimir papelería',    fLimite: 'S1',  activeColumns: ['S4', 'S3', 'S2', 'S1', 'D-3'] },
    ],
  },
  {
    id: 'g12',
    name: 'PRODUCCIÓN Y COMPRAS',
    color: 'cyan',
    icon: ShoppingCart,
    tasks: [
      { id: 't50', name: 'Confirmar proveedores',             fLimite: 'S2',  activeColumns: ['S3', 'S2', 'S1'] },
      { id: 't51', name: 'Comprar insumos',                   fLimite: 'S1',  activeColumns: ['S2', 'S1', 'D-3', 'D-2'] },
      { id: 't52', name: 'Seguimiento semanal del proyecto',  fLimite: 'S1',  activeColumns: ['S4', 'S3', 'S2', 'S1', 'D-3'] },
      { id: 't53', name: 'Coordinar logística',               fLimite: 'D-3', activeColumns: ['D-3', 'D-2', 'D-1'] },
      { id: 't54', name: 'Recepción materiales',              fLimite: 'D-1', activeColumns: ['D-3', 'D-2', 'D-1'] },
      { id: 't55', name: 'Control de inventario',             fLimite: 'D-1', activeColumns: ['D-2', 'D-1'] },
    ],
  },
  {
    id: 'g13',
    name: 'MONTAJE',
    color: 'lime',
    icon: Hammer,
    tasks: [
      { id: 't56', name: 'Armado de stands',      fLimite: 'D-1', activeColumns: ['D-1'] },
      { id: 't57', name: 'Prueba de stands',       fLimite: 'H-2', activeColumns: ['H-2'] },
      { id: 't58', name: 'Armado salón',           fLimite: 'D-1', activeColumns: ['D-2', 'D-1'] },
      { id: 't59', name: 'Instalación técnica',    fLimite: 'D-1', activeColumns: ['D-2', 'D-1'] },
      { id: 't60', name: 'Prueba de sonido',       fLimite: 'D-1', activeColumns: ['D-1'] },
    ],
  },
  {
    id: 'g14',
    name: 'DÍA DEL EVENTO · PREVIA',
    color: 'violet',
    icon: Clock,
    tasks: [
      { id: 't61', name: 'Recepción staff',              fLimite: 'H-2', activeColumns: ['H-2', 'H'] },
      { id: 't62', name: 'Reunión con staff',             fLimite: 'H-2', activeColumns: ['H-2', 'H'] },
      { id: 't63', name: 'Recepción de proveedores',      fLimite: 'H-2', activeColumns: ['H-2'] },
      { id: 't64', name: 'Recepción de bodegas',          fLimite: 'H-2', activeColumns: ['H-2'] },
      { id: 't65', name: 'Control que todo esté en orden', fLimite: 'H-2', activeColumns: ['H-2', 'H'] },
      { id: 't66', name: 'Ingreso invitados',             fLimite: 'H-2', activeColumns: ['H-2'] },
      { id: 't67', name: 'Inicio evento',                 fLimite: 'H',   activeColumns: ['H'] },
    ],
  },
  {
    id: 'g15',
    name: 'DURANTE EL EVENTO',
    color: 'yellow',
    icon: PartyPopper,
    tasks: [
      { id: 't68', name: 'Supervisión general',                fLimite: 'D+1', activeColumns: ['H', 'H+2', 'H+4', 'D+1', 'D+2'] },
      { id: 't69', name: 'Supervisión de consumo',             fLimite: 'H+4', activeColumns: ['H', 'H+2', 'H+4'] },
      { id: 't70', name: 'Control de satisfacción del público', fLimite: 'H+4', activeColumns: ['H', 'H+2', 'H+4'] },
      { id: 't71', name: 'Desarrollo cata',                    fLimite: 'H+4', activeColumns: ['H', 'H+2', 'H+4'] },
      { id: 't72', name: 'Resolución de incidencias',          fLimite: 'D+1', activeColumns: ['H-2', 'H', 'H+2', 'H+4', 'D+1'] },
      { id: 't73', name: 'Cierre stands',                      fLimite: 'H+4', activeColumns: ['H+4'] },
      { id: 't74', name: 'Presentación banda',                 fLimite: 'H+2', activeColumns: ['H+2', 'H+4'] },
      { id: 't75', name: 'Inicio banda',                       fLimite: 'H+2', activeColumns: ['H+2', 'H+4'] },
      { id: 't76', name: 'Control de limpieza durante evento', fLimite: 'H+4', activeColumns: ['H-2', 'H', 'H+2', 'H+4'] },
      { id: 't77', name: 'Control de tiempos de cronograma',   fLimite: 'H+4', activeColumns: ['H-2', 'H', 'H+2', 'H+4'] },
      { id: 't78', name: 'Gestión de residuos',                fLimite: 'H+4', activeColumns: ['H-2', 'H', 'H+2', 'H+4'] },
      { id: 't79', name: 'Fin banda',                          fLimite: 'H+4', activeColumns: ['H+4'] },
      { id: 't80', name: 'Despacho de invitados',              fLimite: 'H+4', activeColumns: ['H+4'] },
      { id: 't81', name: 'Cierre evento',                      fLimite: 'H+4', activeColumns: ['H+4'] },
      { id: 't82', name: 'Generación contenido',               fLimite: 'H+4', activeColumns: ['D-1', 'H-2', 'H', 'H+2', 'H+4', 'D+1'] },
    ],
  },
  {
    id: 'g16',
    name: 'POST-EVENTO',
    color: 'stone',
    icon: ClipboardCheck,
    tasks: [
      { id: 't83', name: 'Encuestas a asistentes',          fLimite: 'D+1', activeColumns: ['D+1'] },
      { id: 't84', name: 'Evaluación de proveedores',       fLimite: 'D+1', activeColumns: ['D+1'] },
      { id: 't85', name: 'Análisis de resultado de evento', fLimite: 'D+1', activeColumns: ['D+1'] },
      { id: 't86', name: 'Desmontaje',                      fLimite: 'H+4', activeColumns: ['H+4'] },
      { id: 't87', name: 'Números gastos vs ingresos',      fLimite: 'D+1', activeColumns: ['D+1'] },
      { id: 't88', name: 'Limpieza',                        fLimite: 'D+1', activeColumns: ['H+4', 'D+1'] },
      { id: 't89', name: 'Liquidaciones finales',           fLimite: 'D+1', activeColumns: ['D+1'] },
      { id: 't90', name: 'Envío regalos',                   fLimite: 'D+2', activeColumns: ['D+2'] },
      { id: 't91', name: 'Referencias',                     fLimite: 'D+1', activeColumns: ['H+2', 'H+4', 'D+1', 'D+2'] },
      { id: 't92', name: 'Evaluación final',                fLimite: 'D+2', activeColumns: ['D+2'] },
    ],
  },
]
