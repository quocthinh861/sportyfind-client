import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import userReducer from '../features/user/useSlice'
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist'

const reducers = combineReducers({
  user: userReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  // Expire in 60 minutes
  expires: 60 * 60 * 60 * 1000,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})