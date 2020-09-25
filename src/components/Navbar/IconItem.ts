import styled, { css } from 'styled-components'

import { grey100 } from '@/theme/colors'

const clickableStyles = css`
  cursor: pointer;

  &:hover {
    background-color: ${grey100};
  }
`

const IconItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  font-size: 1.5rem;

  ${p => !!p.onClick && clickableStyles};
`

export default IconItem
