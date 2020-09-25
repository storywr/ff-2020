import { IconLookup } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import styled from 'styled-components'

import Icon from '@/components/Icon'
import Text from '@/components/Text'
import { grey700 } from '@/theme/colors'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  right: 0;
`

const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > ${Text} {
    margin-top: 1.25rem;
  }
`

const defaultIcon: IconLookup = { iconName: 'spinner-third', prefix: 'far' }

interface Props {
  color?: string
  icon?: IconLookup
  prompt?: string
}

const LoadingScreen = ({ color = grey700, icon = defaultIcon, prompt }: Props) => (
  <Wrapper>
    <Inner>
      <Icon
        spin
        fontSize={4}
        icon={icon}
      />
      {prompt &&
        <Text color={color} size={1.25}>
          {prompt}
        </Text>
      }
    </Inner>
  </Wrapper>
)

export default LoadingScreen
