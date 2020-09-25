import styled from 'styled-components'

import { withDefaultProps } from '@/util/styles'

interface SectionProps {
  flexBasis: string | number
}

const transientProps = ['flexBasis']

const Section = styled.div.withConfig<SectionProps>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  display: flex;
  flex-direction: column;
  flex-basis: ${p => p.flexBasis};
  padding: 0 0.75rem;

  > * + * {
    margin-top: 1.5rem;
  }
`

const MainSectionComponent = styled(Section)`
  flex: 0 1;
`

export const MainSection = withDefaultProps(MainSectionComponent, {
  flexBasis: '70%'
})

export const SideSection = withDefaultProps(Section, {
  flexBasis: '30%'
})

const DetailLayout = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.75rem;
`

export default DetailLayout
