import { createStore, combineReducers, applyMiddleware } from 'redux'

import auth from './auth/reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const store = createStore(
  combineReducers({ auth }),
  applyMiddleware(thunk, logger)
)
export default store
export type RootState = ReturnType<typeof store.getState>
