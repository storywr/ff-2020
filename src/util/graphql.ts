import { ApolloError, DocumentNode, InMemoryCache } from '@apollo/client'
import { GraphQLError, FieldNode, FragmentDefinitionNode, FragmentSpreadNode } from 'graphql'

import debug from '@/util/debug'

type ErrorHandler = (error: GraphQLError) => void

interface HandlerMap {
  [key: string]: ErrorHandler
}

export const handleGraphQLError = (handlers: HandlerMap) => (error: ApolloError) => {
  debug.error('[handleGraphQLError]', error)

  if (error.networkError || !error.graphQLErrors) throw error

  const defaultHandler = (gqlError: GraphQLError) => (
    handlers.all && handlers.all(gqlError)
  )

  error.graphQLErrors.forEach((gqlError) => {
    const { extensions } = gqlError
    let handler = defaultHandler

    if (extensions) {
      handler = handlers[extensions.code] || defaultHandler
    }

    handler(gqlError)
  })

  throw error
}

const firstFragmentFieldName = (defn: FragmentDefinitionNode) => {
  const selection = defn.selectionSet.selections[0] as (FieldNode | FragmentSpreadNode)
  return selection.name.value
}

type IndexMatchFn = (element: object) => boolean

interface AddToFragmentOptions {
  cacheKey?: string
  fragment: DocumentNode
  id: string
  index?: IndexMatchFn
  items: any[]
  item: any
}

export const addToFragment = (cache: InMemoryCache, options: AddToFragmentOptions) => {
  const { fragment, index, items, item } = options

  const insertIndex = index
    ? items.findIndex(index)
    : null
  const updatedItems = insertIndex
    ? [...items.slice(0, insertIndex), item, ...items.slice(insertIndex)]
    : [...items, item]

  const fragmentDefinition = fragment.definitions[0] as FragmentDefinitionNode
  const typeName = fragmentDefinition.typeCondition.name.value
  const cacheKey = options.cacheKey || firstFragmentFieldName(fragmentDefinition)

  cache.writeFragment({
    data: { [cacheKey]: updatedItems },
    fragment: options.fragment,
    id: `${typeName}:${options.id}`
  })
}

interface RemoveItem {
  id: string
}

interface RemoveFromFragmentOptions {
  cacheKey?: string
  fragment: DocumentNode
  id: string
  index?: IndexMatchFn
  items: RemoveItem[]
  item?: any
}

export const removeFromFragment = (cache: InMemoryCache, options: RemoveFromFragmentOptions) => {
  const { fragment, index, items, item } = options

  const matcher = (element: RemoveItem) => index
    ? index(element)
    : element.id === item.id

  const removeIndex = items.findIndex(matcher)
  const updatedItems = [...items.slice(0, removeIndex), ...items.slice(removeIndex + 1)]

  const fragmentDefinition = fragment.definitions[0] as FragmentDefinitionNode
  const typeName = fragmentDefinition.typeCondition.name.value
  const cacheKey = options.cacheKey || firstFragmentFieldName(fragmentDefinition)

  cache.writeFragment({
    data: { [cacheKey]: updatedItems },
    fragment: options.fragment,
    id: `${typeName}:${options.id}`
  })
}
