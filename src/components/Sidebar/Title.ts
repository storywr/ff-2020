import styled from 'styled-components'

import { StyledText } from '@/components/Text'

import { withDefaultProps } from '@/util/styles'

import { grey800 } from '@/theme/colors'
import { boldWeight } from '@/theme/typography'

export const StyledTitle = styled(StyledText)`
  margin-bottom: 1rem;
  padding: 0 2rem;
`

export default withDefaultProps(StyledTitle, {
  color: grey800,
  lineHeight: 1.15,
  size: 0.625,
  uppercase: true,
  weight: boldWeight
})
