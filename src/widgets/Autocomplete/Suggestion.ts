import styled, { css } from 'styled-components'

import { grey100, primary100 } from '@/theme/colors'

import { DefaultFlexProps, Props as FlexProps, StyledFlex as Flex } from '@/components/Flex'
import { withDefaultProps } from '@/util/styles'

interface Props
  extends FlexProps {
  isActive?: boolean
}

const transientProps = ['isActive']

const activeStyles = css`
  background-color: ${primary100};

  &:hover {
    background-color: ${primary100};
  }
`

const Suggestion = styled(Flex).withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  padding: 0.5rem 0.75rem;

  cursor: pointer;

  font-size: 0.875rem;

  &:hover {
    background-color: ${grey100};
  }

  ${p => p.isActive && activeStyles};
`

export default withDefaultProps(Suggestion, DefaultFlexProps)
