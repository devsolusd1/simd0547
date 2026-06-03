import { useState, useEffect } from 'react'
import { DEXSCREENER_URL } from './ContractAddress'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(8,4,0,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,107,0,0.15)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex-shrink-0">
            <img
              src="/logo.png"
              alt="SIMD0547"
              className="w-9 h-9 object-contain animate-flicker drop-shadow-lg"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div
              className="w-9 h-9 rounded-lg items-center justify-center text-xl"
              style={{ display: 'none', background: 'linear-gradient(135deg,#FF6B00,#CC1100)' }}
            >
              🔥
            </div>
          </div>
          <span className="font-black text-lg tracking-tight gradient-text">
            SIMD<span className="text-white/50 font-normal">0547</span>
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#price" className="hover:text-fire-orange transition-colors">Price</a>
          <a href="#burn" className="hover:text-fire-orange transition-colors">Burn Dashboard</a>
          <a href="#how" className="hover:text-fire-orange transition-colors">How It Works</a>
          <a href="#tech" className="hover:text-fire-orange transition-colors">Tech Spec</a>
          <a href="#about" className="hover:text-fire-orange transition-colors">About SIMD-0547</a>
          <a href="#tokenomics" className="hover:text-fire-orange transition-colors">Tokenomics</a>
        </div>

        {/* CTA */}
        <a
          href={DEXSCREENER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-fire px-5 py-2.5 text-sm"
        >
          Buy SIMD0547
        </a>
      </div>
    </nav>
  )
}
