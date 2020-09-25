import styled from 'styled-components'

import { withDefaultProps } from '@/util/styles'

import { grey400, grey800 } from '@/theme/colors'
import { boldWeight } from '@/theme/typography'

interface Props {
  color: string
  disabledColor: string
  fontSize: number
  hoverColor: string
  hPadding: number
  vPadding: number
}

const transientProps = ['color', 'disabledColor', 'fontSize', 'hoverColor', 'hPadding', 'vPadding']

export const StyledUnderlineButton = styled.button.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: ${p => p.vPadding}rem ${p => p.hPadding}rem;

  background-color: transparent;
  border: none;
  color: ${p => p.color};
  cursor: pointer;
  outline: none;

  position: relative;

  font-size: ${p => p.fontSize}rem;
  font-weight: ${boldWeight};
  text-decoration: none;

  &::after {
    content: '';
    display: none;
    height: 2px;

    bottom: 0;
    left: ${p => p.hPadding}rem;
    position: absolute;
    right: ${p => p.hPadding}rem;

    background-color: ${p => p.hoverColor};
  }

  &:hover {
    color: ${p => p.hoverColor};

    &::after {
      display: initial;
    }
  }

  &[disabled] {
    color: ${p => p.disabledColor};
    cursor: not-allowed;

    &::after {
      background-color: transparent;
    }
  }
`

export default withDefaultProps(StyledUnderlineButton, {
  color: grey800,
  disabledColor: grey400,
  fontSize: 0.875,
  hoverColor: grey800,
  hPadding: 0.625,
  vPadding: 0.25
})
