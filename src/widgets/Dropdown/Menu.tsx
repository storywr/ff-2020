import React, { useContext, useCallback } from 'react'
import styled, { css } from 'styled-components'

import useClickout from '@/hooks/useClickout'

import Context from './context'

import { dropdownShadow } from '@/theme/shadows'

const ALIGN_CSS = {
  top: css`
    top: calc(50% - 24px);
  `,
  middle: css`
    top: 50%;
    transform: translateY(-50%) perspective(1px);
  `,
  bottom: css`
    bottom: calc(50% - 24px);
  `
}

const JUSTIFY_CSS = {
  left: css`
    left: 0px;
  `,
  center: css`
    left: 50%;
    transform: translateX(-50%) perspective(1px);
  `,
  right: css`
    right: 0px;
  `
}

const middleCenterStyles = css`
  transform: translate(-50%, -50%) perspective(1px);
`

type Props = {
  align?: keyof typeof ALIGN_CSS
  justify?: keyof typeof JUSTIFY_CSS
  minWidth?: number
}

type WrapperProps = Required<Props> & {
  isOpen: boolean
}

const transientProps = ['align', 'isOpen', 'justify']

const Wrapper = styled.div.withConfig<WrapperProps>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  display: ${p => p.isOpen ? 'block' : 'none'};
  min-width: ${p => p.minWidth}rem;

  position: absolute;

  background-color: white;
  border-radius: 0.25rem;
  box-shadow: ${dropdownShadow};

  ${p => ALIGN_CSS[p.align]};
  ${p => JUSTIFY_CSS[p.justify]};
  ${p => p.align === 'middle' && p.justify === 'center' && middleCenterStyles};
`

const Menu: React.FC<Props> = ({ align = 'top', children, justify = 'right', minWidth = 16 }) => {
  const { isOpen, setIsOpen } = useContext(Context)

  const handleClickout = useCallback(() => setIsOpen(false), [])
  const clickoutRef = useClickout<HTMLDivElement>(handleClickout, { isActive: isOpen })

  return (
    <Wrapper
      ref={clickoutRef}
      align={align}
      isOpen={isOpen}
      justify={justify}
      minWidth={minWidth}
    >
      {children}
    </Wrapper>
  )
}

export default Menu
