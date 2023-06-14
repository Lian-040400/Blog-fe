import thunk from 'redux-thunk'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { posts } from '@store/reducers/posts'

const rootReducer = combineReducers({ posts })

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})
