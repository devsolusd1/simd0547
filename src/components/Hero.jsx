import ContractAddress, { DEXSCREENER_URL } from './ContractAddress'

const EMBERS = [
  { left: '45%', bottom: '30%', cls: 'ember-1' },
  { left: '48%', bottom: '28%', cls: 'ember-2' },
  { left: '52%', bottom: '32%', cls: 'ember-3' },
  { left: '43%', bottom: '26%', cls: 'ember-4' },
  { left: '55%', bottom: '29%', cls: 'ember-5' },
  { left: '50%', bottom: '27%', cls: 'ember-1' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Background glow blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(204,17,0,0.12) 0%, rgba(255,107,0,0.06) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Ember particles */}
      {EMBERS.map((e, i) => (
        <div key={i} className={`ember ${e.cls}`} style={{ left: e.left, bottom: e.bottom }} />
      ))}

      {/* Logo */}
      <div className="relative mb-8 animate-float">
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,0,0.3) 0%, transparent 70%)',
            filter: 'blur(30px)',
            transform: 'scale(1.4)',
          }}
        />
        <img
          src="/logo.png"
          alt="SIMD0547 logo"
          className="relative w-28 h-28 md:w-36 md:h-36 object-contain animate-flicker drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 0 30px rgba(255,107,0,0.6))' }}
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'block'
          }}
        />
        <div
          className="text-8xl md:text-9xl"
          style={{ display: 'none', filter: 'drop-shadow(0 0 30px rgba(255,107,0,0.7))' }}
        >
          🔥
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 animate-burn-glow">
        <span className="gradient-text">SIMD</span>
        <span className="text-white/30">0547</span>
      </h1>

      <p className="text-xl md:text-2xl font-semibold text-white/80 mb-3 max-w-2xl">
        Burn the fees. Reduce the supply.
      </p>
      <p className="text-base md:text-lg text-white/45 mb-10 max-w-xl leading-relaxed">
        The first Solana community token with on-chain fee burning — inspired by
        Solana's own <span className="text-fire-orange font-semibold">SIMD-0547</span> governance proposal.
        Built on Meteora Dynamic Bonding Curve.
      </p>

      {/* Contract address */}
      <div className="mb-8 max-w-full px-4">
        <div className="hidden sm:block"><ContractAddress /></div>
        <div className="sm:hidden"><ContractAddress compact /></div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <a
          href={DEXSCREENER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-fire px-8 py-4 text-base"
        >
          🔥 Buy on DexScreener
        </a>
        <a
          href="#burn"
          className="btn-outline px-8 py-4 text-base"
        >
          View Burn Dashboard
        </a>
      </div>

      {/* Quick stats row */}
      <div className="flex flex-wrap justify-center gap-8 text-center">
        {[
          { label: 'Total Supply', value: '1,000,000,000' },
          { label: 'Fee Burned', value: '50%' },
          { label: 'Network', value: 'Solana' },
          { label: 'Pool', value: 'Meteora DBC' },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-bold gradient-text">{s.value}</div>
            <div className="text-xs text-white/40 mt-1 uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-fire-orange/50 to-transparent" />
      </div>
    </section>
  )
}
