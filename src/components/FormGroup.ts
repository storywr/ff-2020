import styled from 'styled-components'

import Text from '@/components/Text'

import { withDefaultProps } from '@/util/styles'

import { boldWeight } from '@/theme/typography'

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const _Label = styled(Text)`
  display: block;
  margin-bottom: 0.5rem;
  margin-left: 0.375rem;
`

export const Label = withDefaultProps(_Label, {
  as: 'label',
  size: 0.75,
  weight: boldWeight
})

const _HelpText = styled(Text)`
  display: block;
  margin-left: 0.375rem;
  margin-top: 0.5rem;
`

export const HelpText = withDefaultProps(_HelpText, {
  size: 0.75
})

export default FormGroup
