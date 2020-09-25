import { IconLookup } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import styled from 'styled-components'

import Icon from '@/components/Icon'

import { grey100, grey600, grey700 } from '@/theme/colors'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 1rem;

  color: ${grey700};
  cursor: pointer;

  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    background-color: ${grey100};
  }

  &:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`

type Props = {
  icon: IconLookup
}

const Item: React.FC<Props> = ({ icon, children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Icon
        color={grey600}
        fontSize={1}
        icon={icon}
        rMargin={1}
      />
      {children}
    </Wrapper>
  )
}

export default Item
