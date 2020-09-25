import styled from 'styled-components'

import { StyledFlex } from '@/components/Flex'

import { withDefaultProps } from '@/util/styles'

import { smallDesktop } from '@/theme/mediaQueries'

export const StyledGroup = styled(StyledFlex)`
  padding: 0 1rem;

  ${smallDesktop} {
    padding: 0 2rem;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`

export default withDefaultProps(StyledGroup, {
  direction: 'row',
  fit: false,
  full: false,
  gutter: 1,
  inline: false,
  justify: 'flex-start',
  wrap: false
})
