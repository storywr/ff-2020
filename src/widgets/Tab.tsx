import { IconLookup, IconName } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { LocationDescriptor } from 'history'

import Icon from '@/components/Icon'
import Text from '@/components/Text'

import { withDefaultProps } from '@/util/styles'

import { grey200, grey600, grey700, primary700 } from '@/theme/colors'
import { smallDesktop } from '@/theme/mediaQueries'
import { boldWeight } from '@/theme/typography'

interface WrapperProps {
  activeColor: string
  borderColor: string
  color: string
  hoverColor: string
}

const transientProps = ['activeColor', 'borderColor', 'color', 'hoverColor']

const activeStyles = css<WrapperProps>`
  ${Text} {
    color: ${p => p.activeColor};
  }

  border-color: ${p => p.activeColor};
  color: ${p => p.activeColor};
`

const StyledWrapper = styled(NavLink).withConfig<WrapperProps>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  padding: 0.5rem 1rem 0.875rem;

  border-bottom: 3px solid transparent;
  color: ${p => p.color};
  cursor: pointer;

  text-decoration: none;
  white-space: nowrap;

  ${Text} {
    color: ${p => p.color};
  }

  &:hover {
    border-color: ${p => p.borderColor};
    color: ${p => p.hoverColor};

    ${Text} {
      color: ${p => p.hoverColor};
    }
  }

  &:active {
    color: ${p => p.hoverColor};
  }

  &.active {
    ${activeStyles};
  }

  ${smallDesktop} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  ${p => p.isActive && activeStyles};
`

const Wrapper = withDefaultProps(StyledWrapper, {
  activeColor: primary700,
  borderColor: grey200,
  color: grey600,
  hoverColor: grey700
})

interface TabProps {
  icon: IconName | IconLookup
  title: string
  to: LocationDescriptor
}

const Tab = ({ icon, title, to, ...rest }: TabProps & Partial<WrapperProps>) => (
  <Wrapper
    {...rest}
    exact
    to={to}
  >
    <Icon
      fixedWidth
      icon={icon}
      fontSize={0.75}
      rMargin={0.75}
    />
    <Text uppercase size={0.75} weight={boldWeight}>
      {title}
    </Text>
  </Wrapper>
)

export default Tab
