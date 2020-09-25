import React from 'react'
import styled from 'styled-components'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import SubtleLink from '@/components/SubtleLink'
import Text from '@/components/Text'
import UnderlineButton from '@/components/UnderlineButton'

import { grey500, grey700, grey800 } from '@/theme/colors'
import { boldWeight } from '@/theme/typography'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem 0 3rem;
`

const Subactions = styled(Flex)`
  margin-left: -0.875rem;
`

const Back = styled(UnderlineButton)`
  margin-bottom: -0.5rem;
  margin-left: -0.5rem;

  letter-spacing: 0.5px;
  text-transform: uppercase;
  word-spacing: 2px;
`

export interface Props {
  actions?: React.ReactNode
  back?: string
  backTo?: string
  title?: React.ReactNode
  titleText?: string
  subactions?: React.ReactNode
}

const PageHeader = ({ actions, back, backTo, title, titleText, subactions }: Props) => (
  <Wrapper>
    <Flex align='flex-start' direction='column'>
      {back && backTo &&
        <Back
          small
          as={SubtleLink}
          color={grey500}
          hoverColor={grey700}
          to={backTo}
        >
          <Icon icon={{ iconName: 'arrow-left', prefix: 'far' }} />
          {back}
        </Back>
      }
      {title
        ? title
        : <Text color={grey800} size={2.25} weight={boldWeight}>
            {titleText}
          </Text>
      }
      {subactions &&
        <Subactions gutter={0.5}>
          {subactions}
        </Subactions>
      }
    </Flex>
    <Flex>
      {actions}
    </Flex>
  </Wrapper>
)

export default PageHeader
