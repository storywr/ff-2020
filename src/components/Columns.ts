import styled from 'styled-components'

import { withDefaultProps } from '@/util/styles'

interface Props {
  gutter: number
}

const transientProps = ['gutter']

export const StyledColumns = styled.div.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${p => p.gutter}rem;

  > * {
    flex: 1;
    padding: 0 ${p => p.gutter}rem;
  }
`

export default withDefaultProps(StyledColumns, {
  gutter: 0.5
})
