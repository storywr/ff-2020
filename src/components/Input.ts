import styled from 'styled-components'

import { variantGroup, withDefaultProps } from '@/util/styles'

import {
  danger100, danger700, grey100, grey300, grey500, primary200, primary700,
  success100, success700, warn100, warn700
} from '@/theme/colors'
import { font } from '@/theme/typography'

interface Palette {
  activeBorderColor: string
  borderColor: string
  selectionColor: string
}

export interface Props
  extends Partial<Palette> {
  palette: 'default' | 'danger' | 'success' | 'warn'
}

const transientProps = ['activeBorderColor', 'borderColor', 'palette', 'selectionColor']

const palette = variantGroup<Props, 'palette', keyof Palette>('palette', {
  default: {
    activeBorderColor: primary700,
    borderColor: grey300,
    selectionColor: primary200
  },
  danger: {
    activeBorderColor: danger700,
    borderColor: grey300,
    selectionColor: danger100
  },
  success: {
    activeBorderColor: success700,
    borderColor: grey300,
    selectionColor: success100
  },
  warn: {
    activeBorderColor: warn700,
    borderColor: grey300,
    selectionColor: warn100
  }
})

export const StyledInput = styled.input.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  height: 2.625rem;
  padding: 0.625rem 0.75rem;
  width: 100%;

  background-color: white;
  border: 1px solid ${palette.borderColor};
  border-radius: 0.375rem;
  outline: none;

  font-family: ${font};
  font-size: 0.875rem;
  line-height: 1.5;

  transition: box-shadow 150ms ease;

  &:focus {
    border-color: ${palette.activeBorderColor};
    box-shadow: 0 0 0px 4px ${grey100};
  }

  &::-webkit-input-placeholder {
    color: ${grey500};
  }

  &::selection {
    background: ${palette.selectionColor};
  }

  &[disabled] {
    background-color: ${grey100};
    cursor: not-allowed;
  }
`

export default withDefaultProps(StyledInput, {
  palette: 'default'
})
