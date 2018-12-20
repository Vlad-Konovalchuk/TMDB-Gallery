import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import { ping } from './enhancers/ping' // <-- подключаем наш enhancer

export const store = createStore(rootReducer, applyMiddleware(ping))