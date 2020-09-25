import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { withDefaultProps } from '@/util/styles'

interface Props {
  color: string
  fontSize?: number
  lMargin: number
  rMargin: number
}

const transientProps = ['color', 'fontSize', 'lMargin', 'rMargin']

const Icon = styled(FontAwesomeIcon).withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  margin-left: ${p => p.lMargin}rem;
  margin-right: ${p => p.rMargin}rem;

  color: ${p => p.color};

  font-size: ${p => p.fontSize ? `${p.fontSize}rem` : 'inherit'};
`

export default withDefaultProps(Icon, {
  color: 'inherit',
  lMargin: 0,
  rMargin: 0
})
