import { useState } from 'react'

export const CONTRACT_ADDRESS = 'sc4hfP1Yc7JdMRcqehNZHqUZ9eak53J92y7MdyUi547'

// DexScreener resolves a Solana mint address directly — works the moment a pool goes live.
export const DEXSCREENER_URL = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}`

export default function ContractAddress({ compact = false }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard may be blocked; select fallback
      const el = document.createElement('textarea')
      el.value = CONTRACT_ADDRESS
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const short = `${CONTRACT_ADDRESS.slice(0, 6)}...${CONTRACT_ADDRESS.slice(-6)}`

  return (
    <button
      onClick={copy}
      title="Click to copy contract address"
      className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all"
      style={{
        background: 'rgba(255,107,0,0.07)',
        border: '1px solid rgba(255,107,0,0.25)',
      }}
    >
      <span className="text-xs uppercase tracking-widest text-fire-orange/70 font-bold">CA</span>
      <span className="font-mono text-sm text-white/80 group-hover:text-white transition-colors">
        {compact ? short : CONTRACT_ADDRESS}
      </span>
      <span
        className="text-xs font-semibold transition-colors"
        style={{ color: copied ? '#14F195' : '#FF6B00' }}
      >
        {copied ? '✓ Copied' : '⧉ Copy'}
      </span>
    </button>
  )
}
