import styled from 'styled-components'

import { StyledCell, Props as CellProps } from './Cell'

import { withDefaultProps } from '@/util/styles'

import { grey800 } from '@/theme/colors'
import { boldWeight } from '@/theme/typography'

interface Props
  extends CellProps {
  color: string
}

const transientProps = ['color']

const Heading = styled(StyledCell).withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  padding: 0.5rem 1rem;

  border: none;
  border-bottom: 1px solid ${p => p.borderColor};
  color: ${p => p.color};

  font-size: 0.625rem;
  font-weight: ${boldWeight};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  word-spacing: 2px;

  vertical-align: bottom;
`

export default withDefaultProps(Heading, {
  as: 'th',
  color: grey800
})
