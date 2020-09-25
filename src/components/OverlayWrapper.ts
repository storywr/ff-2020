import styled from 'styled-components'
import { withDefaultProps } from '@/util/styles'

const defaultBgColor = 'rgba(173, 181, 189,0.5)'

export interface Props {
  bgColor: string
}

const OverlayWrapper = styled.div.withConfig<Props>({
  shouldForwardProp: (prop) => prop !== 'bgColor'
})`
  display: flex;
  justify-content: center;

  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

  background-color: ${p => p.bgColor};

  z-index: 100000;
`

export default withDefaultProps(OverlayWrapper, {
  bgColor: defaultBgColor
})
