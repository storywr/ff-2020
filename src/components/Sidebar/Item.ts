import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Icon from '@/components/Icon'

import { withDefaultProps } from '@/util/styles'

import { grey100, grey500, grey600, primary600 } from '@/theme/colors'
import { boldWeight } from '@/theme/typography'

interface Props {
  activeColor: string
  color: string
  hoverBgColor: string
  iconColor: string
}

const transientProps = ['activeColor', 'color', 'hoverBgColor', 'iconColor']

const activeStyles = css<Props>`
  color: ${p => p.activeColor};

  font-weight: ${boldWeight};

  ${Icon} {
    color: ${p => p.activeColor};
  }
`

export const StyledItem = styled(NavLink).withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  align-items: center;
  display: flex;
  padding: 0.875rem 1rem;
  margin: 0 1rem;

  border-radius: 0.25rem;
  color: ${p => p.color};
  cursor: pointer;

  text-decoration: none;

  ${Icon} {
    margin-right: 1.25rem;
    width: 1.375rem;

    color: ${p => p.iconColor};

    font-size: 1.25rem;
  }

  &:hover {
    background-color: ${p => p.hoverBgColor};
  }

  &.active {
    ${activeStyles};
  }

  ${p => p.isActive && activeStyles};
`

export default withDefaultProps(StyledItem, {
  activeColor: primary600,
  color: grey600,
  hoverBgColor: grey100,
  iconColor: grey500
})
