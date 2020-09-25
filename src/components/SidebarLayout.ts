import styled from 'styled-components'

import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import { sidebarWidth } from '@/components/Sidebar'

import { smallDesktop } from '@/theme/mediaQueries'

const SidebarLayout = styled(Layout)`
  ${smallDesktop} {
    margin-left: ${sidebarWidth}rem;

    & + ${Footer} {
      margin-left: ${sidebarWidth}rem;
    }
  }
`

export default SidebarLayout
