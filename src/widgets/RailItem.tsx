import React from 'react'
import styled, { css } from 'styled-components'

const Toolbar = styled.div`
  visibility: hidden;
`

const toolbarEnabledStyles = css`
  &:hover, &:focus, &:active {
    ${Toolbar} {
      visibility: visible;
    }
  }
`

type RailProps = {
  toolbarEnabled: boolean
}

const transientProps = ['toolbarEnabled']

const ToolbarWrapper = styled.div.withConfig<RailProps>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  height: 100%;
  padding-right: 0.5rem;

  position: absolute;
  right: 100%;
  top: 0;

  ${p => p.toolbarEnabled && toolbarEnabledStyles};
`

const Item = styled.div.withConfig<RailProps>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  position: relative;

  ${p => p.toolbarEnabled && toolbarEnabledStyles};
`

type Props = {
  children: React.ReactNode
  hideToolbar?: boolean
  toolbar: React.ReactElement
}

const RailItem= React.forwardRef<HTMLDivElement, Props>(({ children, hideToolbar = false, toolbar, ...rest }, ref) => {
  return (
    <Item
      ref={ref}
      {...rest}
      toolbarEnabled={!hideToolbar}
    >
      <ToolbarWrapper toolbarEnabled={!hideToolbar}>
        <Toolbar>
          {toolbar}
        </Toolbar>
      </ToolbarWrapper>
      {children}
    </Item>
  )
})

export default RailItem
