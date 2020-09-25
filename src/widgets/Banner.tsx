import React from 'react'
import styled from 'styled-components'

import Content from '@/widgets/Content'
import PageHeader, { Props as PageHeaderProps } from '@/widgets/PageHeader'

import { grey200 } from '@/theme/colors'
import { smallDesktop } from '@/theme/mediaQueries'

const Wrapper = styled.div`
  margin-bottom: 2.5rem;

  background-color: white;
  border-bottom: 1px solid ${grey200};
`

const TabsWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 0 -1rem -1px;
  width: 100%;

  overflow-x: auto;

  ${smallDesktop} {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
`

const TrackWrapper = styled.div`
  margin-bottom: 2.5rem;
`

interface Props
  extends PageHeaderProps {
  tabs?: React.ReactNode
  track?: React.ReactNode
}

const Banner = ({ tabs, track, ...rest }: Props) => (
  <Wrapper>
    <Content>
      <PageHeader {...rest} />
      {track &&
        <TrackWrapper>
          {track}
        </TrackWrapper>
      }
      {tabs &&
        <TabsWrapper>
          {tabs}
        </TabsWrapper>
      }
    </Content>
  </Wrapper>
)

export default Banner
