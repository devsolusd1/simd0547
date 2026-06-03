export default function AboutSIMD() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="divider mb-28" />
      <div className="max-w-4xl mx-auto">
        <div className="card p-10 md:p-14 relative overflow-hidden">
          {/* BG accent */}
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(204,17,0,0.12) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-fire-orange/70 mb-4 block">
              Inspiration
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              What is <span className="gradient-text">SIMD-0547</span>?
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed mb-8">
              <p>
                <strong className="text-white/90">SIMD-0547</strong> is a real Solana governance proposal submitted in May 2026
                by the team at <strong className="text-fire-orange">Temporal</strong>. It proposes charging a base fee
                of 0.1 lamports per cost unit on every transaction — and burning 100% of those fees.
              </p>
              <p>
                Currently, Solana burns ~648 SOL per day but mints ~60,000 SOL/day.
                SIMD-0547 would increase the daily burn rate to 1,500–1,800 SOL,
                creating real deflationary pressure on the SOL supply.
              </p>
              <p>
                The proposal already has backing from Solana co-founder{' '}
                <strong className="text-white/90">Anatoly Yakovenko</strong>, Helius, and the Solana Foundation.
                But it can only activate after the <strong className="text-white/90">Alpenglow consensus upgrade</strong>.
              </p>
              <p>
                <strong className="text-fire-orange">SIMD0547 the token</strong> brings this same idea to life{' '}
                <em>now</em> — at the community level, on Meteora DBC, while we wait for the protocol to catch up.
              </p>
            </div>

            <a
              href="https://cryptobriefing.com/solana-simd-0547-tokenomics-proposal/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 px-6 py-3 text-sm"
            >
              Read the original SIMD-0547 proposal →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
