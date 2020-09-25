import styled from 'styled-components'

import { withDefaultProps } from '@/util/styles'

import { grey100 } from '@/theme/colors'

export interface Props {
  borderColor: string
  right: boolean
  width: string
}

const transientProps = ['borderColor', 'right', 'width']

export const StyledCell = styled.td.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  padding: 1rem;
  width: ${p => p.width};

  border-top: 1px solid ${p => p.borderColor};

  font-size: 1rem;
  text-align: ${p => p.right ? 'right' : 'left'};
  line-height: 1.5;
  vertical-align: middle;

  &:first-child {
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
  }
`

export default withDefaultProps(StyledCell, {
  borderColor: grey100,
  right: false,
  width: 'auto'
})
