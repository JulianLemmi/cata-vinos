import React, { useState, useRef, forwardRef } from 'react'
import { COLOR_MAP, TIMELINE_COLUMNS, TaskGroup } from './ganttData'
import { GanttHeader } from './GanttHeader'
import { GanttRow } from './GanttRow'
import { Flag, Plus } from 'lucide-react'

interface GanttChartProps {
  groups: TaskGroup[]
  isEditing?: boolean
  onDeleteTask?: (groupId: string, taskId: string) => void
  onUpdateResponsable?: (groupId: string, taskId: string, value: string) => void
  onAddTaskToGroup?: (groupId: string) => void
}

export const GanttChart = forwardRef<HTMLDivElement, GanttChartProps>(
  function GanttChart({ groups, isEditing, onDeleteTask, onUpdateResponsable, onAddTaskToGroup }, ref) {
    const eventColumnIndex = TIMELINE_COLUMNS.indexOf('H')
    const scrollRef = useRef<HTMLDivElement>(null)
    const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0, moved: false })
    const [isGrabbing, setIsGrabbing] = useState(false)

    const isInteractive = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false
      return !!target.closest('button, input, select, textarea, a, [data-no-drag]')
    }

    const handleMouseDown = (e: React.MouseEvent) => {
      if (e.button !== 0) return
      if (isInteractive(e.target)) return
      if (!scrollRef.current) return
      dragState.current = {
        isDown: true,
        startX: e.pageX - scrollRef.current.offsetLeft,
        scrollLeft: scrollRef.current.scrollLeft,
        moved: false,
      }
      setIsGrabbing(true)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!dragState.current.isDown || !scrollRef.current) return
      e.preventDefault()
      const x = e.pageX - scrollRef.current.offsetLeft
      const walk = x - dragState.current.startX
      if (Math.abs(walk) > 3) dragState.current.moved = true
      scrollRef.current.scrollLeft = dragState.current.scrollLeft - walk
    }

    const endDrag = () => {
      dragState.current.isDown = false
      setIsGrabbing(false)
    }

    const handleClickCapture = (e: React.MouseEvent) => {
      if (dragState.current.moved) {
        e.stopPropagation()
        e.preventDefault()
        dragState.current.moved = false
      }
    }

    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onClickCapture={handleClickCapture}
          className={`w-full overflow-x-auto gantt-scroll relative select-none ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          <div ref={ref} className="min-w-max relative bg-white">
            <GanttHeader />

            {/* Milestone Marker Line */}
            <div
              className="absolute top-0 bottom-0 z-10 pointer-events-none flex flex-col items-center"
              style={{ left: `calc(var(--frozen-w) + ${eventColumnIndex * 64}px + 32px)` }}
            >
              <div className="bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mt-2 shadow-sm flex items-center gap-1 z-40">
                <Flag className="w-3 h-3" />
                EVENTO
              </div>
              <div className="w-px h-full bg-rose-400 border-l-2 border-dashed border-rose-400 opacity-50 mt-1" />
            </div>

            <div className="flex flex-col pb-4 relative z-0">
              {groups.map((group) => {
                const colors = COLOR_MAP[group.color]
                const Icon = group.icon
                return (
                  <div key={group.id} className="flex flex-col w-full">
                    {/* Group Header */}
                    <div className={`flex w-full border-b border-slate-200 ${colors.light}`}>
                      <div className={`shrink-0 sticky left-0 z-20 ${colors.light} border-r border-slate-200 p-3 flex items-center relative`} style={{ width: 'var(--frozen-w)' }}>
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${colors.bg}`} />
                        <Icon className={`w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 ml-2 shrink-0 ${colors.text}`} />
                        <h3 className={`font-bold text-xs md:text-sm tracking-wide leading-tight ${colors.text} flex-1 min-w-0`}>
                          {group.name}
                        </h3>
                        {isEditing && (
                          <button
                            onClick={() => onAddTaskToGroup?.(group.id)}
                            className={`ml-2 inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold ${colors.text} bg-white/70 hover:bg-white rounded-md border border-white transition-colors`}
                            title="Agregar tarea a este grupo"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            Agregar
                          </button>
                        )}
                      </div>
                      <div className="flex-1 grid grid-cols-[repeat(19,minmax(64px,1fr))] w-full min-w-[1216px]">
                        {Array.from({ length: 19 }).map((_, i) => (
                          <div key={i} className="border-r border-slate-200/30" />
                        ))}
                      </div>
                    </div>

                    {group.tasks.map((task, index) => (
                      <GanttRow
                        key={task.id}
                        task={task}
                        group={group}
                        index={index}
                        isEditing={isEditing}
                        onDelete={() => onDeleteTask?.(group.id, task.id)}
                        onUpdateResponsable={(value) => onUpdateResponsable?.(group.id, task.id, value)}
                      />
                    ))}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  },
)
