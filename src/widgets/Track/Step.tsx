import { IconLookup } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import styled from 'styled-components'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Text from '@/components/Text'

import { boldWeight } from '@/theme/typography'

interface WrapperProps {
  inactiveColor: string
  isTrackActive: boolean
  trackColor: string
}

const transientProps = ['inactiveColor', 'isTrackActive', 'trackColor']

const Wrapper = styled.div.withConfig<WrapperProps>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.5rem 0.125rem;

  border-radius: 0.25rem;

  position: relative;

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: calc(100% - 32px);

    bottom: 15px;
    left: 24px;
    position: absolute;

    background-color: ${p => p.isTrackActive ? p.trackColor : p.inactiveColor};
  }
`

export const StepIcon = styled(Icon)`
  height: 1rem;
  margin-top: 0.875rem;
  width: 1rem !important;
`

const StepNumber = styled(Text)`
  width: 1rem;

  text-align: center;
`

interface Props {
  activeColor: string
  completedColor: string
  hideInactive: boolean
  icon: IconLookup
  inactiveColor: string
  incompleteColor: string
  isActive: boolean
  isCompleted: boolean
  number: number
  title: string
}

const Step = ({
  activeColor, completedColor, hideInactive, icon, inactiveColor, incompleteColor,
  isActive, isCompleted, number, title
}: Props) => {
  return (
    <Wrapper
      trackColor={isCompleted ? completedColor : activeColor}
      inactiveColor={inactiveColor}
      isTrackActive={isActive || isCompleted}
    >
      {(isActive || !hideInactive) &&
        <Flex>
          <StepNumber
            uppercase
            color={isActive ? activeColor : inactiveColor}
            size={0.75}
            weight={boldWeight}
          >
            {`0${number}`.slice(-2)}
          </StepNumber>
          <Text
            uppercase
            color={isActive ? activeColor : inactiveColor}
            size={0.75}
            weight={boldWeight}
          >
            {title}
          </Text>
        </Flex>
      }
      <StepIcon
        color={isActive ? activeColor : (isCompleted ? completedColor : incompleteColor)}
        icon={icon}
      />
    </Wrapper>
  )
}

export default Step
