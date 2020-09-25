import React from 'react'
import styled from 'styled-components'

type Props = {
  inverse?: boolean
  query: string
}

const transientProps = ['inverse', 'query']

const Wrapper = styled.div.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  display: ${p => p.inverse ? 'initial' : 'none'};

  ${p => p.query} {
    display: ${p => p.inverse ? 'none' : 'initial'};
  }
`

const MediaQuery: React.FC<Props> = ({ children, inverse = false, query }) => {
  return (
    <Wrapper
      inverse={inverse}
      query={query}
    >
      {children}
    </Wrapper>
  )
}

export default MediaQuery
