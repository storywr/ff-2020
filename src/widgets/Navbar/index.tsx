import React from 'react'
import styled from 'styled-components'

import Group from './Group'
import IconItem from './IconItem'

import { smallDesktop } from '@/theme/mediaQueries'

const navbarHeight = 4

type WrapperProps = {
  bgColor: string
  borderColor: string
}

const wrapperTransientProps = ['bgColor', 'borderColor']

const Wrapper = styled.div.withConfig<WrapperProps>({
  shouldForwardProp: (prop) => !wrapperTransientProps.includes(prop)
})`
  display: flex;
  height: calc(${navbarHeight}rem + 1px);
  justify-content: center;
  width: 100%;

  background-color: ${p => p.bgColor};
  border-bottom: 1px solid ${p => p.borderColor};

  ${smallDesktop} {
    padding: 0 1rem;
  }

  ${IconItem} {
    height: ${navbarHeight}rem;
    width: ${navbarHeight}rem;
  }
`

type InnerProps = {
  maxWidth: number
}

const innerTransientProps = ['maxWidth']

const Inner = styled.div.withConfig<InnerProps>({
  shouldForwardProp: (prop) => !innerTransientProps.includes(prop)
})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: ${p => p.maxWidth}rem;
  width: 100%;
`

type Props = {
  bgColor?: string
  borderColor?: string
  maxWidth?: number
}

const Navbar: React.FC<Props> = ({
  bgColor = 'white', borderColor = 'transparent', children, maxWidth = 64
}) => {
  return (
    <Wrapper bgColor={bgColor} borderColor={borderColor}>
      <Inner maxWidth={maxWidth}>
        {children}
      </Inner>
    </Wrapper>
  )
}

export { Group, IconItem }

export default Navbar
