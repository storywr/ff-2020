import React from 'react'

import useClickout from '@/hooks/useClickout'

type Props = {
  isActive: boolean
  onClickout: (ev: MouseEvent) => void
}

const Clickout: React.FC<Props> = ({ children, isActive, onClickout }) => {
  const ref = useClickout<HTMLDivElement>(onClickout, { isActive })

  return (
    <div ref={ref}>
      {children}
    </div>
  )
}

export default Clickout
