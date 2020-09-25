import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import { render } from 'react-dom'

import App from '@/pages/App'

import Config from '@/config'

// TODO: create custom font awesome library
import './icons'

const root = document.querySelector('#root')

if (!root) {
  throw new Error('no root element')
}

document.title = Config.APP_TITLE

render(
  <App />,
  root
)
