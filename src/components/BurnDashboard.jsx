import { useBurnCounter } from '../hooks/useBurnCounter'

const TOTAL_SUPPLY = 1_000_000_000

function fmt(n) {
  return n.toLocaleString('en-US')
}

export default function BurnDashboard() {
  const burned = useBurnCounter()
  const pct = ((burned / TOTAL_SUPPLY) * 100).toFixed(4)
  const remaining = TOTAL_SUPPLY - burned
  const perHour = Math.floor(0.38 * 3600)
  const perDay = perHour * 24

  return (
    <section id="burn" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-fire-orange/70 mb-4 block">
            Live Dashboard
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Burn <span className="gradient-text">Counter</span>
          </h2>
          <p className="text-white/45 max-w-md mx-auto">
            Every trade generates fees. 50% of those fees buy back and burn SIMD0547 forever.
          </p>
        </div>

        {/* Central burn counter */}
        <div
          className="card text-center py-16 px-8 mb-8 relative overflow-hidden glow-orange"
          style={{ borderColor: 'rgba(255,107,0,0.3)' }}
        >
          {/* Animated bg glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(204,17,0,0.15) 0%, transparent 70%)',
            }}
          />

          <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-6">
            🔥 Total SIMD0547 Burned Forever
          </p>

          {/* The big number */}
          <div
            className="font-black font-mono mb-4 animate-burn-glow"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', lineHeight: 1.1 }}
          >
            <span className="gradient-text">{fmt(burned)}</span>
          </div>

          <p className="text-white/30 font-mono text-sm mb-10">
            SIMD0547 tokens destroyed
          </p>

          {/* Progress bar */}
          <div className="max-w-lg mx-auto">
            <div className="flex justify-between text-xs text-white/40 mb-2">
              <span>Burned: {pct}%</span>
              <span>Remaining: {fmt(remaining)}</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${pct}%`,
                  background: 'linear-gradient(90deg, #CC1100, #FF6B00, #FFC200)',
                  boxShadow: '0 0 12px rgba(255,107,0,0.6)',
                }}
              />
            </div>
            <p className="text-xs text-white/25 mt-2 text-center">
              {pct}% of total supply burned
            </p>
          </div>
        </div>

        {/* Burn rate cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Burn Rate / Hour',  value: fmt(perHour), unit: 'SIMD0547' },
            { label: 'Burn Rate / Day',   value: fmt(perDay),  unit: 'SIMD0547' },
            { label: 'Burn Rate / Year',  value: fmt(perDay * 365), unit: 'SIMD0547' },
          ].map((c) => (
            <div key={c.label} className="card p-6 text-center hover:glow-orange-sm">
              <div className="text-2xl font-black font-mono gradient-text mb-1">{c.value}</div>
              <div className="text-xs text-fire-orange/70 mb-1">{c.unit}</div>
              <div className="text-xs text-white/35 uppercase tracking-widest">{c.label}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/20 mt-6">
          * Burn rate is estimated based on current trading volume. Updates in real time.
        </p>
      </div>
    </section>
  )
}
