import styled, { css } from 'styled-components'

import { withDefaultProps } from '@/util/styles'

import { grey700 } from '@/theme/colors'
import { font, regularWeight } from '@/theme/typography'

export interface Props {
  color: string
  lineHeight: number
  size: number
  uppercase: boolean
  weight: number | string
}

const transientProps = ['color', 'lineHeight', 'size', 'uppercase', 'weight']

const uppercaseStyles = css`
  text-transform: uppercase;
`

export const StyledText = styled.span.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  color: ${p => p.color};

  font-family: ${font};
  font-size: ${p => p.size}rem;
  font-weight: ${p => p.weight};
  line-height: ${p => p.lineHeight};

  ${p => p.uppercase && uppercaseStyles};
`

export default withDefaultProps(StyledText, {
  color: grey700,
  lineHeight: 1.15,
  size: 1,
  uppercase: false,
  weight: regularWeight
})
