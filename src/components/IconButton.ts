import styled from 'styled-components'

import { withDefaultProps } from '@/util/styles'

import { grey200, grey700, grey100 } from '@/theme/colors'

interface Props {
  activeBgColor?: string
  activeColor?: string
  bgColor: string
  color: string
  hoverBgColor: string
  hoverColor?: string
  padding: number
  size: number
  width: number
}

const transientProps = [
  'activeBgColor', 'activeColor', 'bgColor', 'color', 'hoverBgColor', 'hoverColor',
  'padding', 'size', 'width'
]

const IconButton = styled.button.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  align-items: center;
  display: inline-flex;
  height: ${p => p.width + p.padding}rem;
  justify-content: center;
  padding: 0;
  width: ${p => p.width + p.padding}rem;

  appearance: none;
  background-color: ${p => p.bgColor};
  border: none;
  border-radius: 0.25rem;
  color: ${p => p.color};
  cursor: pointer;
  outline: none;

  font-size: ${p => p.size}rem;

  &:hover {
    background-color: ${p => p.hoverBgColor};
    color: ${p => p.hoverColor || p.color};
  }

  &:active {
    background-color: ${p => p.activeBgColor};
    color: ${p => p.activeColor || p.color};
  }
`

export default withDefaultProps(IconButton, {
  activeBgColor: grey200,
  bgColor: 'transparent',
  color: grey700,
  hoverBgColor: grey100,
  padding: 0.5,
  size: 1,
  width: 1
})
