import React from 'react'
import { CheckCircle2, Layers, Activity, Clock } from 'lucide-react'
import { TaskGroup } from './ganttData'

interface StatsCardsProps {
  groups: TaskGroup[]
}

export function StatsCards({ groups }: StatsCardsProps) {
  const totalTasks = groups.reduce((acc, group) => acc + group.tasks.length, 0)
  const totalPhases = groups.length

  const stats = [
    { label: 'Total Tareas',      value: totalTasks.toString(),  icon: CheckCircle2, color: 'text-indigo-600', bg: 'bg-indigo-50'  },
    { label: 'Fases / Grupos',    value: totalPhases.toString(), icon: Layers,       color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Período más activo', value: 'M-3 a M-2',           icon: Activity,     color: 'text-rose-600',    bg: 'bg-rose-50'    },
    { label: 'Días hasta evento', value: '180',                  icon: Clock,        color: 'text-amber-600',   bg: 'bg-amber-50'   },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-center space-x-4"
        >
          <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
            <stat.icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <p className="text-2xl font-semibold text-slate-800">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
