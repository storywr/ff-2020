import React from 'react'
import styled from 'styled-components'

import Card, { Body, Header } from '@/components/Card'
import Icon from '@/components/Icon'
import IconButton from '@/components/IconButton'
import Text from '@/components/Text'

import { grey800 } from '@/theme/colors'
import { cardShadow } from '@/theme/shadows'
import { boldWeight } from '@/theme/typography'
import useClickout from '@/hooks/useClickout'

const Wrapper = styled.div`
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: ${cardShadow};
`

interface Props {
  disableClickout?: boolean
  title: string
  onClose: () => void
}

const Modal: React.FC<Props> = ({ children, disableClickout = false, title, onClose }) => {
  const clickoutRef = useClickout<HTMLDivElement>(onClose, { isActive: !disableClickout })

  return (
    <Wrapper ref={clickoutRef}>
      <Card>
        <Header>
          <Text uppercase color={grey800} size={0.75} weight={boldWeight}>
            {title}
          </Text>
          <IconButton
            padding={0.875}
            size={0.875}
            onClick={onClose}
          >
            <Icon icon={{ iconName: 'times', prefix: 'far' }} />
          </IconButton>
        </Header>
        <Body>
          {children}
        </Body>
      </Card>
    </Wrapper>
  )
}

export default Modal
