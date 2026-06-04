import React from 'react'
import { Trash2 } from 'lucide-react'
import { Task, TaskGroup, COLOR_MAP } from './ganttData'
import { GanttBar } from './GanttBar'

interface GanttRowProps {
  task: Task
  group: TaskGroup
  index: number
  isEditing?: boolean
  onDelete?: () => void
  onUpdateResponsable?: (value: string) => void
}

export function GanttRow({ task, group, index, isEditing, onDelete, onUpdateResponsable }: GanttRowProps) {
  const colors = COLOR_MAP[group.color]

  return (
    <div className="flex w-full group hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0 min-h-[3rem]">
      {/* Frozen Left Column */}
      <div className="shrink-0 sticky left-0 z-20 bg-white group-hover:bg-slate-50 border-r border-slate-200 flex transition-colors" style={{ width: 'var(--frozen-w)' }}>
        {/* Acción */}
        <div className="flex-1 min-w-0 p-3 flex items-center border-r border-slate-100 md:border-r md:w-[280px] md:flex-none md:shrink-0">
          <div className="flex items-start space-x-2 pr-1 md:pr-2 flex-1 min-w-0">
            {isEditing && (
              <button
                onClick={onDelete}
                className="p-1 mt-0.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors shrink-0"
                title="Eliminar tarea"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <div className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${colors.bg}`} />
            <div className="min-w-0 flex-1">
              <span className="block text-sm text-slate-700 font-medium leading-snug break-words" title={task.name}>
                {task.name}
              </span>
              {/* F. Límite + responsable (solo mobile, donde se ocultan las columnas) */}
              <div className="md:hidden mt-1 flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200 whitespace-nowrap">
                  {task.fLimite}
                </span>
                {task.responsable && (
                  <span className="text-[10px] text-slate-400 truncate">{task.responsable}</span>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Responsable */}
        <div className="hidden md:flex w-[180px] shrink-0 p-3 items-center border-r border-slate-100">
          {isEditing ? (
            <input
              type="text"
              value={task.responsable || ''}
              onChange={(e) => onUpdateResponsable?.(e.target.value)}
              placeholder="Agregar..."
              className="w-full px-2 py-1 text-sm border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-white"
            />
          ) : (
            <span className={`text-sm ${task.responsable ? 'text-slate-700' : 'text-slate-300'} break-words leading-snug`}>
              {task.responsable || '—'}
            </span>
          )}
        </div>
        {/* F. Límite */}
        <div className="hidden md:flex w-[100px] shrink-0 p-3 items-center justify-center">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 whitespace-nowrap">
            {task.fLimite}
          </span>
        </div>
      </div>

      {/* Timeline Grid Row */}
      <div className="flex-1 relative min-h-[3rem]">
        <div className="absolute inset-0 grid grid-cols-[repeat(19,minmax(64px,1fr))] w-full min-w-[1216px] pointer-events-none">
          {Array.from({ length: 19 }).map((_, i) => (
            <div key={i} className="border-r border-slate-100/50 h-full" />
          ))}
        </div>
        <div className="relative grid grid-cols-[repeat(19,minmax(64px,1fr))] w-full min-w-[1216px] h-full min-h-[3rem]">
          <GanttBar task={task} colorTheme={group.color} index={index} />
        </div>
      </div>
    </div>
  )
}
