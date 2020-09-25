import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Page from '@/components/Page'
import SidebarLayout from '@/components/SidebarLayout'

// import LoadingScreen from '@/widgets/LoadingScreen'

import Drag from '@/pages/Drag'
import Home from '@/pages/Home'

import AppFooter from './AppFooter'
import AppNavbar from './AppNavbar'
import AppSidebar from './AppSidebar'

const Main = () => {
  return (
    <Page>
      <AppSidebar />
      <SidebarLayout>
        <AppNavbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/drag'>
            <Drag />
          </Route>
        </Switch>
      </SidebarLayout>
      <AppFooter />
    </Page>
  )
}

export default Main
