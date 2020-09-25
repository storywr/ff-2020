import React from 'react'

import ContentWrapper from '@/components/ContentWrapper'

interface Props {
  bgColor?: string
  bPadding?: number
  maxWidth?: number
  tPadding?: number
}

const Content: React.FC<Props> = ({
  children, bgColor = 'transparent', bPadding = 0, maxWidth = 64, tPadding = 0
}) => (
  <ContentWrapper
    bgColor={bgColor}
    bPadding={bPadding}
    maxWidth={maxWidth}
    tPadding={tPadding}
  >
    <div>
      {children}
    </div>
  </ContentWrapper>
)

export default Content
