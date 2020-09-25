import React, { useState } from 'react'
import styled from 'styled-components'

import useRouteChange from '@/hooks/useRouteChange'

import Divider from './Divider'
import Item from './Item'
import Menu from './Menu'
import Trigger from './Trigger'

import Context from './context'

const Wrapper = styled.div`
  display: inline-block;

  position: relative;
`

const Dropdown: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  useRouteChange(() => setIsOpen(false))

  return (
    <Wrapper>
      <Context.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </Context.Provider>
    </Wrapper>
  )
}

export { Divider, Item, Menu, Trigger }

export default Dropdown
