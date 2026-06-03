import { useState, useEffect, useRef } from 'react'

const INITIAL_BURNED = 47_231_840
const BURN_PER_SECOND = 0.38

export function useBurnCounter() {
  const [burned, setBurned] = useState(INITIAL_BURNED)
  const startTime = useRef(Date.now())

  useEffect(() => {
    const id = setInterval(() => {
      const elapsed = (Date.now() - startTime.current) / 1000
      setBurned(Math.floor(INITIAL_BURNED + elapsed * BURN_PER_SECOND))
    }, 100)
    return () => clearInterval(id)
  }, [])

  return burned
}

export function useAnimatedCounter(target, duration = 1200) {
  const [value, setValue] = useState(0)
  const raf = useRef(null)

  useEffect(() => {
    const start = performance.now()
    const from = 0

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(from + (target - from) * eased))
      if (progress < 1) raf.current = requestAnimationFrame(step)
    }

    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [target, duration])

  return value
}
