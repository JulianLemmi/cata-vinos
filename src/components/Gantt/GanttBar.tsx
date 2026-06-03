import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Task, ColorTheme, COLOR_MAP, TIMELINE_COLUMNS } from './ganttData'

interface GanttBarProps {
  task: Task
  colorTheme: ColorTheme
  index: number
}

export function GanttBar({ task, colorTheme, index }: GanttBarProps) {
  const [isHovered, setIsHovered] = useState(false)
  const colors = COLOR_MAP[colorTheme]

  const indices = task.activeColumns
    .map((col) => TIMELINE_COLUMNS.indexOf(col))
    .filter((i) => i !== -1)

  if (indices.length === 0) return null

  const startIndex = Math.min(...indices)
  const endIndex = Math.max(...indices)
  const span = endIndex - startIndex + 1

  return (
    <div
      className="relative h-full py-2 px-1 flex items-center"
      style={{ gridColumnStart: startIndex + 1, gridColumnEnd: endIndex + 2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, x: -20, width: '0%' }}
        animate={{ opacity: 1, x: 0, width: '100%' }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
        whileHover={{ scaleY: 1.1, scaleX: 1.02 }}
        className={`h-8 w-full rounded-md shadow-sm flex items-center px-3 overflow-hidden cursor-pointer ${colors.bg} text-white relative`}
      >
        {span > 1 && (
          <span className="text-[10px] font-medium whitespace-nowrap opacity-90">
            {span} per.
          </span>
        )}
      </motion.div>

      {isHovered && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-50 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800 text-white text-xs rounded py-1.5 px-3 shadow-lg whitespace-nowrap"
          >
            <p className="font-semibold mb-0.5">{task.name}</p>
            <p className="text-slate-300">Duración: {span} período{span > 1 ? 's' : ''}</p>
            <p className="text-slate-300">Límite: {task.fLimite}</p>
          </motion.div>
        </div>
      )}
    </div>
  )
}
