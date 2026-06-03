const SPECS = [
  {
    label: 'Fee Formula',
    value: '0.1 lamport',
    unit: 'per cost unit requested',
    desc: 'A resource-based base fee charged on every transaction, scaling with compute units, data loaded, and write locks taken.',
  },
  {
    label: 'Burned',
    value: '100%',
    unit: '0% to validators',
    desc: 'The entire base fee is destroyed — full deflation, no redistribution to validators.',
  },
  {
    label: 'Configurable Range',
    value: '0.1 → 1.0',
    unit: 'lamport / cost unit',
    desc: 'The rate can scale up, or adjust dynamically each epoch based on average block utilization.',
  },
]

const BURN_TABLE = [
  { rate: '0.1 lamport / CU', burn: '~1,500–1,800 SOL/day', note: 'Current network usage' },
  { rate: 'Up to 1.0 lamport / CU', burn: 'up to ~18,000 SOL/day', note: 'Max configuration' },
  { rate: 'Today (2,500 lamport flat)', burn: '~648 SOL/day', note: 'Existing base fee' },
]

const COST_IMPACT = [
  { actor: 'MM oracle update', cu: '~2,500 CU', impact: '~5%', positive: true },
  { actor: 'High-priority tx', cu: 'priority-fee dominated', impact: '~2%', positive: true },
  { actor: 'Retail swap', cu: '~32,000 CU', impact: '+639%', positive: false },
]

export default function TechnicalSpec() {
  return (
    <section id="tech" className="py-28 px-6">
      <div className="divider mb-28" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-fire-orange/70 mb-4 block">
            Under the Hood
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Technical <span className="gradient-text">Spec</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto">
            The real protocol design behind SIMD-0547 — a resource-based base fee,
            currently in discussion on the Solana Improvement Documents repo.
          </p>
        </div>

        {/* Core spec cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {SPECS.map((s) => (
            <div key={s.label} className="card p-6">
              <div className="text-xs text-white/35 uppercase tracking-widest mb-2">{s.label}</div>
              <div className="text-2xl font-black gradient-text font-mono leading-none mb-1">{s.value}</div>
              <div className="text-xs text-fire-orange/70 mb-4">{s.unit}</div>
              <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* The formula highlight */}
        <div
          className="card p-8 mb-12 text-center relative overflow-hidden"
          style={{ borderColor: 'rgba(255,107,0,0.3)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(255,107,0,0.1) 0%, transparent 70%)' }}
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">The Burn Formula</p>
            <code className="block text-lg md:text-2xl font-mono font-bold text-glow gradient-text mb-3">
              fee_burned = 0.1 × cost_units_requested
            </code>
            <p className="text-sm text-white/40 max-w-lg mx-auto">
              where <span className="font-mono text-white/60">cost_units</span> = compute units + data loaded +
              write locks + other resources consumed by the transaction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Burn rate comparison */}
          <div className="card p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-fire-orange/80 mb-5">
              📊 Projected Daily Burn
            </h3>
            <div className="space-y-3">
              {BURN_TABLE.map((row) => (
                <div key={row.rate} className="flex items-center justify-between gap-3 pb-3 border-b border-fire-border last:border-0">
                  <div>
                    <div className="text-sm text-white/75 font-medium">{row.rate}</div>
                    <div className="text-xs text-white/30">{row.note}</div>
                  </div>
                  <div className="font-mono font-bold text-sm gradient-text text-right whitespace-nowrap">
                    {row.burn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost impact */}
          <div className="card p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-fire-orange/80 mb-5">
              ⚖️ Cost Impact by Actor
            </h3>
            <div className="space-y-3">
              {COST_IMPACT.map((row) => (
                <div key={row.actor} className="flex items-center justify-between gap-3 pb-3 border-b border-fire-border last:border-0">
                  <div>
                    <div className="text-sm text-white/75 font-medium">{row.actor}</div>
                    <div className="text-xs text-white/30 font-mono">{row.cu}</div>
                  </div>
                  <div
                    className="font-mono font-bold text-sm text-right whitespace-nowrap px-2 py-0.5 rounded-md"
                    style={{
                      color: row.positive ? '#14F195' : '#FF6B00',
                      background: row.positive ? 'rgba(20,241,149,0.08)' : 'rgba(255,107,0,0.1)',
                    }}
                  >
                    {row.impact}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/25 mt-4 leading-relaxed">
              The 0.1 rate is calibrated to keep market makers competitive while still
              capturing value from heavy compute.
            </p>
          </div>
        </div>

        {/* Activation requirement */}
        <div
          className="rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4 mb-12"
          style={{ background: 'rgba(204,17,0,0.08)', border: '1px solid rgba(204,17,0,0.25)' }}
        >
          <div className="text-3xl">⚠️</div>
          <div>
            <h4 className="font-bold text-white/90 mb-1">Requires Alpenglow</h4>
            <p className="text-sm text-white/50 leading-relaxed">
              SIMD-0547 can only activate <strong className="text-white/80">after the Alpenglow consensus upgrade</strong>,
              which removes special treatment for vote transactions. Activating earlier would damage
              validator vote economics. The mechanism operates globally and adjusts at epoch timescales —
              unlike SIMD-0110's micro-scale, account-specific fee adjustments.
            </p>
          </div>
        </div>

        {/* GitHub source */}
        <div className="card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <svg className="w-8 h-8 text-white/70 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <div>
              <div className="font-semibold text-white/85 text-sm">Read the proposal & discussion</div>
              <div className="text-xs text-white/35 font-mono">solana-foundation/solana-improvement-documents · #547</div>
            </div>
          </div>
          <a
            href="https://github.com/solana-foundation/solana-improvement-documents/discussions/547"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-5 py-2.5 text-sm whitespace-nowrap"
          >
            View on GitHub →
          </a>
        </div>

        <p className="text-center text-xs text-white/20 mt-6 max-w-2xl mx-auto">
          Technical details summarized from the official SIMD-0547 discussion authored by cavemanloverboy (Temporal).
          The SIMD0547 token is a community project inspired by this proposal and is not affiliated with the Solana Foundation.
        </p>
      </div>
    </section>
  )
}
