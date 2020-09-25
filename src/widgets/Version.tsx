import useLocale from '@area2k/use-localization'
import React from 'react'

import Text, { Props } from '@/components/Text'

import { grey600 } from '@/theme/colors'

import Config from '@/config'

const Version = ({ color = grey600, size = 0.875,...rest }: Partial<Props>) => {
  const { formatDate } = useLocale()

  const formattedDate = formatDate(Config.BUILD_DATE, 'LLL do, HH:mm:ss zzz')

  return (
    <Text color={color} size={size} {...rest}>
      {Config.BUILD_VERSION}-{Config.BUILD_COMMIT.substring(0, 7)} ({Config.BUILD_BRANCH}) @ {formattedDate}
    </Text>
  )
}

export default Version
