import styled from 'styled-components'

import { StyledInput } from '@/components/Input'

import { withDefaultProps } from '@/util/styles'

const Select = styled(StyledInput)`
  appearance: none;

  cursor: pointer;
`

export default withDefaultProps(Select, {
  as: 'select'
})
