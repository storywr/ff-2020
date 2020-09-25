import React, { useContext } from 'react'

import Context from './context'

type Props = {
  children: React.ReactElement
  toggle?: boolean
}

const Trigger = ({ children, toggle = false }: Props) => {
  const { setIsOpen } = useContext(Context)

  return React.cloneElement(React.Children.only(children), {
    onClick: toggle ? () => setIsOpen(isOpen => !isOpen) : () => setIsOpen(true)
  })
}

export default Trigger
