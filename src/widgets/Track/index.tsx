import { IconLookup } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import styled from 'styled-components'

import Step, { StepIcon } from './Step'

import { grey400, grey600, grey800 } from '@/theme/colors'

const FinalStep = styled.div`
  padding-bottom: 0.5rem;
`

const Wrapper = styled.div`
  align-items: flex-end;
  display: flex;
  width: 100%;

  position: relative;
`

interface Step {
  icon: IconLookup
  title: string
}

interface Props {
  activeColor?: string
  activeStep: number
  completedColor?: string
  hideInactiveSteps?: boolean
  inactiveColor?: string
  steps: Step[]
  incompleteColor?: string
}

const Track = ({
  activeColor = grey800, activeStep, completedColor: completedColorProp,
  hideInactiveSteps = false, inactiveColor = grey400, incompleteColor = grey600, steps
}: Props) => {
  const completedColor = completedColorProp || activeColor
  const isTrackComplete = activeStep >= steps.length

  return (
    <Wrapper>
      {steps.map((step, index) => (
          <Step
            key={index}
            activeColor={activeColor}
            completedColor={completedColor}
            hideInactive={hideInactiveSteps}
            icon={step.icon}
            inactiveColor={inactiveColor}
            incompleteColor={incompleteColor}
            isActive={index === activeStep}
            isCompleted={index < activeStep}
            number={index + 1}
            title={step.title}
          />
        )
      )}
      <FinalStep>
        <StepIcon
          color={isTrackComplete ? completedColor : incompleteColor}
          icon={{ iconName: 'check-circle', prefix: isTrackComplete ? 'fas' : 'far' }}
        />
      </FinalStep>
    </Wrapper>
  )
}

export default Track
