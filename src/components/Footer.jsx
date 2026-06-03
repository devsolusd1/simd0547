import ContractAddress, { CONTRACT_ADDRESS, DEXSCREENER_URL } from './ContractAddress'

export default function Footer() {
  const year = 2026

  return (
    <footer className="py-14 px-6">
      <div className="divider mb-14" />
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="SIMD0547"
              className="w-8 h-8 object-contain"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <span className="font-black gradient-text text-lg">SIMD<span className="text-white/30 font-normal">0547</span></span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fire-orange transition-colors"
            >
              Twitter / X
            </a>
            <a
              href={DEXSCREENER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fire-orange transition-colors"
            >
              DexScreener
            </a>
            <a
              href="https://app.meteora.ag"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fire-orange transition-colors"
            >
              Meteora
            </a>
            <a
              href={`https://solscan.io/token/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fire-orange transition-colors"
            >
              Solscan
            </a>
          </div>

          {/* CTA */}
          <a
            href={DEXSCREENER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fire px-6 py-2.5 text-sm"
          >
            🔥 Buy SIMD0547
          </a>
        </div>

        {/* Contract address */}
        <div className="flex justify-center mb-10">
          <ContractAddress compact />
        </div>

        <div className="divider mb-8" />

        <p className="text-center text-xs text-white/20 leading-relaxed max-w-2xl mx-auto">
          SIMD0547 is a community memecoin on the Solana blockchain. This is not financial advice.
          Cryptocurrency trading involves significant risk. DYOR. The SIMD0547 token is not affiliated with
          or endorsed by the Solana Foundation, Meteora, or Temporal. The SIMD-0547 governance proposal referenced
          is a real Solana improvement document.
        </p>
        <p className="text-center text-xs text-white/15 mt-4">
          © {year} SIMD0547. Burn it all.
        </p>
      </div>
    </footer>
  )
}
