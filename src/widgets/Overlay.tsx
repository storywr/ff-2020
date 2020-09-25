import React from 'react'
import styled from 'styled-components'

import OverlayWrapper, { Props as WrapperProps } from '@/components/OverlayWrapper'

const defaultBgColor = 'rgba(173, 181, 189,0.5)'

interface InnerProps {
  vPadding: number
  width: number
}

const Inner = styled.div.withConfig<InnerProps>({
  shouldForwardProp: (prop) => !['vPadding', 'width'].includes(prop)
})`
  flex: 1;
  max-width: ${p => p.width}rem;
  padding: ${p => p.vPadding}rem 1rem 0;

  overflow-y: auto;

  & > *:last-child {
    margin-bottom: ${p => p.vPadding}rem;
  }
`

type Props = Partial<WrapperProps> & Partial<InnerProps>

const Overlay: React.FC<Props> = ({ children, bgColor = defaultBgColor, vPadding = 8, width = 42 }) => (
  <OverlayWrapper bgColor={bgColor}>
    <Inner vPadding={vPadding} width={width}>
      {children}
    </Inner>
  </OverlayWrapper>
)

export default Overlay
