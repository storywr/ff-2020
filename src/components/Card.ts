import styled from 'styled-components'

import Table from '@/components/Table'

import { withDefaultProps } from '@/util/styles'

import { grey200, grey400 } from '@/theme/colors'

interface Props {
  bgColor: string
  borderColor: string
}

const transientProps = ['bgColor', 'borderColor']

export const StyledCard = styled.div.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  width: 100%;

  background-color: ${p => p.bgColor};
  border: 1px solid ${p => p.borderColor};
  border-radius: 0.375rem;
`

export const StyledBody = styled.div.withConfig<Props>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  padding: 1.5rem;

  position: relative;

  background-color: ${p => p.bgColor};

  &:first-child {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }

  & + & {
    border-top: 1px solid ${p => p.borderColor};
  }

  ${Table} + & {
    border-top: 1px solid ${p => p.borderColor};
  }
`
export const Body = withDefaultProps(StyledBody, {
  bgColor: 'transparent',
  borderColor: grey200
})

interface HeaderProps
  extends Props {
  align: 'flex-start' | 'center' | 'baseline' | 'flex-end'
}

const headerTransientProps = transientProps.concat('align')

export const StyledHeader = styled.div.withConfig<HeaderProps>({
  shouldForwardProp: (prop) => !headerTransientProps.includes(prop)
})`
  align-items: ${p => p.align};
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;

  background-color: white;

  &:first-child {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  ${Body} + & {
    border-top: 1px solid ${grey200};
  }

  & + ${Body} {
    padding-top: 0.25rem;
  }
`

export const Header = withDefaultProps(StyledHeader, {
  align: 'center',
  bgColor: 'transparent',
  borderColor: grey200
})

export default withDefaultProps(StyledCard, {
  bgColor: 'white',
  borderColor: grey400
})
