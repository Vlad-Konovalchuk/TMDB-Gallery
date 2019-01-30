import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { rootReducer } from '../reducers'

export const history = createBrowserHistory()

export const store = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware(history),
    ),
  ),
)
