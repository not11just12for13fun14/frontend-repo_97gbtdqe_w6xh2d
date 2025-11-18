import { useState } from 'react'

export default function FeedbackForm(){
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', category: 'other', station: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try{
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/feedback`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if(!res.ok) throw new Error('Failed')
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '', category: 'other', station: '' })
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Share your feedback</h2>
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name" className="bg-white/10 border border-white/20 rounded-xl p-3 text-white placeholder-white/60" required />
          <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email (optional)" type="email" className="bg-white/10 border border-white/20 rounded-xl p-3 text-white placeholder-white/60" />
          <input value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} placeholder="Subject" className="bg-white/10 border border-white/20 rounded-xl p-3 text-white placeholder-white/60 md:col-span-2" required />
          <select value={form.category} onChange={e=>setForm({...form, category:e.target.value})} className="bg-white/10 border border-white/20 rounded-xl p-3 text-white">
            <option value="compliment">Compliment</option>
            <option value="suggestion">Suggestion</option>
            <option value="issue">Report an issue</option>
            <option value="other">Other</option>
          </select>
          <input value={form.station} onChange={e=>setForm({...form, station:e.target.value})} placeholder="Station (optional)" className="bg-white/10 border border-white/20 rounded-xl p-3 text-white placeholder-white/60" />
          <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Your message" rows={4} className="bg-white/10 border border-white/20 rounded-xl p-3 text-white placeholder-white/60 md:col-span-2" required />
          <div className="md:col-span-2 flex gap-3 items-center">
            <button type="submit" className="px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold">Submit</button>
            {status === 'sending' && <span className="text-teal-100/80">Sending…</span>}
            {status === 'sent' && <span className="text-emerald-300">Thanks! We received your message.</span>}
            {status === 'error' && <span className="text-red-300">Something went wrong. Please try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
