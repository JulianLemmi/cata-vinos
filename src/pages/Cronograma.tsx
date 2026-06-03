import { useState, useRef } from 'react'
import { Edit3, Check, Download, Plus, Loader2 } from 'lucide-react'
import { StatsCards }   from '../components/Gantt/StatsCards'
import { GanttLegend }  from '../components/Gantt/GanttLegend'
import { GanttChart }   from '../components/Gantt/GanttChart'
import { AddTaskModal } from '../components/Gantt/AddTaskModal'
import { GANTT_DATA, TaskGroup, Task } from '../components/Gantt/ganttData'

export function Cronograma() {
  const [groups, setGroups]           = useState<TaskGroup[]>(GANTT_DATA)
  const [isEditing, setIsEditing]     = useState(false)
  const [modalOpen, setModalOpen]     = useState(false)
  const [defaultGroupId, setDefaultGroupId] = useState<string | null>(null)
  const [isExporting, setIsExporting] = useState(false)
  const chartRef    = useRef<HTMLDivElement>(null)
  const printableRef = useRef<HTMLDivElement>(null)

  const handleDeleteTask = (groupId: string, taskId: string) =>
    setGroups(prev => prev.map(g => g.id === groupId ? { ...g, tasks: g.tasks.filter(t => t.id !== taskId) } : g))

  const handleUpdateResponsable = (groupId: string, taskId: string, value: string) =>
    setGroups(prev => prev.map(g => g.id === groupId
      ? { ...g, tasks: g.tasks.map(t => t.id === taskId ? { ...t, responsable: value } : t) }
      : g))

  const handleAddTask = (groupId: string, data: { name: string; fLimite: string; responsable: string; activeColumns: string[] }) => {
    const newTask: Task = { id: `t-${Date.now()}`, name: data.name, fLimite: data.fLimite, responsable: data.responsable || undefined, activeColumns: data.activeColumns }
    setGroups(prev => prev.map(g => g.id === groupId ? { ...g, tasks: [...g.tasks, newTask] } : g))
  }

  const openAddModal = (groupId?: string) => { setDefaultGroupId(groupId || null); setModalOpen(true) }

  const handleDownloadPDF = async () => {
    if (!printableRef.current) return
    setIsExporting(true)
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
      const canvas = await html2canvas(printableRef.current, { scale: 2, backgroundColor: '#f8fafc', useCORS: true, windowWidth: printableRef.current.scrollWidth, windowHeight: printableRef.current.scrollHeight })
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: [canvas.width / 2, canvas.height / 2] })
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2)
      pdf.save('cronograma-cata-de-vinos.pdf')
    } catch (err) {
      console.error(err)
      alert('No se pudo generar el PDF.')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center gap-3 flex-wrap mb-4">
        <button onClick={() => openAddModal()} className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 hover:border-indigo-300 hover:text-indigo-700 rounded-lg text-sm font-medium text-slate-700 shadow-sm transition-colors">
          <Plus className="w-4 h-4" /> Nueva tarea
        </button>
        <button
          onClick={() => setIsEditing(p => !p)}
          className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors border ${isEditing ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:text-indigo-700'}`}
        >
          {isEditing ? <Check className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
          {isEditing ? 'Listo' : 'Editar'}
        </button>
        <button onClick={handleDownloadPDF} disabled={isExporting} className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-400 rounded-lg text-sm font-semibold shadow-sm transition-colors">
          {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
          {isExporting ? 'Generando...' : 'Descargar PDF'}
        </button>
      </div>

      {isEditing && (
        <div className="mb-4 px-4 py-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm flex items-center gap-2">
          <Edit3 className="w-4 h-4" />
          <span>Modo edición: eliminá tareas con la papelera, editá el responsable o agregá tareas a cada grupo.</span>
        </div>
      )}

      <div ref={printableRef} className="space-y-4">
        <StatsCards groups={groups} />
        <GanttLegend groups={groups} />
        <GanttChart
          ref={chartRef}
          groups={groups}
          isEditing={isEditing}
          onDeleteTask={handleDeleteTask}
          onUpdateResponsable={handleUpdateResponsable}
          onAddTaskToGroup={openAddModal}
        />
      </div>

      <AddTaskModal open={modalOpen} onClose={() => setModalOpen(false)} groups={groups} defaultGroupId={defaultGroupId} onAdd={handleAddTask} />
    </div>
  )
}
