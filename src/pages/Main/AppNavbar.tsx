import React from 'react'

import Button from '@/components/Button'
import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import UnderlineButton from '@/components/UnderlineButton'

import MediaQuery from '@/widgets/MediaQuery'
import Navbar, { Group, IconItem } from '@/widgets/Navbar'

import { grey800 } from '@/theme/colors'
import { smallDesktop } from '@/theme/mediaQueries'

const AppNavbar = () => {
  return (
    <Navbar>
      <Flex gutter={0}>
        <MediaQuery inverse query={smallDesktop}>
          <IconItem>
            <Icon
              color={grey800}
              icon={{ iconName: 'bars', prefix: 'far' }}
            />
          </IconItem>
        </MediaQuery>
      </Flex>
      <Group>
        <Button palette='clear' size='compact'>
          Account
        </Button>
        <Button palette='clear' size='compact'>
          Log out
        </Button>
      </Group>
    </Navbar>
  )
}

export default AppNavbar
