import { useEffect, useRef, useState } from 'react'
import { WINDOW } from '@/src/constants/client'

export type UseScrollTriggerOptions = {
  disableHysteresis?: boolean
  target?: Node | Window | null
  threshold?: number
}

function getTrigger(elementRef: React.MutableRefObject<any>, options: UseScrollTriggerOptions) {
  const { disableHysteresis = false, threshold = 100, target } = options
  const previous = elementRef.current

  if (target) {
    elementRef.current =
      (target as any).pageYOffset !== undefined
        ? (target as any).pageYOffset
        : (target as any).scrollTop
  }

  if (!disableHysteresis && previous !== undefined) {
    if (elementRef.current < previous) {
      return false
    }
  }

  return elementRef.current > threshold
}

export function useScrollTrigger(options: UseScrollTriggerOptions = {}): boolean {
  const { target = WINDOW, ...other } = options
  const elementRef = useRef<typeof target>()
  const [trigger, setTrigger] = useState(() => getTrigger(elementRef, other))

  useEffect(() => {
    const handleScroll = () => {
      setTrigger(getTrigger(elementRef, { target, ...other }))
    }

    handleScroll()

    target?.addEventListener('scroll', handleScroll)

    return () => {
      target?.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, getTrigger, JSON.stringify(other)])

  return trigger
}
