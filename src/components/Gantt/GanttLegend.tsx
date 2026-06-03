import React from 'react'
import { COLOR_MAP, TaskGroup } from './ganttData'

interface GanttLegendProps {
  groups: TaskGroup[]
}

export function GanttLegend({ groups }: GanttLegendProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      <span className="text-sm font-semibold text-slate-600 mr-2 uppercase tracking-wider">
        Leyenda:
      </span>
      {groups.map((group) => {
        const colors = COLOR_MAP[group.color]
        return (
          <div key={group.id} className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${colors.bg}`} />
            <span className="text-sm text-slate-600 font-medium">{group.name}</span>
          </div>
        )
      })}
    </div>
  )
}
