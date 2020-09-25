import styled from 'styled-components'

import { variantGroup, withDefaultProps } from '@/util/styles'

import { grey100, grey200, grey300, grey500, grey600, grey700, primary500, primary600, success600, success500, success400, primary400 } from '@/theme/colors'

interface Palette {
  activeBgColor: string
  activeBorderColor: string
  activeColor: string
  bgColor: string
  borderColor: string
  color: string
  disabledBgColor: string
  disabledBorderColor: string
  disabledColor: string
  hoverBgColor: string
  hoverBorderColor: string
  hoverColor: string
}

interface Size {
  fontSize: number
  hPadding: number
  lineHeight: number
  vPadding: number
}

interface Props
  extends Partial<Palette & Size> {
  palette: 'clear' | 'default' | 'success' | 'outline'
  size: 'big' | 'compact' | 'default' | 'small'
}

const transientProps = [
  'activeBgColor', 'activeBorderColor', 'activeColor', 'bgColor', 'borderColor',
  'color', 'disabledBgColor', 'disabledBorderColor', 'disabledColor', 'hoverBgColor',
  'hoverBorderColor', 'hoverColor', 'palette'
]

const palette = variantGroup<Props, 'palette', keyof Palette>('palette', {
  clear: {
    activeBgColor: grey300,
    activeBorderColor: 'transparent',
    activeColor: grey700,
    bgColor: 'white',
    borderColor: 'transparent',
    color: grey700,
    disabledBgColor: 'transparent',
    disabledBorderColor: grey200,
    disabledColor: grey600,
    hoverBgColor: grey200,
    hoverBorderColor: 'transparent',
    hoverColor: grey700
  },
  default: {
    activeBgColor: primary600,
    activeBorderColor: 'transparent',
    activeColor: 'white',
    bgColor: primary500,
    borderColor: 'transparent',
    color: 'white',
    disabledBgColor: grey300,
    disabledBorderColor: 'transparent',
    disabledColor: grey500,
    hoverBgColor: primary400,
    hoverBorderColor: 'transparent',
    hoverColor: 'white'
  },
  success: {
    activeBgColor: success600,
    activeBorderColor: 'transparent',
    activeColor: 'white',
    bgColor: success500,
    borderColor: 'transparent',
    color: 'white',
    disabledBgColor: grey300,
    disabledBorderColor: 'transparent',
    disabledColor: grey500,
    hoverBgColor: success400,
    hoverBorderColor: 'transparent',
    hoverColor: 'white'
  },
  outline: {
    activeBgColor: grey200,
    activeBorderColor: grey500,
    activeColor: grey700,
    bgColor: 'white',
    borderColor: grey500,
    color: grey700,
    disabledBgColor: grey300,
    disabledBorderColor: grey600,
    disabledColor: grey500,
    hoverBgColor: grey100,
    hoverBorderColor: grey500,
    hoverColor: grey700
  }
})

const size = variantGroup<Props, 'size', keyof Size>('size', {
  big: {
    fontSize: 1,
    hPadding: 1.5,
    lineHeight: 1.25,
    vPadding: 0.75
  },
  compact: {
    fontSize: 0.875,
    hPadding: 0.875,
    lineHeight: 1.15,
    vPadding: 0.5
  },
  default: {
    fontSize: 0.875,
    hPadding: 1.25,
    lineHeight: 1.25,
    vPadding: 0.625
  },
  small: {
    fontSize: 0.75,
    hPadding: 0.5,
    lineHeight: 1,
    vPadding: 0.5
  }
})

export const StyledButton = styled.button.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: ${size.vPadding}rem ${size.hPadding}rem;

  background-color: ${palette.bgColor};
  border-radius: 0.375rem;
  border: 1px solid ${palette.borderColor};
  color: ${palette.color};
  cursor: pointer;
  outline: none;
  overflow: hidden;

  font-family: -apple-system, system-ui;
  font-size: ${size.fontSize}rem;
  font-weight: 700;
  line-height: ${size.lineHeight};
  text-decoration: none;

  &:hover {
    background-color: ${palette.hoverBgColor};
    border-color: ${palette.hoverBorderColor};
    color: ${palette.hoverColor};
  }

  &:active,
  &:focus {
    background-color: ${palette.activeBgColor};
    border-color: ${palette.activeBorderColor};
    color: ${palette.activeColor};
  }

  &[disabled] {
    background-color: ${palette.disabledBgColor};
    border-color: ${palette.disabledBorderColor};
    color: ${palette.disabledColor};
    cursor: not-allowed;

    &:hover {
      box-shadow: none;
    }
  }
`

export default withDefaultProps(StyledButton, {
  palette: 'default',
  size: 'default'
})
