import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import { grey100, grey200 } from '@/theme/colors'

import useDebouncedValue from '@/hooks/useDebouncedValue'

import { DefaultFlexProps, Props as FlexProps, StyledFlex as Flex } from '@/components/Flex'
import Icon from '@/components/Icon'
import Input from '@/components/Input'
import Text from '@/components/Text'

import Suggest from './Suggestion'
import Suggestions from './Suggestions'

import debug from '@/util/debug'
import { KeyCode } from '@/util/enums'
import { withDefaultProps } from '@/util/styles'

interface ItemProps 
  extends FlexProps {
  disabled?: boolean
}

const transientProps = ['disabled']

const Wrapper = styled.div`
  width: 100%;

  position: relative;
`

const StyledItem = styled(Flex).withConfig<ItemProps>({
  shouldForwardProp: (prop) => !transientProps.includes(prop)
})`
  height: 2.625rem;
  padding: 0 1.25rem 0 0.75rem;
  width: 100%;

  background-color: ${p => p.disabled ? grey100 : 'white'};
  border-radius: 0.25rem;
  border: 1px solid ${grey200};
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    background-color: ${grey100};
  }
`

const Item = withDefaultProps(StyledItem, DefaultFlexProps)

export interface Suggestion<T> {
  active: boolean
  index: number
  item: T
  onSelect: () => void
}

export type Selection<T> = T | null

export interface Props<T> {
  children?: (suggestions: Array<Suggestion<T>>) => React.ReactElement[]
  debounce?: number
  deps?: any[]
  disabled?: boolean
  getItems: (query: string) => Promise<T[]>
  initialQuery?: string
  itemToString: (item: T) => string
  loadingPrompt?: string
  noResults?: string
  placeholder?: string
  renderItem?: (item: T, onCancel: () => void) => React.ReactElement
  required?: boolean
  value: Selection<T>
  onBlur?: () => void
  onChange: (item: Selection<T>) => void
  onFocus?: () => void
}

// TODO: autofocus after unselecting an item

const Autocomplete = <T extends any>({
  children, debounce = 250, deps = [], disabled = false, getItems, initialQuery = '',
  itemToString, loadingPrompt = 'Loading...', noResults = 'No results', renderItem,
  required = false, value, onBlur, onChange, onFocus, ...rest
}: Props<T>) => {
  const [query, setQuery] = useState(initialQuery)
  const [activeIndex, setActiveIndex] = useState(0)
  const [suggestions, setSuggestions] = useState<Array<Suggestion<T>>>([])
  const [isFocused, setIsFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const debouncedQuery = useDebouncedValue(query, debounce)

  useEffect(() => {
    if (disabled) return

    setIsLoading(true)
    setActiveIndex(0)

    debug.log('[Autocomplete] getItems')

    getItems(debouncedQuery)
      .then((items) => {
        setSuggestions(items.map((el, index): Suggestion<T> => ({
          active: index === 0, index, item: el, onSelect: () => handleSelect(el)
        })))
        setIsLoading(false)
      })
      .catch((error) => {
        debug.error('[Autocomplete] getItems =>', error)
      })
  }, [disabled, debouncedQuery, ...deps])

  useMemo(() => {
    setSuggestions(suggestions => suggestions.map((suggestion, index) => ({
      ...suggestion, active: index === activeIndex
    })))
  }, [activeIndex])

  const handleBlur = useCallback(() => {
    setActiveIndex(0)
    setIsFocused(false)
    if (onBlur) onBlur()
  }, [onBlur])

  const handleFocus = useCallback(() => {
    setIsFocused(true)
    if (onFocus) onFocus()
  }, [onFocus])

  const handleChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value)

    if (required) {
      e.currentTarget.setCustomValidity('Please select an option')
    }
  }, [required])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === KeyCode.DOWN) {
      e.preventDefault()
      setActiveIndex(index => Math.min(index + 1, suggestions.length - 1))
    } else if (e.keyCode === KeyCode.UP) {
      e.preventDefault()
      setActiveIndex(index => Math.max(index - 1, 0))
    } else if (e.keyCode === KeyCode.ENTER) {
      e.preventDefault()
      handleSelect(suggestions[activeIndex].item)
    }
  }, [suggestions])

  const handleSelect = useCallback((item: Selection<T>) => {
    if (disabled) return

    setActiveIndex(0)
    onChange(item)
  }, [disabled, onChange])

  if (value) {
    if (renderItem) {
      return renderItem(value, () => handleSelect(null))
    }

    return (
      <Item
        disabled={disabled}
        justify='space-between'
        onClick={() => handleSelect(null)}
      >
        <Text color='grey800' size={0.875}>
          {itemToString(value)}
        </Text>
        <Text size={0.75}>
          <Icon icon={{ iconName: 'times', prefix: 'far' }} />
        </Text>
      </Item>
    )
  }

  return (
    <Wrapper>
      <Input
        {...rest}
        disabled={disabled}
        required={required}
        value={query}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />
      <Suggestions
        isFocused={isFocused}
        isLoading={isLoading}
        loadingPrompt={loadingPrompt}
        noResults={noResults}
      >
        {children
          ? children(suggestions)
          : suggestions.map((suggestion, index) => (
              <Suggest
                key={index}
                isActive={suggestion.active}
                onClick={suggestion.onSelect}
              >
                {itemToString(suggestion.item)}
              </Suggest>
            ))
        }
      </Suggestions>
    </Wrapper>
  )
}

export default Autocomplete

// NOTE: because we have a type named Suggestion
export { Suggest as Suggestion }
