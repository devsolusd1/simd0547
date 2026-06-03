import { useState, useEffect, useRef } from 'react'
import { CONTRACT_ADDRESS } from '../components/ContractAddress'

const JUP_PRICE_URL = 'https://lite-api.jup.ag/price/v3'
const POLL_INTERVAL = 10_000 // 10s
const STORAGE_KEY = 'simd0547_price_history'
const MAX_POINTS = 180 // ~30 min of history at 10s intervals

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.slice(-MAX_POINTS) : []
  } catch {
    return []
  }
}

function saveHistory(points) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(points.slice(-MAX_POINTS)))
  } catch {
    /* ignore quota errors */
  }
}

/**
 * Polls the Jupiter Price API V3 for the SIMD0547 token.
 * Returns live price data and a rolling, persisted time-series.
 *
 * Status:
 *  - 'loading'      first request in flight
 *  - 'live'         token is indexed and returning a price
 *  - 'not_indexed'  API reachable but token not yet listed (pre-launch)
 *  - 'error'        network/API failure
 */
export function useJupiterPrice() {
  const [status, setStatus] = useState('loading')
  const [data, setData] = useState(null)       // { usdPrice, priceChange24h, liquidity }
  const [history, setHistory] = useState(loadHistory)
  const historyRef = useRef(history)
  historyRef.current = history

  useEffect(() => {
    let cancelled = false

    async function poll() {
      try {
        const res = await fetch(`${JUP_PRICE_URL}?ids=${CONTRACT_ADDRESS}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        const entry = json?.[CONTRACT_ADDRESS]

        if (cancelled) return

        if (entry && typeof entry.usdPrice === 'number') {
          setData(entry)
          setStatus('live')
          // append a point (timestamp comes from the API-free clock via Date in browser)
          const point = { t: new Date().toISOString(), price: entry.usdPrice }
          const next = [...historyRef.current, point].slice(-MAX_POINTS)
          setHistory(next)
          saveHistory(next)
        } else {
          // API responded but token isn't listed yet
          setStatus('not_indexed')
        }
      } catch (e) {
        if (!cancelled) setStatus((s) => (s === 'live' ? 'live' : 'error'))
      }
    }

    poll()
    const id = setInterval(poll, POLL_INTERVAL)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  return { status, data, history }
}
