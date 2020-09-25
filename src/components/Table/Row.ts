import styled, { css } from 'styled-components'

import Cell from './Cell'

import { withDefaultProps } from '@/util/styles'

import { grey100 } from '@/theme/colors'

interface Props {
  hoverBgColor: string
}

const transientProps = ['hoverBgColor']

const clickableStyles = css<Props>`
  cursor: pointer;

  &:hover {
    background-color: ${p => p.hoverBgColor};

    ${Cell} {
      border-top-color: transparent;
    }
  }
`

const Row = styled.tr.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  &:first-child {
    ${Cell} {
      border-color: transparent;
    }
  }

  ${p => p.onClick && clickableStyles};
`

export default withDefaultProps(Row, {
  hoverBgColor: grey100
})
