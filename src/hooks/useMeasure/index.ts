import type { MutableRefObject } from 'react'
import { useState, useEffect, useRef } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

type Bounds = {
  x: number
  y: number
  width: number
  height: number
  top: number
  right: number
  bottom: number
  left: number
}

type UseMeasure = {
  ref: MutableRefObject<any>
  bounds: Bounds
}

export function useMeasure(): UseMeasure {
  const ref = useRef<any>(null)
  const [bounds, setBounds] = useState<Bounds>({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  })
  const [ro] = useState(() => new ResizeObserver(([entry]) => setBounds(entry.contentRect)))

  useEffect(() => {
    if (ref.current) {
      ro.observe(ref.current)
    }
    return () => ro.disconnect()
  }, [ro])

  return { ref, bounds }
}
