import React, { useState } from 'react'

import useRouteChange from '@/hooks/useRouteChange'

import Drawer from './Drawer'
import Trigger from './Trigger'

import Context from './context'

const MobileDrawer: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  useRouteChange(() => setIsOpen(false))

  return (
    <>
      <Context.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </Context.Provider>
    </>
  )
}

export { Drawer, Trigger }

export default MobileDrawer
