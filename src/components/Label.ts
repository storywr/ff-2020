import styled from 'styled-components'

import { variantGroup, withDefaultProps } from '@/util/styles'

import {
  danger100, danger800, grey100, grey800, primary100, success100, success800,
  primary800, warn200
} from '@/theme/colors'
import { boldWeight } from '@/theme/typography'

interface Palette {
  bgColor: string
  borderColor: string
  color: string
}

interface Props
  extends Partial<Palette> {
  palette: 'primary' | 'success' | 'danger' | 'warn' | 'grey'
}

const transientProps = ['bgColor', 'borderColor', 'color', 'palette']

const palette = variantGroup<Props, 'palette', keyof Palette>('palette', {
  danger: {
    bgColor: danger100,
    borderColor: 'transparent',
    color: danger800
  },
  grey: {
    bgColor: grey100,
    borderColor: 'transparent',
    color: grey800
  },
  primary: {
    bgColor: primary100,
    borderColor: 'transparent',
    color: primary800
  },
  success: {
    bgColor: success100,
    borderColor: 'transparent',
    color: success800
  },
  warn: {
    bgColor: warn200,
    borderColor: 'transparent',
    color: grey800
  }
})

const Label = styled.span.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: 0.25rem 0.5rem;

  background-color: ${palette.bgColor};
  border: 1px solid ${palette.borderColor};
  border-radius: 0.375rem;
  color: ${palette.color};
  outline: none;
  overflow: hidden;

  font-size: 0.75rem;
  font-weight: ${boldWeight};
  line-height: 1.25;
  text-decoration: none;
  white-space: nowrap;
`

export default withDefaultProps(Label, {
  palette: 'primary'
})
