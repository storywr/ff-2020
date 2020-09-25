import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import OverlayWrapper from '@/components/OverlayWrapper'

import Context from './context'

type WrapperProps = {
  isOpen: boolean
}

const transientProps = ['isOpen']

const openStyles = css`
  transform: translate3d(0, 0, 0);
`

const Wrapper = styled.div.withConfig<WrapperProps>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 3rem;
  top: 0;

  background-color: white;
  overflow-y: auto;

  transform: translate3d(-100%, 0, 0);
  transition: transform 200ms ease-in-out;
  will-change: transform;
  z-index: 100000;

  ${p => p.isOpen && openStyles};
`

const Drawer: React.FC = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(Context)

  return (
    <>
      {isOpen &&
        <OverlayWrapper onClick={() => setIsOpen(false)} />
      }
      <Wrapper isOpen={isOpen}>
        {children}
      </Wrapper>
    </>
  )
}

export default Drawer
