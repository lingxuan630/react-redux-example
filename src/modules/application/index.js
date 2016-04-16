import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Router from './router'
import configureStore from '../../store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    { Router() }
  </Provider>,
  document.getElementById('root')
)
