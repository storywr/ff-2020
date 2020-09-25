import styled from 'styled-components'

import { withDefaultProps } from '@/util/styles'

import { smallDesktop } from '@/theme/mediaQueries'

interface Props {
  bgColor: string
  bPadding: number
  maxWidth: number
  tPadding: number
}

const transientProps = ['bgColor', 'bPadding', 'maxWidth', 'tPadding']

export const StyledContentWrapper = styled.div.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0 1rem;
  padding-bottom: ${p => p.bPadding}rem;
  padding-top: ${p => p.tPadding}rem;

  ${smallDesktop} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  > * {
    max-width: ${p => p.maxWidth}rem;
    width: 100%;
  }
`

export default withDefaultProps(StyledContentWrapper, {
  bgColor: 'transparent',
  bPadding: 0,
  maxWidth: 64,
  tPadding: 0
})
