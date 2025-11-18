import { useEffect, useState } from 'react'

export default function Alerts() {
  const [alerts, setAlerts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/alerts?active=true&limit=6`)
        const data = await res.json()
        setAlerts(Array.isArray(data) ? data : [])
      } catch (e) {
        setAlerts([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="alerts" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Live Service Alerts</h2>
        <span className="text-teal-200/70 text-sm">Auto-updated</span>
      </div>
      {loading ? (
        <div className="text-teal-100/80">Loading alerts…</div>
      ) : alerts.length === 0 ? (
        <div className="text-teal-100/80">All lines are running smoothly.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {alerts.map((a, i) => (
            <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full ${a.severity === 'critical' ? 'bg-red-400' : a.severity === 'warning' ? 'bg-yellow-300' : 'bg-teal-300'}`}></span>
                <p className="text-sm uppercase tracking-wide text-white/80">{a.severity}</p>
              </div>
              <p className="text-white font-semibold">{a.title}</p>
              <p className="text-teal-100/80 text-sm">{a.message}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
