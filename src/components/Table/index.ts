import styled from 'styled-components'

const Table = styled.table`
  margin-bottom: 0.125rem;
  width: 100%;

  border-collapse: collapse;
`

export const Body = styled.tbody``
export { default as Cell } from './Cell'
export { default as Head } from './Head'
export { default as Heading } from './Heading'
export { default as Row } from './Row'

export default Table
