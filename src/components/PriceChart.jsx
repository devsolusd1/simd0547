import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { useJupiterPrice } from '../hooks/useJupiterPrice'

function fmtPrice(p) {
  if (p == null) return '—'
  if (p === 0) return '$0.00'
  if (p < 0.00001) return `$${p.toExponential(2)}`
  if (p < 1) return `$${p.toPrecision(4)}`
  return `$${p.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function fmtTime(iso) {
  const d = new Date(iso)
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

function ChartTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const p = payload[0].payload
  return (
    <div className="card px-4 py-2 text-sm">
      <p className="font-mono font-bold text-fire-orange">{fmtPrice(p.price)}</p>
      <p className="text-white/40 text-xs">{fmtTime(p.t)}</p>
    </div>
  )
}

function StatusBadge({ status }) {
  const map = {
    loading:     { dot: '#FFC200', label: 'Connecting to Jupiter…', pulse: true },
    live:        { dot: '#14F195', label: 'Live · Jupiter Price API', pulse: true },
    not_indexed: { dot: '#FF6B00', label: 'Awaiting launch · not yet on Jupiter', pulse: false },
    error:       { dot: '#CC1100', label: 'Jupiter API unreachable', pulse: false },
  }
  const s = map[status] || map.loading
  return (
    <div className="inline-flex items-center gap-2 text-xs">
      <span
        className={`w-2 h-2 rounded-full ${s.pulse ? 'animate-pulse' : ''}`}
        style={{ background: s.dot, boxShadow: `0 0 8px ${s.dot}` }}
      />
      <span className="text-white/50">{s.label}</span>
    </div>
  )
}

export default function PriceChart() {
  const { status, data, history } = useJupiterPrice()

  const price = data?.usdPrice
  const change = data?.priceChange24h
  const liquidity = data?.liquidity
  const hasChart = status === 'live' && history.length >= 2
  const changePositive = (change ?? 0) >= 0

  return (
    <section id="price" className="py-28 px-6">
      <div className="divider mb-28" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-fire-orange/70 mb-4 block">
            Market
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Live <span className="gradient-text">Price</span>
          </h2>
          <p className="text-white/45 max-w-md mx-auto">
            Real-time price powered by the Jupiter Price API. The chart builds live and
            persists in your browser.
          </p>
        </div>

        <div className="card p-6 md:p-8 glow-orange" style={{ borderColor: 'rgba(255,107,0,0.25)' }}>
          {/* Header row */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-black font-mono gradient-text">
                  {fmtPrice(price)}
                </span>
                {status === 'live' && change != null && (
                  <span
                    className="text-sm font-bold font-mono px-2 py-0.5 rounded-md"
                    style={{
                      color: changePositive ? '#14F195' : '#CC1100',
                      background: changePositive ? 'rgba(20,241,149,0.1)' : 'rgba(204,17,0,0.12)',
                    }}
                  >
                    {changePositive ? '▲' : '▼'} {Math.abs(change).toFixed(2)}% 24h
                  </span>
                )}
              </div>
              <div className="mt-2">
                <StatusBadge status={status} />
              </div>
            </div>

            {status === 'live' && liquidity != null && (
              <div className="text-right">
                <div className="text-xs text-white/35 uppercase tracking-widest">Liquidity</div>
                <div className="font-mono font-bold text-white/80">
                  ${Number(liquidity).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>
            )}
          </div>

          {/* Chart area */}
          <div className="h-72 relative">
            {hasChart ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={history} margin={{ top: 10, right: 8, left: 8, bottom: 0 }}>
                  <defs>
                    <linearGradient id="fireFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF6B00" stopOpacity={0.45} />
                      <stop offset="100%" stopColor="#FF6B00" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="t"
                    tickFormatter={fmtTime}
                    tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    minTickGap={40}
                  />
                  <YAxis
                    domain={['auto', 'auto']}
                    tickFormatter={fmtPrice}
                    tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    width={70}
                  />
                  <Tooltip content={<ChartTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#FF6B00"
                    strokeWidth={2}
                    fill="url(#fireFill)"
                    dot={false}
                    isAnimationActive={false}
                    style={{ filter: 'drop-shadow(0 0 6px rgba(255,107,0,0.5))' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <EmptyState status={status} points={history.length} />
            )}
          </div>

          {/* Footer link */}
          <div className="flex justify-end mt-4">
            <a
              href="https://jup.ag/tokens/sc4hfP1Yc7JdMRcqehNZHqUZ9eak53J92y7MdyUi547"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-fire-orange/70 hover:text-fire-orange transition-colors"
            >
              View on Jupiter →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmptyState({ status, points }) {
  if (status === 'live' && points < 2) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center gap-3">
        <div className="text-4xl animate-flicker">📈</div>
        <p className="text-white/50 text-sm">Collecting live price data…</p>
        <p className="text-white/25 text-xs">The chart fills in as new prices arrive (every 10s).</p>
      </div>
    )
  }
  if (status === 'not_indexed') {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center gap-3">
        <div className="text-4xl animate-flicker">🔥</div>
        <p className="text-white/60 text-sm font-semibold">Token not launched yet</p>
        <p className="text-white/35 text-xs max-w-xs">
          Once SIMD0547 is live on Meteora and indexed by Jupiter, the real-time chart
          will appear here automatically.
        </p>
      </div>
    )
  }
  if (status === 'error') {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center gap-3">
        <div className="text-4xl opacity-60">⚠️</div>
        <p className="text-white/50 text-sm">Couldn't reach the Jupiter API</p>
        <p className="text-white/25 text-xs">Retrying automatically…</p>
      </div>
    )
  }
  // loading
  return (
    <div className="h-full flex flex-col items-center justify-center text-center gap-3">
      <div className="text-4xl animate-flicker">⏳</div>
      <p className="text-white/40 text-sm">Connecting to Jupiter…</p>
    </div>
  )
}
