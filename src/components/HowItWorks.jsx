const STEPS = [
  {
    number: '01',
    emoji: '💱',
    title: 'Trade on Meteora DBC',
    desc: 'Buy or sell SIMD0547 on the Meteora Dynamic Bonding Curve pool. Every swap contributes to the ecosystem.',
  },
  {
    number: '02',
    emoji: '💰',
    title: 'Fees Are Collected',
    desc: 'Meteora collects a trading fee on every transaction. These fees accumulate in the pool automatically.',
  },
  {
    number: '03',
    emoji: '🔥',
    title: '50% Gets Burned Forever',
    desc: 'Half of every fee collected is used to buy back SIMD0547 and send it to the burn address — permanently reducing supply.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 px-6">
      <div className="divider mb-28" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-fire-orange/70 mb-4 block">
            Mechanism
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            How the <span className="gradient-text">Burn</span> Works
          </h2>
          <p className="text-white/45 max-w-md mx-auto">
            Simple, transparent, automatic. No team intervention required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-16 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(255,107,0,0.4), rgba(255,194,0,0.4), rgba(255,107,0,0.4))' }}
          />

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="card p-8 text-center relative"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Step number badge */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black font-mono px-3 py-1 rounded-full"
                style={{ background: 'linear-gradient(135deg,#FF6B00,#CC1100)', boxShadow: '0 0 12px rgba(255,107,0,0.5)' }}
              >
                {step.number}
              </div>

              <div className="text-5xl mb-5 mt-4">{step.emoji}</div>
              <h3 className="text-lg font-bold mb-3 gradient-text">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className="mt-10 p-5 rounded-xl text-sm text-white/50 text-center"
          style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.12)' }}
        >
          Inspired by Solana's{' '}
          <a
            href="https://github.com/solana-foundation/solana-improvement-documents"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fire-orange hover:text-fire-yellow underline"
          >
            SIMD-0547 proposal
          </a>{' '}
          — which proposes burning 100% of base fees at the protocol level.
          SIMD0547 brings this idea to the community token layer, today.
        </div>
      </div>
    </section>
  )
}
