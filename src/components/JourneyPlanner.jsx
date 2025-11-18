import { useEffect, useMemo, useState } from 'react'

const stations = [
  'Aluva','Pulinchodu','Companypady','Ambattukavu','Muttom','Kalamassery','Cochin University','Pathadipalam','Edappally','Changampuzha Park','Palarivattom','JLN Stadium','Kaloor','Town Hall','M. G. Road','Maharaja College','Ernakulam South','Kadavanthra','Elamkulam','Vyttila','Thaikoodam','Petta','Vadakkekotta','SN Junction','Tripunithura'
]

function estimateTimeAndFare(from, to){
  const i = stations.indexOf(from)
  const j = stations.indexOf(to)
  if (i === -1 || j === -1) return null
  const stops = Math.abs(i - j)
  const time = Math.max(2, stops * 2.5) // minutes
  const fare = Math.max(10, 8 + stops * 3)
  return { stops, time, fare }
}

export default function JourneyPlanner(){
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [result, setResult] = useState(null)

  useEffect(() => {
    setResult(null)
  }, [from, to])

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Journey Planner</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="text-sm text-teal-100/80">From</label>
            <select value={from} onChange={(e)=>setFrom(e.target.value)} className="mt-1 w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white">
              <option value="">Select station</option>
              {stations.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-teal-100/80">To</label>
            <select value={to} onChange={(e)=>setTo(e.target.value)} className="mt-1 w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white">
              <option value="">Select station</option>
              {stations.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="md:col-span-4 flex gap-3">
            <button onClick={()=> setResult(estimateTimeAndFare(from, to))} className="px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold">Estimate</button>
            <button onClick={()=> { setFrom(''); setTo(''); setResult(null) }} className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20">Reset</button>
          </div>
        </div>
        {result && (
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-teal-100/80">Stops</p>
              <p className="text-white text-2xl font-bold">{result.stops}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-teal-100/80">Estimated Time</p>
              <p className="text-white text-2xl font-bold">{Math.round(result.time)} min</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-teal-100/80">Estimated Fare</p>
              <p className="text-white text-2xl font-bold">₹ {result.fare}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
