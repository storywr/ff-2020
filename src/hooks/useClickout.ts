import { useEffect, useRef } from 'react'

import debug from '@/util/debug'

type ClickoutHandler = (ev: MouseEvent) => void

const useClickout = <T extends HTMLElement>(onClickout: ClickoutHandler, { isActive = true }) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current || !isActive) return

    function clickout (ev: MouseEvent) {
      if (!ev.composedPath().some((element) => element === ref.current)) {
        debug.log('[useClickout]', ref.current, 'click outside')
        onClickout(ev)
      } else {
        debug.log('[useClickout]', ref.current, 'click inside')
      }
    }

    debug.log('[useClickout]', ref.current, 'attach click handler')
    window.addEventListener('click', clickout)

    return () => {
      debug.log('[useClickout]', ref.current, 'detatch click handler')
      window.removeEventListener('click', clickout)
    }
  }, [isActive, ref.current, onClickout])

  return ref
}

export default useClickout
