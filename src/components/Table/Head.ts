import styled from 'styled-components'

import { withDefaultProps } from '@/util/styles'

import { grey100 } from '@/theme/colors'

interface Props {
  bgColor: string
}

const transientProps = ['bgColor']

const Head = styled.thead.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  background-color: ${p => p.bgColor};
 `

export default withDefaultProps(Head, {
  bgColor: grey100
})
