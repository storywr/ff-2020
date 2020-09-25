import styled from 'styled-components'

import IconItem from './IconItem'

import { withDefaultProps } from '@/util/styles'

export const navbarHeight = 4

interface Props {
  bgColor: string
  borderColor: string
}

const transientProps = ['bgColor', 'borderColor']

export const StyledNavbar = styled.nav.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  align-items: center;
  display: flex;
  height: ${navbarHeight}rem;
  justify-content: space-between;
  padding: 0;

  background-color: ${p => p.bgColor};
  border-bottom: 1px solid ${p => p.borderColor};

  ${IconItem} {
    height: ${navbarHeight}rem;
    width: ${navbarHeight}rem;
  }
`

export { IconItem }
export { default as Group } from './Group'

export default withDefaultProps(StyledNavbar, {
  bgColor: 'transparent',
  borderColor: 'transparent',
})
