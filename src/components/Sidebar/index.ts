import styled from 'styled-components'

import { withDefaultProps } from '@/util/styles'

import { grey200 } from '@/theme/colors'

export const sidebarWidth = 16

interface Props {
  bgColor: string
  borderColor: string
}

const transientProps = ['bgColor', 'borderColor']

export const StyledSidebar = styled.div.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  width: ${sidebarWidth}rem;

  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;

  background-color: white;
  border-right: 1px solid ${p => p.borderColor};
  overflow-y: auto;
  z-index: 10000;
`

export { default as Group } from './Group'
export { default as Item } from './Item'
export { default as Title} from './Title'

export default withDefaultProps(StyledSidebar, {
  bgColor: 'white',
  borderColor: grey200
})
