import { ApolloProvider } from '@apollo/client'
import { LocalizationProvider } from '@area2k/use-localization'
import { ModalProvider } from '@area2k/use-modal'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import RouterDebug from '@/widgets/RouterDebug'

import Main from '@/pages/Main'

import client from '@/util/apollo'

import Locales from '@/locales'

// NOTE: assigned to const ref for perf reasons
const theme = {}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <RouterDebug />
          <LocalizationProvider defaultLocale={Locales.default}>
            <ModalProvider>
              <Switch>
                <Route path='/'>
                  <Main />
                </Route>
              </Switch>
            </ModalProvider>
          </LocalizationProvider>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default hot(App)
