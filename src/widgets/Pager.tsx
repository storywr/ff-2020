import useLocalization from '@area2k/use-localization'
import React from 'react'
import styled from 'styled-components'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Text from '@/components/Text'
import UnderlineButton from '@/components/UnderlineButton'

import { boldWeight } from '@/theme/typography'

interface Props {
  page: number
  totalPages: number
  onNext: () => void
  onPrevious: () => void
}

const Pager = ({ page, totalPages, onNext, onPrevious }: Props) => {
  const { translate } = useLocalization({ translationPrefix: 'pager' })

  return (
    <Flex gutter={1.5}>
      <Flex flex={1} justify='flex-start'>
        <UnderlineButton
          disabled={page === 1}
          fontSize={0.75}
          onClick={onPrevious}
        >
          <Icon
            icon={{ iconName: 'arrow-left', prefix: 'far' }}
            rMargin={0.625}
          />
          {translate('previous')}
        </UnderlineButton>
      </Flex>
      <Flex flex={1} justify='center'>
        <Text size={0.875} weight={boldWeight}>
          {translate('page', { page, totalPages })}
        </Text>
      </Flex>
      <Flex flex={1} justify='flex-end'>
        <UnderlineButton
          disabled={page === totalPages}
          fontSize={0.75}
          onClick={onNext}
        >
          {translate('next')}
          <Icon
            icon={{ iconName: 'arrow-right', prefix: 'far' }}
            lMargin={0.625}
          />
        </UnderlineButton>
      </Flex>
    </Flex>
  )
}

export default Pager
