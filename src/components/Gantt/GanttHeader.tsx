import React from 'react'
import { TIMELINE_COLUMNS } from './ganttData'

export function GanttHeader() {
  return (
    <div className="flex sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
      {/* Frozen Left Column Header */}
      <div className="shrink-0 sticky left-0 z-40 bg-white border-r border-slate-200 flex" style={{ width: 'var(--frozen-w)' }}>
        <div className="flex-1 min-w-0 p-3 md:p-4 flex items-center border-r border-slate-100">
          <span className="font-semibold text-slate-700 text-xs md:text-sm uppercase tracking-wider">Acción</span>
        </div>
        <div className="hidden md:flex w-[180px] shrink-0 p-4 items-center border-r border-slate-100">
          <span className="font-semibold text-slate-700 text-sm uppercase tracking-wider">Responsable</span>
        </div>
        <div className="hidden md:flex w-[100px] shrink-0 p-4 items-center justify-center">
          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">F. Límite</span>
        </div>
      </div>

      {/* Scrollable Timeline Headers */}
      <div className="flex-1 flex">
        <div className="grid grid-cols-[repeat(19,minmax(64px,1fr))] w-full min-w-[1216px]">
          {TIMELINE_COLUMNS.map((col) => {
            const isEvent = col === 'H'
            return (
              <div
                key={col}
                className={`flex items-center justify-center py-3 border-r border-slate-100 text-xs font-semibold ${isEvent ? 'bg-rose-50 text-rose-700' : 'text-slate-500'}`}
              >
                {col}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
