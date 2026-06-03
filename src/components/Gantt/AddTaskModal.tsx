import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus } from 'lucide-react'
import { TaskGroup, TIMELINE_COLUMNS, COLOR_MAP } from './ganttData'

interface AddTaskModalProps {
  open: boolean
  onClose: () => void
  groups: TaskGroup[]
  defaultGroupId?: string | null
  onAdd: (
    groupId: string,
    task: { name: string; fLimite: string; responsable: string; activeColumns: string[] },
  ) => void
}

export function AddTaskModal({ open, onClose, groups, defaultGroupId, onAdd }: AddTaskModalProps) {
  const [groupId, setGroupId] = useState<string>(defaultGroupId || groups[0]?.id || '')
  const [name, setName] = useState('')
  const [fLimite, setFLimite] = useState<string>(TIMELINE_COLUMNS[0])
  const [responsable, setResponsable] = useState('')
  const [activeColumns, setActiveColumns] = useState<string[]>([])

  useEffect(() => {
    if (open) {
      setGroupId(defaultGroupId || groups[0]?.id || '')
      setName('')
      setFLimite(TIMELINE_COLUMNS[0])
      setResponsable('')
      setActiveColumns([])
    }
  }, [open, defaultGroupId, groups])

  const toggleColumn = (col: string) => {
    setActiveColumns((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || activeColumns.length === 0 || !groupId) return
    onAdd(groupId, { name: name.trim(), fLimite, responsable: responsable.trim(), activeColumns })
    onClose()
  }

  const selectedGroup = groups.find((g) => g.id === groupId)
  const groupColor = selectedGroup ? COLOR_MAP[selectedGroup.color] : null

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl pointer-events-auto overflow-hidden"
            >
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                      <Plus className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900">Agregar nueva tarea</h2>
                      <p className="text-sm text-slate-500">Completa los datos de la tarea y selecciona los períodos.</p>
                    </div>
                  </div>
                  <button type="button" onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
                  {/* Group */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Grupo / Fase</label>
                    <select
                      value={groupId}
                      onChange={(e) => setGroupId(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      {groups.map((g) => (
                        <option key={g.id} value={g.id}>{g.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nombre de la tarea *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej: Coordinar proveedores"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Responsable */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Responsable</label>
                      <input
                        type="text"
                        value={responsable}
                        onChange={(e) => setResponsable(e.target.value)}
                        placeholder="Opcional"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>

                    {/* F.Límite */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Fecha límite</label>
                      <select
                        value={fLimite}
                        onChange={(e) => setFLimite(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        {TIMELINE_COLUMNS.map((col) => (
                          <option key={col} value={col}>{col}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Active Columns */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Períodos activos *{' '}
                      <span className="text-slate-400 font-normal">(selecciona donde se mostrará la barra)</span>
                    </label>
                    <div className="grid grid-cols-7 gap-2">
                      {TIMELINE_COLUMNS.map((col) => {
                        const isSelected = activeColumns.includes(col)
                        return (
                          <button
                            key={col}
                            type="button"
                            onClick={() => toggleColumn(col)}
                            className={`px-2 py-1.5 rounded-md text-xs font-semibold border transition-all ${isSelected ? `${groupColor?.bg || 'bg-indigo-500'} text-white border-transparent shadow-sm` : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}`}
                          >
                            {col}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={!name.trim() || activeColumns.length === 0}
                    className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg transition-colors shadow-sm"
                  >
                    Agregar tarea
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
