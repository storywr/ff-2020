import styled from 'styled-components'

import { withDefaultProps } from '@/util/styles'

interface Props {
  bgColor: string
}

const transientProps = ['bgColor']

const Footer = styled.footer.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 2rem;

  background-color: ${p => p.bgColor};
`

export default withDefaultProps(Footer, {
  bgColor: 'transparent'
})
