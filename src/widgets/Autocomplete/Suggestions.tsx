import React, { useState } from 'react'
import styled from 'styled-components'

import { grey400, grey800 } from '@/theme/colors'
import { raisedMore } from '@/theme/shadows'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Text from '@/components/Text'

interface WrapperProps {
  isHidden?: boolean
}

const transientProps = ['isHidden']

const Wrapper = styled.div.withConfig<WrapperProps>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  display: ${p => p.isHidden ? 'none' : 'flex'};
  flex-direction: column;
  padding: 0.375rem 0;

  left: 0;
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);

  background-color: white;
  border: 1px solid ${grey400};
  border-radius: 0.375rem;
  box-shadow: ${raisedMore};

  z-index: 1000;
`

const Loading = styled(Flex)`
  padding: 0.75rem 0;
`

interface Props {
  children: React.ReactElement[]
  isFocused: boolean
  isLoading: boolean
  loadingPrompt: string
  noResults: string
}

const Suggestions = ({
  children, isFocused, isLoading, loadingPrompt, noResults
}: Props) => {
  const [isMouseDown, setIfMouseDown] = useState(false)

  const handleMouseDown = () => setIfMouseDown(true)
  const handleMouseUp = () => setIfMouseDown(false)

  return (
    <Wrapper
      isHidden={!(isFocused || isMouseDown)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onTouchStart={handleMouseDown}
    >
      <>
        {isLoading &&
          <Loading justify='center'>
            <Text color={grey800} size={0.875}>
              <Icon spin icon={{ iconName: 'circle-notch', prefix: 'fas' }} />
            </Text>
            <Text size={0.875}>
              {loadingPrompt}
            </Text>
          </Loading>
        }
        {React.Children.count(children) === 0 &&
          <Loading justify='center'>
            <Text size={0.875}>
              <em>{noResults}</em>
            </Text>
          </Loading>
        }
        {children}
      </>
    </Wrapper>
  )
}

export default Suggestions
