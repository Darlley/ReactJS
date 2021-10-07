'use strict'

// Aula 6.0.1
import ReactDOM, { render as renderizar } from './react-dom'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}

// shorthand notation e renomeação do import
renderizar('"Renomeação as" de exports nomeados')
ReactDOM.render('"Shorthand Notation {}" de exports default')
