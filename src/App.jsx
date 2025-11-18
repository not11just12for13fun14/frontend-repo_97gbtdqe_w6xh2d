import { useRef } from 'react'
import Hero from './components/Hero'
import Alerts from './components/Alerts'
import JourneyPlanner from './components/JourneyPlanner'
import FeedbackForm from './components/FeedbackForm'

function App() {
  const planRef = useRef(null)

  const scrollToPlanner = () => {
    planRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-400" />
            <p className="text-white font-semibold tracking-tight">Kochi Metro</p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-teal-100/80">
            <a href="#alerts" className="hover:text-white">Alerts</a>
            <a href="#plan" className="hover:text-white">Planner</a>
            <a href="#feedback" className="hover:text-white">Feedback</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero onPlanClick={scrollToPlanner} />
        <Alerts />
        <div ref={planRef} id="plan"><JourneyPlanner /></div>
        <div id="feedback"><FeedbackForm /></div>
      </main>

      <footer className="border-t border-white/10 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-10 text-teal-100/70 text-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Kochi Metro Rail Limited</p>
          <p>Designed with a focus on accessibility, sustainability, and joy.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
