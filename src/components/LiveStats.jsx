import { useAnimatedCounter } from '../hooks/useBurnCounter'

const STATS = [
  { label: 'Total Supply',    value: 1_000_000_000, prefix: '',  suffix: '',    decimals: 0, format: 'number' },
  { label: 'Fees Burned',     value: 50,            prefix: '',  suffix: '%',   decimals: 0, format: 'raw' },
  { label: 'Burn Events',     value: 18_432,        prefix: '',  suffix: '',    decimals: 0, format: 'number' },
  { label: 'Holders',         value: 4_271,         prefix: '',  suffix: '',    decimals: 0, format: 'number' },
]

function StatItem({ label, value, prefix, suffix, format }) {
  const count = useAnimatedCounter(value, 1500)
  const display = format === 'number'
    ? count.toLocaleString()
    : count

  return (
    <div className="flex flex-col items-center gap-1 px-8 py-5 border-r border-fire-border last:border-r-0">
      <span className="text-2xl font-black gradient-text font-mono">
        {prefix}{display}{suffix}
      </span>
      <span className="text-xs text-white/40 uppercase tracking-widest">{label}</span>
    </div>
  )
}

export default function LiveStats() {
  return (
    <section className="w-full border-y border-fire-border" style={{ background: 'rgba(255,107,0,0.04)' }}>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
