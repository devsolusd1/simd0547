import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const DATA = [
  { name: 'Fair Launch (Meteora DBC)', value: 65, color: '#FF6B00' },
  { name: 'Liquidity',                 value: 20, color: '#FFC200' },
  { name: 'Community & Ecosystem',     value: 15, color: '#CC1100' },
]

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="card px-4 py-3 text-sm">
      <p className="font-bold" style={{ color: d.color }}>{d.name}</p>
      <p className="text-white/70">{d.value}%</p>
    </div>
  )
}

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-28 px-6">
      <div className="divider mb-28" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-fire-orange/70 mb-4 block">
            Distribution
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Token<span className="gradient-text">omics</span>
          </h2>
          <p className="text-white/45 max-w-md mx-auto">
            1,000,000,000 SIMD0547 total supply. Fair launch, no presale, no VC allocation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Pie chart */}
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={3}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {DATA.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={entry.color}
                      style={{ filter: `drop-shadow(0 0 8px ${entry.color}88)` }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-4">
            {DATA.map((d) => (
              <div key={d.name} className="card p-4 flex items-center gap-4">
                <div
                  className="w-3 h-10 rounded-full flex-shrink-0"
                  style={{ background: d.color, boxShadow: `0 0 10px ${d.color}88` }}
                />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white/80">{d.name}</div>
                </div>
                <div className="text-xl font-black font-mono" style={{ color: d.color }}>
                  {d.value}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key details */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {[
            { label: 'Total Supply',   value: '1B'       },
            { label: 'Presale',        value: 'None'     },
            { label: 'Mint Authority', value: 'Revoked'  },
            { label: 'Freeze Auth',    value: 'Revoked'  },
          ].map((item) => (
            <div key={item.label} className="card p-5 text-center">
              <div className="text-xl font-black gradient-text mb-1">{item.value}</div>
              <div className="text-xs text-white/35 uppercase tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
