import { motion } from 'framer-motion'

export default function Hero({ onPlanClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[10%] bg-[radial-gradient(60%_60%_at_50%_10%,rgba(16,185,129,0.25),transparent_60%)]"/>
        <div className="absolute -inset-[20%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(6,182,212,0.15),transparent_30%)] animate-spin-slow"/>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Kochi Metro
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300">
            Move Smarter. Greener. Together.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-teal-100/90 max-w-3xl mx-auto"
        >
          Real-time service updates, interactive journey planner, and a modern, inclusive experience for Kochi.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={onPlanClick} className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow-lg shadow-teal-500/20">
            Plan your journey
          </button>
          <a href="#alerts" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20">
            Live alerts
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none select-none relative max-w-5xl mx-auto -mt-6 px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {["Sustainable", "Inclusive", "Connected", "On-Time"].map((t, i) => (
              <div key={t} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-teal-100/80">{t}</p>
                <p className="text-xs text-white/60">Design-first urban mobility</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
