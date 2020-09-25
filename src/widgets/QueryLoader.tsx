import { QueryResult } from '@apollo/client'
import React from 'react'
import styled from 'styled-components'

import Alert from '@/components/Alert'
import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Text from '@/components/Text'

import debug from '@/util/debug'

type ReactChild = React.ReactNode
type RenderFunction<T> = (data: T) => ReactChild

interface Props<T> {
  children: RenderFunction<T>
  result: QueryResult<T, Record<string, any>>
  whenError?: ReactChild
  whenLoading?: ReactChild
}

const Wrapper = styled(Flex)`
  padding: 2rem 0;
`

const Error = () => (
  <Wrapper justify='center'>
    <Alert palette='danger'>
      <Icon
        icon={{ iconName: 'exclamation-triangle', prefix: 'far' }}
        rMargin={1.5}
      />
      Error while loading query
    </Alert>
  </Wrapper>
)

const Loading = () => (
  <Wrapper justify='center'>
    <Icon
      spin
      icon={{ iconName: 'spinner-third', prefix: 'far' }}
      fontSize={1.5}
      rMargin={1.5}
    />
    <Text>
      Loading...
    </Text>
  </Wrapper>
)

const QueryLoader = <T extends any>({ children, result, whenError, whenLoading }: Props<T>) => {
  if (result.error) {
    return whenError === undefined
      ? <Error />
      : <>
          {whenError}
        </>
  }

  if (result.loading) {
    return whenLoading === undefined
      ? <Loading />
      : <>
          {whenLoading}
        </>
  }

  debug.log('[QueryLoader]', result, result.data)

  if (!result.data) {
    return null
  }

  return (
    <>
      {children(result.data)}
    </>
  )
}

export default QueryLoader
