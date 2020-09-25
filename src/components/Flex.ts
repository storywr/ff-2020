import styled, { css } from 'styled-components'

import { withDefaultProps } from '@/util/styles'

type FlexAlign = 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch'
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
type FlexJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'

export interface Props {
  align?: FlexAlign
  direction: FlexDirection
  fit: boolean
  flex: string | number
  full: boolean
  gutter: number
  inline: boolean
  justify: FlexJustify
  wrap: boolean
}
const transientProps = ['align', 'direction', 'fit', 'flex', 'full', 'gutter', 'inline', 'justify', 'wrap']

const columnStyles = css<Props>`
  > * + * {
    margin-top: ${p => p.gutter}rem;
  }
`

const fitStyles = css<Props>`
  > * {
    flex: 1;
  }
`

const fullStyles = css<Props>`
  flex: 1;
  width: 100%;
`

const rowStyles = css<Props>`
  > * + * {
    margin-left: ${p => p.gutter}rem;
  }
`

const wrapStyles = css<Props>`
  flex-wrap: wrap;
  margin-top: -${p => p.gutter}rem;

  > * {
    margin-right: ${p => p.gutter}rem;
    margin-top: ${p => p.gutter}rem;

    & + * {
      margin-left: 0;
    }
  }
`

const isColumn = (direction: FlexDirection) => (
  direction === 'column' || direction === 'column-reverse'
)

export const StyledFlex = styled.div.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  align-items: ${p => p.align ? p.align : isColumn(p.direction) ? 'flex-start' : 'center'};
  display: ${p => p.inline ? 'inline-flex' : 'flex'};
  justify-content: ${p => p.justify};
  flex: ${p => p.flex};
  flex-direction: ${p => p.direction};

  ${p => isColumn(p.direction) ? columnStyles : rowStyles};
  ${p => p.fit && fitStyles};
  ${p => p.full && fullStyles};
  ${p => p.wrap && wrapStyles};
`

export const DefaultFlexProps = {
  direction: 'row',
  fit: false,
  flex: 'initial',
  full: false,
  gutter: 1,
  inline: false,
  justify: 'flex-start',
  wrap: false
}

export default withDefaultProps(StyledFlex, DefaultFlexProps)
